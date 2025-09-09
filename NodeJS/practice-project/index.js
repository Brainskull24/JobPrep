import express from "express";
import loggerMiddleware from "./middleware.js";
import mongoose from "mongoose";
import Todo from "./models/todos.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import User from "./models/user.js";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authMiddleware from "./auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

console.log("JWT_SECRET from env:", process.env.JWT_SECRET);

app.use(loggerMiddleware);

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://nimitgarg24:devDB@devdb.airmxci.mongodb.net/")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB issue", err);
    });
};

connectDB();

app.get("/", loggerMiddleware, (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", authMiddleware, async (req, res, next) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

app.post("/todos", authMiddleware, async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required" });

    const newTodo = new Todo({ text, user: req.user.id });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// Update Todo
app.put("/todos/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user.id },
      update,
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

// Delete Todo
app.delete("/todos/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Todo.findOneAndDelete({ _id: id, user: req.user.id });
    if (!removed) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
});

app.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "Missing fields" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashed });
    await user.save();

    // create token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/login
app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Missing fields" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    next(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// let users = [];

// app.get("/users", loggerMiddleware, (req, res) => {
//   return res.json(users);
// });

// app.delete("/users/:id", loggerMiddleware, (req, res) => {
//   const { id } = req.params;
//   const initialLength = users.length;
//   users = users.filter((user) => user.id != id);
//   if (users.length === initialLength) {
//     return res.status(404).json({ error: "User not found" });
//   }
//   return res.json({ message: "User deleted successfully" });
// });

// app.post("/users", loggerMiddleware, (req, res) => {
//   const { id, name } = req.body;

//   if (!id || !name) {
//     return res.status(400).json({ message: "ID and Name are required" });
//   }

//   users.push({ id: id, name });
//   return res.json({ message: "User added successfully" });
// });
