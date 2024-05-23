"use server";

import connectDB from "../config/database";
import UserModel from "../models/userModel";

const bcrypt = require("bcrypt");

export async function getUserFromDb(username: any, password: any) {
  try {
    await connectDB();
    const user = await UserModel.findOne({ username });
    if (user) {
      const isPassCorrect = await bcrypt.compare(password, user.password);
      if (isPassCorrect) {
        return user;
      }
    }
  } catch (error: any) {
    throw new Error(error);
  }
}
