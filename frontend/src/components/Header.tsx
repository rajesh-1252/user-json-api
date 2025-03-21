import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {

  return (
    <Box bg="blue.600" boxShadow="md" py={4} mb={6}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading size="xl" color="white">User Dashboard</Heading>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
