// import useData from "./useData";
import genres from "../Data/genres";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: null});

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