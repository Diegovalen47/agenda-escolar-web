import express, { Application, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import IndexRoutes from "./routes/index.routes";
import StudentRoutes from "./routes/students.routes";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createNewStudentDatabase, getStudentsDatabase } from "./controllers/student.controller";
import { z } from "zod";
import { Student } from "./interfaces/student.interface";

const app = express()

// trpc configuration
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({})
type Context = trpc.inferAsyncReturnType<typeof createContext>

// trpc configuration
const appRouter = trpc
  .router()
  .query("hello", {
    resolve() {
      return 'Hola mundo desde trpc';
    }
  })
  .query('getStudents', {
    async resolve() {
      const response = await getStudentsDatabase()
      return response
    }
  })
  .mutation('createStudent', {
    input: z.object({
      studentId: z.number(),
      password: z.string(),
      name: z.string(),
      lastName: z.string(),
      email: z.string().nullish()
    }),
    async resolve({ input }) {
      console.log(input)
      const response = await createNewStudentDatabase(input as unknown as Student)
      console.log(response)
      return response
    }
  })

export type AppRouter = typeof appRouter

app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(cors())
app.use(morgan("dev"));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.use(IndexRoutes);
app.use('/students', StudentRoutes);

app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);
