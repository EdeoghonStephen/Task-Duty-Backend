import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Routes
import taskRouter from "./src/routes/taskRouter.js";
import notFound from "./src/utils/notFound.js";

// app.use((req, res, next) => {
//   console.log("A request just came in");
//   console.log(req.url, req.method);
//   next();
// });

// alllows aaccess to the req.body
app.use(express.json());

// logs the request method, url, status code etc on every request
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "My First API" });
});

app.use("/api/task", taskRouter);

app.use(notFound);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "TaskDuty" });
    console.log(`Db Connected`);
    app.listen(port, () => {
      console.log(`Server is Listening on PORT:${port}`);
    });
  } catch (error) {
    console.log(`Could not connect because of ${error.message}`);
  }
};

startServer();
