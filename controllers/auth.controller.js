import { config } from "../config/config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // 1. If user exist.
    const isAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isAlreadyRegistered) {
      res
        .status(409)
        .json({ message: "Username or email is already registered." });
    }

    // 2. If user not exist.
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // 3. Create a Token.
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User registered successfully.",
      user: { username: user.username, email: user.email },
      token,
    });
  } catch (error) {
    console.log("Something went wrong while creating User.", error);
  }
}

