import Game from "../entities/Game";
import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Stack gap={4}>
          <Heading fontSize={"2xl"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
          <Button onClick={() => navigate("/games/" + game.slug)}>
            View details
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
