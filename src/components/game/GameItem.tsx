import { Box, Image, Text } from "@chakra-ui/react";
import { Game } from "../../types/game.type";
import { wordBasedOnRepetitions } from "../../utils/wordBasedOnRepetitions";
import MainButton from "../common/Button";

const GameItem = ({ game }: { game: Game }) => {
 return (
  <Box position="relative" cursor="pointer" overflow="hidden" borderRadius="5px" shadow="xl" _hover={{ ".button": { opacity: "90%", transform: "translateX(-50%) translateY(-50%) scale(1)" } }}>
   <Image src={game.image} alt='Dan Abramov' filter="brightness(0.6)" borderRadius="5px" transition="ease-in-out" transitionDuration="0.5s" _hover={{ transform: "scale(1.2)" }} />
   <Box position="absolute" left="5%" bottom="10%">
    <Text color="white" fontSize="lg" fontWeight="bold">{game.name}</Text>
    <Text color="white">{game.videoCount} {wordBasedOnRepetitions("Vidéo", "Vidéos", game.videoCount)}</Text>
   </Box>
   <Box position="absolute" left="50%" top="50%" transition="ease-in-out" transitionDuration="0.4s" transform="translateX(-50%) translateY(-50%) scale(0)" opacity={0} className="button">
    <MainButton mode="solid" text="Play" theme="indigo" url={`/game/${game.name}/${game.id}`} padding={12} /> {/* url should be change only for testing here*/}
   </Box>
  </Box>
 );
}

export default GameItem;