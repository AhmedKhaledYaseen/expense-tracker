import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

//Routes
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import auditRoutes from "./routes/auditRoutes.js";

// Not Found and Global Error handler
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

// Config
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Ensure DB connection for every request in serverless/cloud environments
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    return res.status(503).json({
      message: "Database connection failed. Please check MongoDB Atlas IP Access List (whitelist 0.0.0.0/0).",
      error: err.message,
    });
  }
});

// Testing API
app.get("/", (req, res) => {
  res.send("expense-tracker-backend API is running...");
});

// Route mounting
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/audit-logs", auditRoutes);

//Error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

export default app;
