import { Container, Select, Text } from "./Dropdown.styled";

const Dropdown = ({onChange}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <Container>
      <Text>Filter tweets: </Text>
      <Select name="filter" onChange={handleChange}>
        <option value="Show all">Show all</option>
        <option value="Follow">Follow</option>
        <option value="Following">Following</option>
      </Select>
    </Container>
  );
};

export default Dropdown;
