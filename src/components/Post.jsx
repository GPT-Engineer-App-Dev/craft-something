import { Box, Text, HStack, Avatar, VStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment, FaRetweet, FaShare } from "react-icons/fa";

const Post = ({ avatar, username, timestamp, content }) => {
  return (
    <Box p={4} bg="gray.800" color="white" borderRadius="md" mb={4}>
      <HStack align="start">
        <Avatar src={avatar} />
        <VStack align="start" spacing={1}>
          <HStack>
            <Text fontWeight="bold">{username}</Text>
            <Text fontSize="sm" color="gray.500">{timestamp}</Text>
          </HStack>
          <Text>{content}</Text>
          <HStack spacing={4}>
            <IconButton icon={<FaComment />} aria-label="Comment" />
            <IconButton icon={<FaRetweet />} aria-label="Retweet" />
            <IconButton icon={<FaHeart />} aria-label="Like" />
            <IconButton icon={<FaShare />} aria-label="Share" />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Post;