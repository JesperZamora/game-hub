import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = ({}: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        OrderBy:
      </MenuButton>
      <MenuList>
        <MenuItem>adasds</MenuItem>
        <MenuItem>adasds</MenuItem>
        <MenuItem>adasds</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
