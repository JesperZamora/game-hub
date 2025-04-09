import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";

const useGenre = (id?: number) => {
    const { data: genres } = useGenres();
    return genres?.results.find((g: Genre) => g.id === id);
};

export default useGenre;