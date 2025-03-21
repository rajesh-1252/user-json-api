import { Button, Flex, Stack, Heading } from "@chakra-ui/react";

interface Props {
  onRefresh: () => void;
  onAddUser: () => void;
  isLoading: boolean;
}

const UserActions: React.FC<Props> = ({ onRefresh, onAddUser, isLoading }) => {
  return (
    <Flex justify="space-between" mb={6} bg="white" p={4} borderRadius="lg" boxShadow="sm" align="center">
      <Heading size="md">User</Heading>
      <Stack direction="row" gap={3}>
        <Button colorScheme="blue" onClick={onRefresh} loading={isLoading} loadingText="Refreshing" size="md">
          Refresh
        </Button>
        <Button colorScheme="green" onClick={onAddUser} size="md">
          + Add User
        </Button>
      </Stack>
    </Flex>
  );
};

export default UserActions;
