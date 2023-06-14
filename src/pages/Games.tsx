import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../components/common/Title";
import GamesList from "../components/game/GameList";

const Games = () => {
 return (
  <Box as="section" maxWidth="80%" margin="100px auto">
   <Title text="Play now" />
   <GamesList />
  </Box>
 );
}

export default Games;