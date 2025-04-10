import { Box, HStack, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import GameListDrawer from "../components/GameListDrawer";

const Layout = () => {
  return (
    <>
      <HStack w="full" justify="space-between" paddingLeft={2} paddingRight={4}>
        <NavBar />
        <Show below="lg">
          <GameListDrawer />
        </Show>
      </HStack>

      <Box padding={6}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
