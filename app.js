import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors());
app.use(express.json());
TuitController(app)
HelloController(app)
UserController(app)
// Port 4000 did not work for Windows. Use 4100 instead.
app.listen(process.env.PORT || 4100)