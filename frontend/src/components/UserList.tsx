import { VStack, Flex, Text, Spinner } from "@chakra-ui/react";
import UserCard from "./UserCard";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  company?: { name?: string; title?: string };
  address?: { country?: string };
  image?: string;
}

interface Props {
  users: User[];
  isLoading: boolean;
  onDelete: (id: number) => void;
  usersListRef?: React.RefObject<HTMLDivElement | null>
}

const UserList: React.FC<Props> = ({ users, isLoading, onDelete, usersListRef }) => {
  if (isLoading) {
    return (
      <Flex justify="center" align="center" py={12} direction="column">
        <Spinner size="xl" color="blue.500" mb={4} />
        <Text color="gray.500">Loading users...</Text>
      </Flex>
    );
  }

  if (users.length === 0) {
    return (
      <Flex justify="center" align="center" py={12} direction="column">
        <Text fontSize="lg" fontWeight="medium" mb={2}>No users found</Text>
        <Text color="gray.500">Try adjusting your search or add a new user</Text>
      </Flex>
    );
  }


  return (
    <div ref={usersListRef} style={{ width: "100%" }}>
      <VStack gap={3} w="100%">
        {users.map((user) => (
          <UserCard key={user.id} {...user} onDelete={onDelete} />
        ))}
      </VStack>
    </div>
  );
};

export default UserList;
