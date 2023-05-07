import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>2023 Haruka Kobayashi.</Text>
        <Text>This website is built using a template. <Link to="https://github.com/eldoraboo/portable-portfolio" color="blue.500">Click here </Link>for more information.</Text>
      </Container>
    </Box>
  );
}
