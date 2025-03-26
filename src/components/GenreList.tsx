import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
