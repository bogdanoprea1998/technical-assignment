import { Schema, model, models } from "mongoose";

export const movieSchema = new Schema(
  {
    tmdb_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
    },
    release_date: {
      type: String,
    },
    overview: {
      type: String,
    },
  },
  { timestamps: true }
);

const MovieModel = models.movie || model("movie", movieSchema);

export default MovieModel;
