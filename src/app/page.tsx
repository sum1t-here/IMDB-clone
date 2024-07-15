import Results from "@/components/Results";
import error from "./error";

const API_KEY = process.env.API_KEY;

interface PageProps {
  searchParams: {
    genre?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  // Create an AbortController to handle request timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

  // Make the fetch request with the AbortController's signal
  const res = await fetch(url, { signal: controller.signal });

  if (!res.ok) {
    // Throw an error if the response is not ok
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  // Parse the JSON data
  const data = await res.json();
  const results = data.results;
  // console.log(results);

  // Clear the timeout if the fetch request completes successfully
  clearTimeout(timeoutId);

  return (
    <div className="min-h-screen">
      <Results results={results} />
      {/* Render results if needed */}
    </div>
  );
}
