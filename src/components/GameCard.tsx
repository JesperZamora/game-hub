import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  SlideFade,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <SlideFade
      in={true}
      offsetY="20px"
      transition={{ enter: { duration: 0.4 } }}
    >
      <Card
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: "scale(1.04)",
          boxShadow: "lg",
        }}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </SlideFade>
  );
};

export default GameCard;
