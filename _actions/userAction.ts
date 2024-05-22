"use server";

import connectDB from "../config/database";
import UserModel from "../models/userModel";

export async function getUsers() {
  try {
    await connectDB();
    const data = await UserModel.find({});

    return { ...data };
  } catch (error) {
    return { errMsg: error };
  }
}

export async function postUser(userData: any) {
  const symbolKey = Object.getOwnPropertySymbols(userData)[0];
  const stateArray = userData[symbolKey];

  const newUser = {
    username: stateArray[1].value,
    email: stateArray[2].value,
    password: stateArray[3].value,
  };

  try {
    await connectDB();
    await UserModel.create(newUser);
  } catch (error) {
    return { errMsg: error };
  }
}

export async function getUserFromDb(username: any, password: any) {
  try {
    await connectDB();
    return await UserModel.find({
      username: username,
      password: password,
    }).exec();
  } catch (error) {
    throw error;
  }
}
