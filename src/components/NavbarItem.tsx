"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
}

function NavbarItemContent({ title, param }: NavbarItemProps) {
  const searchParam = new URLSearchParams(useSearchParams().toString());
  const genre = searchParam.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
