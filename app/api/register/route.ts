import UserModel from "@/models/userModel";
import connectDB from "@/config/database";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");

export const POST = async (request: any) => {
  const { username, email, password } = await request.json();

  await connectDB();

  const existingUsername = await UserModel.findOne({ username });
  const existingEmail = await UserModel.findOne({ email });

  if (existingUsername || existingEmail) {
    return new NextResponse("Username or email is already in use", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new UserModel({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (error: any) {
    throw new NextResponse(error, {
      status: 500,
    });
  }
};
