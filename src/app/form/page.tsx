"use client";
import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Data } from "../../../actions/data";

export function FileUploadDemo() {}
export default function Form() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
  const [img, secImg] = useState("");
  const [title, secTitle] = useState("");
  const [des, secDesc] = useState("");
  return (
    <>
      <div className=" flex h-screen w-screen flex-col">
        <div className="img">
          <label
            htmlFor="img"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Img Url
          </label>
          <input
            onChange={(e) => {
              secImg(e.target.value);
            }}
            type="text"
            id="img"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Img Url"
            required
          />
        </div>
        <div className=" title">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            onChange={(e) => {
              secTitle(e.target.value);
            }}
            type="text"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className=" des">
          <label
            htmlFor="des"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            onChange={(e) => {
              secDesc(e.target.value);
            }}
            type="text"
            id="des"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            required
          />
        </div>
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
        <button
          className="h-8 w-12 bg-amber-300"
          onClick={() => {
            Data({ img, title, des, files });
          }}
        >
          submit
        </button>
      </div>
    </>
  );
}
