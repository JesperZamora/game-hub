import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <CgDarkMode size={24} />
    </HStack>
  );
};

export default ColorModeSwitch;
