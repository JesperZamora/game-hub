import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} margin={1} />
        <Input
          ref={ref}
          focusBorderColor="lightgrey"
          borderRadius={24}
          placeholder="Search games..."
          variant="filled"
          paddingY={5}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
