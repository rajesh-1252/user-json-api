import { Input, Box } from "@chakra-ui/react";

interface Props {
  value: string;
  onSearch: (query: string) => void;
}

const UserSearch: React.FC<Props> = ({ value, onSearch }) => {
  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm" mb={6}>
      <Input
        placeholder="Search by name, company, role, or country..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        size="lg"
        variant="subtle"
        _focus={{ borderColor: "blue.400", bg: "white" }}
      />
    </Box>
  );
};

export default UserSearch;
