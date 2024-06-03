import { Box, Textarea, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaImage, FaSmile, FaPoll, FaGif } from "react-icons/fa";

const PostCreation = () => {
  return (
    <Box p={4} bg="gray.800" color="white" borderRadius="md" mb={4}>
      <Textarea placeholder="What is happening?!" bg="gray.700" border="none" resize="none" mb={2} />
      <HStack spacing={4}>
        <IconButton icon={<FaImage />} aria-label="Add Media" />
        <IconButton icon={<FaGif />} aria-label="Add GIF" />
        <IconButton icon={<FaPoll />} aria-label="Add Poll" />
        <IconButton icon={<FaSmile />} aria-label="Add Emoji" />
        <Button colorScheme="blue">Post</Button>
      </HStack>
    </Box>
  );
};

export default PostCreation;