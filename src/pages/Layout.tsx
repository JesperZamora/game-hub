import { Box, HStack, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import GameListDrawer from "../components/GameListDrawer";

const Layout = () => {
  return (
    <>
      <HStack spacing={2} marginLeft={2} w="full" justify="space-between">
        <Show below="lg">
          <GameListDrawer />
        </Show>
        <NavBar />
      </HStack>

      <Box padding={6}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
