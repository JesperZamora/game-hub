import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Stack spacing={2}>
          <GameTrailer gameId={game.id} />
          <GameScreenShots game_pk={game.id} />
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
