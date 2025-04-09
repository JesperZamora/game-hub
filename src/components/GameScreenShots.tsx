import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  game_pk: number;
}

const GameScreenShots = ({ game_pk }: Props) => {
  const { data, error, isLoading } = useScreenShots(game_pk);

  if (isLoading) return null;

  if (error) throw Error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
