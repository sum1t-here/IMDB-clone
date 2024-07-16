import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface PageProps {
  searchParams: {
    genre?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const genre = searchParams.genre || "fetchTrending";

  const res: Response = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
      resolve(response);
    }, 2000);
  });

  if (!res.ok) {
    // Throw an error if the response is not ok
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  // Parse the JSON data
  const data = await res.json();
  const results = data.results;
  // console.log(results);

  return (
    <div className="min-h-screen">
      <Results results={results} />
      {/* Render results if needed */}
    </div>
  );
}
