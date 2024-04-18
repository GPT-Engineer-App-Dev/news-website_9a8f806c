import { Box, Flex, Heading, Text, Image, VStack, HStack, Button, Spacer } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegHeart, FaRegComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center">
        <Heading mb={4}>News Today</Heading>
        <VStack spacing={8} align="stretch">
          <NewsArticle title="Global Markets Rally on New Economic Data" summary="Stock markets around the world climbed sharply today as new economic data exceeded expectations..." imageUrl="https://images.unsplash.com/photo-1620365744528-88da1e08ac96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBtYXJrZXRzfGVufDB8fHx8MTcxMzQyMDMwOHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <NewsArticle title="Tech Innovations Lead the Way in 2023" summary="This year has seen a surge in technological advancements, with several startups leading the charge..." imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbnN8ZW58MHx8fHwxNzEzNDIwMzA4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <NewsArticle title="Environmental Policies and Their Impact" summary="Countries around the globe are adopting new environmental policies aimed at combating climate change..." imageUrl="https://images.unsplash.com/photo-1467579424161-6bbc141569d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwcG9saWNpZXN8ZW58MHx8fHwxNzEzNDIwMzA5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>
      </Flex>
    </Box>
  );
};

const NewsArticle = ({ title, summary, imageUrl }) => {
  return (
    <Flex border="1px" borderColor="gray.200" p={4} borderRadius="md" align="center">
      <Image borderRadius="md" boxSize="150px" objectFit="cover" src={imageUrl} alt="News image" mr={4} />
      <VStack align="stretch" flex="1">
        <Heading size="md">{title}</Heading>
        <Text isTruncated noOfLines={2}>
          {summary}
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaRegHeart />} size="sm" colorScheme="pink">
            Like
          </Button>
          <Button leftIcon={<FaRegComments />} size="sm" colorScheme="teal">
            Comment
          </Button>
          <Spacer />
          <Button leftIcon={<FaRegNewspaper />} size="sm" colorScheme="blue">
            Read More
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Index;
