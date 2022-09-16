import express, { Application, Router } from "express";
import morgan from "morgan";
import cors from "cors";
import IndexRoutes from "./routes/index.routes";
import StudentRoutes from "./routes/students.routes";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

const app = express()

const appRouter = trpc.router().query("hello", {
  resolve() {
    return 20;
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
    createContext: () => null
  })
)

app.use(IndexRoutes);
app.use('/students', StudentRoutes);

app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);
