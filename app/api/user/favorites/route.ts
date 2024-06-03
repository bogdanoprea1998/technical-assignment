import UserModel from "@/models/userModel";
import connectDB from "@/config/database";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { email } = await request.json();
    await connectDB();

    const user = await UserModel.findOne({ email });
    const userFavorites = user.favorites;

    return new NextResponse(JSON.stringify(userFavorites), { status: 200 });
  } catch (error: any) {
    throw new NextResponse(error, {
      status: 500,
    });
  }
};
