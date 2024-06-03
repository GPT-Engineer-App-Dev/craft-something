import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaList, FaBookmark, FaUsers, FaCrown, FaUser, FaEllipsisH } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box as="nav" p={4} bg="gray.900" color="white" height="100vh" width="250px" position="fixed">
      <VStack spacing={4} align="start">
        <Button leftIcon={<FaHome />} variant="ghost" justifyContent="flex-start" width="100%">Home</Button>
        <Button leftIcon={<FaHashtag />} variant="ghost" justifyContent="flex-start" width="100%">Explore</Button>
        <Button leftIcon={<FaBell />} variant="ghost" justifyContent="flex-start" width="100%">Notifications</Button>
        <Button leftIcon={<FaEnvelope />} variant="ghost" justifyContent="flex-start" width="100%">Messages</Button>
        <Button leftIcon={<FaList />} variant="ghost" justifyContent="flex-start" width="100%">Lists</Button>
        <Button leftIcon={<FaBookmark />} variant="ghost" justifyContent="flex-start" width="100%">Bookmarks</Button>
        <Button leftIcon={<FaUsers />} variant="ghost" justifyContent="flex-start" width="100%">Communities</Button>
        <Button leftIcon={<FaCrown />} variant="ghost" justifyContent="flex-start" width="100%">Premium</Button>
        <Button leftIcon={<FaUser />} variant="ghost" justifyContent="flex-start" width="100%">Profile</Button>
        <Button leftIcon={<FaEllipsisH />} variant="ghost" justifyContent="flex-start" width="100%">More</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;