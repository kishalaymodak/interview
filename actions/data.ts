"use server";
import client from "./db";
import mongoose from "mongoose";
import { ImageSchema } from "./db2";
import fs from "fs";
export async function Data({ img, title, des, files }: any) {
  await mongoose.connect("mongodb://localhost:27017/imageDB");
  const newImage = new ImageSchema({
    title,
    des,
    img: {
      //@ts-ignore
      data: fs.readFileSync(path.join(__dirname, "uploads", files)),
      contentType: files.mimetype,
    },
  });
}

export async function getdata() {
  const data = await client.table.findMany();
  return data;
}
