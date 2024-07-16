"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Searchbox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/search/${search}`);
    }
  };
  return (
    <form
      className="flex p-5 max-w-6xl mx-auto flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords ..."
        className="w-full h-14 rounded-md px-4 text-gray-800 placeholder-gray-500 outline-none bg-gray-100 flex-1 border-2 border-gray-300 focus:border-amber-600 transition duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="w-32 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-500 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
