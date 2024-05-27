"use server";

import connectDB from "../config/database";
import UserModel from "../models/userModel";
import MovieModel from "@/models/movieModel";

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

export async function updateFavorites(email: any, tmdb_id: string) {
  try {
    await connectDB();
    const movie = await MovieModel.findOne({ tmdb_id });

    const userFavorites = (await UserModel.findOne({ email })).favorites;
    if (userFavorites.find((element: any) => element.tmdb_id === movie.tmdb_id))
      return;
    await UserModel.updateOne({ email }, { $push: { favorites: movie } });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function removeFromFavorites(email: any, tmdb_id: string) {
  try {
    await connectDB();
    const movie = await MovieModel.findOne({ tmdb_id });
    if (!movie) return;

    const userFavorites = (await UserModel.findOne({ email })).favorites;
    if (userFavorites.find((element: any) => element.tmdb_id === movie.tmdb_id))
      await UserModel.updateOne(
        { email },
        { $pull: { favorites: { _id: movie._id } } }
      );
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getFavorites(email: any) {
  try {
    await connectDB();
    const userFavorites = (await UserModel.findOne({ email })).favorites;
    return userFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
