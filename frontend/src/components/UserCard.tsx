import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  company?: { name?: string; title?: string };
  address?: { country?: string };
  image?: string;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<User> = ({ id, firstName, lastName, company, address, image, onDelete }) => {
  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="sm" w="100%">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Box
            borderRadius="full"
            overflow="hidden"
            w="60px"
            h="60px"
            mr={4}
            border="3px solid"
            borderColor="blue.100"
            boxShadow="sm"
          >
            <img src={image} alt={`${firstName} ${lastName}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold">{firstName} {lastName}</Text>
            <Text fontSize="sm" color="gray.500">{company?.title || "No Title"} • {company?.name || "No Company"}</Text>
            <Text fontSize="sm" color="blue.500">{address?.country || "No Country"}</Text>
          </Box>
        </Flex>

        <Button colorScheme="red" size="sm" onClick={() => onDelete(id)}>Delete</Button>
      </Flex>
    </Box>
  );
};

export default UserCard;
