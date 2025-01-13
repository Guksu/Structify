"use client";

import infoStore from "@/store/infoStore";
import { useStore } from "zustand";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFunnel from "@/hooks/useFunnel";

export default function InfoFunnel() {
  const {
    title,
    from,
    to,
    description,
    setTitle,
    setFrom,
    setTo,
    setDescription,
  } = useStore(infoStore);

  const { moveNext } = useFunnel();

  return (
    <div className="container mx-auto p-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateFrom"
            >
              From
            </label>
            <DatePicker
              selected={from}
              onChange={(date) => setFrom(date ?? new Date())}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateFrom"
              popperPlacement="bottom-start"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateTo"
            >
              To
            </label>
            <DatePicker
              selected={to}
              onChange={(date) => setTo(date ?? new Date())}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateTo"
              popperPlacement="bottom-start"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            className="resize-none shadow appearance-none border rounded w-full h-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            maxLength={500}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={moveNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
