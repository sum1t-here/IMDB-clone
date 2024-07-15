"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-center mt-10">
        Something went wrong, please try again later !!!
      </h1>
      <button className="text-amber-600" onClick={() => reset}>
        Try again
      </button>
    </div>
  );
}
