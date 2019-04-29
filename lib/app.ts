import * as express from "express";
import * as bodyParser from "body-parser";
import cors from "./middleware/cors";
import Routes from "./routes/routes";
import * as mongoose from "mongoose";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/crud-express-mongo';

    constructor() {
        this.app = express();
        this.mongoSetup();
        this.config();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors);
        this.app.use(this.routePrv.routes());
    }
}

export default new App().app;