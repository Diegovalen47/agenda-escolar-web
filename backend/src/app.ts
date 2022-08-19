import express, { Application } from "express";
import morgan from "morgan";

export class App {

  private app: Application
  private port?: number | string

  constructor(port?: number | string) {
    this.app = express()
    this.port = port
    this.settings()
    this.middlewares()
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 4000)
  }

  middlewares () {
    this.app.use(morgan('dev'))
  }

  async listen() {

    var puerto: number = this.app.get('port')

    await this.app.listen(puerto)
    console.log('server on port', puerto)
  }

}

