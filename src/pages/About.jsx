import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About the Voice Assistant Project</Heading>
      <Text fontSize="lg" mb={6}>This project aims to provide a comprehensive voice assistant with various functionalities.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Face Recognition</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Voice Recognition</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Open Music (Spotify, Apple Music, YouTube Music)</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Open Video (YouTube)</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Doing Research (Wikipedia)</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Set Reminder and Alarm</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Read news from Turkey using Google News RSS</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Running Windows applications</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Enable/Disable Bluetooth, WiFi</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Sound wave visualization</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;