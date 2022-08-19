import { App } from "./app";

async function main() {
  const app = new App(4000);
  await app.listen();
}

main();
