import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.04)",
        boxShadow: "lg",
      }}
      width="100%"
      borderRadius={10}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
