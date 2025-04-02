// import useData from "./useData";
import genres from "../Data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres }
})

export default useGenres;


// interface FetchGenresResponse {
//     count: number,
//     results: Genre[]
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", {signal: controller.signal})
//       .then((res) => {
//         setGenres(res.data.results)
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message)
//         setIsLoading(false);
//       });

//     return () => controller.abort();
//     }, []);
//     return { genres, error, isLoading };
// }