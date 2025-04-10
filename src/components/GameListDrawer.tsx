import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  List,
  ListItem,
  HStack,
  Spinner,
  Button,
  Image,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import Genre from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";

const GameListDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <RxHamburgerMenu onClick={onOpen} cursor="pointer" size={35} />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="2xl" marginBottom={3}>
            Genres
          </DrawerHeader>
          <DrawerBody>
            <List>
              {data?.results.map((genre: Genre) => (
                <ListItem key={genre.id} paddingY="5px">
                  <HStack>
                    <Image
                      boxSize="32px"
                      borderRadius={8}
                      objectFit="cover"
                      src={getCroppedImageUrl(genre.image_background)}
                    />
                    <Button
                      whiteSpace="normal"
                      textAlign="left"
                      fontWeight={
                        genre.id === selectedGenreId ? "bold" : "normal"
                      }
                      onClick={() => setSelectedGenreId(genre.id)}
                      fontSize="lg"
                      variant="link"
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GameListDrawer;
