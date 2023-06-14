import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Title from "../components/common/Title";
import GameStepper from "../components/game/GameStepper";

const Game = () => {
 const { name } = useParams();
 return (
  <Box as="section" maxWidth="80%" margin="50px auto">
   <Title text={name} />
   <GameStepper />
  </Box>
 );
};

export default Game;
