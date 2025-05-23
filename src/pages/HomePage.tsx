import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelecter from "../components/PlatformSelecter";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" marginTop={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Show above="lg">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={2} marginBottom={5}>
              <PlatformSelecter />
              <SortSelector />
            </HStack>
          </Box>
        </Show>
        <Show below="lg">
          <Box paddingLeft={0}>
            <GameHeading />
            <HStack spacing={2} marginBottom={5}>
              <PlatformSelecter />
              <SortSelector />
            </HStack>
          </Box>
        </Show>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
