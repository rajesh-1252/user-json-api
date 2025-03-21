import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Container } from "@chakra-ui/react";
import { toaster, Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import UserActions from "./components/UserActions";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  company?: { name?: string; title?: string };
  address?: { country?: string };
  image?: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const usersListRef = useRef<HTMLDivElement>(null);
  const [debounceSearch, setDebounceSearch] = useState("");

  const fetchUsers = async (isRefresh = false) => {
    if (isRefresh) setIsRefreshing(true);
    setIsLoading(true);

    try {
      const response = await axios.get<{ users: User[] }>("https://dummyjson.com/users");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
    } catch {
      toaster.create({ title: "Failed to fetch users", type: "error" });
    } finally {
      if (isRefresh) setIsRefreshing(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (!debounceSearch.trim()) {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          user.lastName.toLowerCase().includes(debounceSearch.toLowerCase()) ||
          (user.company?.name || "").toLowerCase().includes(debounceSearch.toLowerCase())
      )
    );
  }, [debounceSearch, users]);

  const handleRefresh = async () => {
    await fetchUsers(true);
    toaster.create({ title: "Users refreshed", type: "success" });
  };

  const handleSearch = (query: string) => setSearchQuery(query);

  const handleAddUser = () => {
    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1,
      firstName: "New",
      lastName: "User",
      company: { name: "Google", title: "Developer" },
      address: { country: "United States" },
      image: "https://dummyjson.com/icon/user/placeholder",
    };

    setUsers([...users, newUser]);
    setFilteredUsers([...filteredUsers, newUser]);
    toaster.create({ title: "New user added!", type: "success" });

    setTimeout(() => {
      usersListRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
    setFilteredUsers(filteredUsers.filter((u) => u.id !== id));
  };

  return (
    <Box minH="100vh" bg="gray.100">
      <Toaster />
      <Header />
      <Container maxW="container.lg" py={4}>
        <UserActions onRefresh={handleRefresh} onAddUser={handleAddUser} isLoading={isRefreshing} />
        <UserSearch value={searchQuery} onSearch={handleSearch} />
        <UserList usersListRef={usersListRef} users={filteredUsers} isLoading={isLoading} onDelete={handleDeleteUser} />
      </Container>
    </Box>
  );
};

export default App;
