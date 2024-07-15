"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: String;
  param: String;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "uxnderline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
