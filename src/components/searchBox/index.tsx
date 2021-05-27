import React from "react";
import { TextInput } from "vcc-ui";
interface SearchBoxProps {
  onChange: (e: any) => void;
  searchField: string
}
const SearchBox = ({ onChange,searchField }: SearchBoxProps) => {
  return <TextInput placeholder="Search" type="text" onChange={onChange} value={searchField} />;
};

export default SearchBox;