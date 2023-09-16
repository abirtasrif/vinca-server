import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.conectToDatabase();
    this.setUpRoutes();
    this.conectToDatabase();
  }

  private configureMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(ExpressMongoSanitize());
    this.app.use(helmet());
    this.app.use(hpp());
  }

  private setUpRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Welcome to Vinca Server' });
    });
  }

  private conectToDatabase(): void {
    const URI = process.env.MONGO_URI as string;

    mongoose
      .connect(URI)
      .then(() => {
        const PORT = process.env.PORT || 4000;

        this.app.listen(PORT, () => {
          console.log(`Server is running on port: ${PORT}`);
        });
      })
      .catch((error) => {
        console.log(`MongoDB connection error: ${error}`);
      });
  }
}

dotenv.config();

new App();
