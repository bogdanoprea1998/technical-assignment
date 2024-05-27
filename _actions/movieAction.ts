"use server";

import connectDB from "../config/database";
import MovieModel from "../models/movieModel";

export async function postMovie(movie: any) {
  const { tmdb_id, title, poster_path, release_date, overview } = movie;
  try {
    await connectDB();

    const isAlreadyExisting = await MovieModel.findOne({ tmdb_id });

    if (isAlreadyExisting) {
      return;
    }

    await MovieModel.create({
      tmdb_id,
      title,
      poster_path,
      release_date,
      overview,
    });

    return true;
  } catch (error: any) {
    throw new Error(error);
  }
}
