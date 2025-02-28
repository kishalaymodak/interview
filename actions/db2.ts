import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

export const ImageSchema = mongoose.model("Image", imageSchema);
