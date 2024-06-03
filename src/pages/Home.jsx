import { Box, VStack, HStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import PostCreation from "../components/PostCreation";
import Post from "../components/Post";

const Home = () => {
  return (
    <Box ml="250px" mr="300px" p={4} bg="gray.900" color="white" minHeight="100vh">
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>For you</Tab>
          <Tab>Following</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PostCreation />
            <VStack spacing={4}>
              <Post avatar="https://bit.ly/dan-abramov" username="Dan Abramov" timestamp="2h" content="Just learned about React Hooks!" />
              <Post avatar="https://bit.ly/ryan-florence" username="Ryan Florence" timestamp="4h" content="React Router v6 is awesome!" />
            </VStack>
          </TabPanel>
          <TabPanel>
            <PostCreation />
            <VStack spacing={4}>
              <Post avatar="https://bit.ly/kent-c-dodds" username="Kent C. Dodds" timestamp="1h" content="Testing React components is crucial." />
              <Post avatar="https://bit.ly/prosper-baba" username="Prosper Otemuyiwa" timestamp="3h" content="Chakra UI makes styling easy!" />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;