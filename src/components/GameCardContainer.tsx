import { Box, SlideFade } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <SlideFade
      in={true}
      offsetY="20px"
      transition={{ enter: { duration: 0.4 } }}
    >
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
    </SlideFade>
  );
};

export default GameCardContainer;
