import { Box, VStack, Text, Button, Avatar, HStack } from "@chakra-ui/react";

const RightSidebar = () => {
  return (
    <Box as="aside" p={4} bg="gray.900" color="white" height="100vh" width="300px" position="fixed" right={0}>
      <VStack spacing={4} align="start">
        <Box width="100%">
          <Text fontSize="lg" fontWeight="bold">Subscribe to Premium</Text>
          <Text fontSize="sm">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</Text>
          <Button colorScheme="blue" mt={2}>Subscribe</Button>
        </Box>
        <Box width="100%">
          <Text fontSize="lg" fontWeight="bold">Who to follow</Text>
          <VStack spacing={2} align="start">
            <HStack spacing={2}>
              <Avatar name="Christoph Janz" />
              <VStack spacing={0} align="start">
                <Text fontSize="sm" fontWeight="bold">Christoph Janz</Text>
                <Text fontSize="xs">@chrjja</Text>
              </VStack>
              <Button size="sm" colorScheme="blue">Follow</Button>
            </HStack>
            <HStack spacing={2}>
              <Avatar name="levelsio" />
              <VStack spacing={0} align="start">
                <Text fontSize="sm" fontWeight="bold">levelsio</Text>
                <Text fontSize="xs">@levelsio</Text>
              </VStack>
              <Button size="sm" colorScheme="blue">Follow</Button>
            </HStack>
            <HStack spacing={2}>
              <Avatar name="Jack Etienne" />
              <VStack spacing={0} align="start">
                <Text fontSize="sm" fontWeight="bold">Jack Etienne</Text>
                <Text fontSize="xs">@JackEtienne</Text>
              </VStack>
              <Button size="sm" colorScheme="blue">Follow</Button>
            </HStack>
          </VStack>
        </Box>
        <Box width="100%">
          <Text fontSize="lg" fontWeight="bold">Trends</Text>
          <VStack spacing={2} align="start">
            <Text fontSize="sm">1 - Trending: Farsta</Text>
            <Text fontSize="sm">2 - Technology: Microsoft</Text>
            <Text fontSize="sm">3 - Trending: Henning</Text>
            <Text fontSize="sm">4 - Politics: Hammar</Text>
            <Text fontSize="sm">5 - Trending: Ukraina</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default RightSidebar;