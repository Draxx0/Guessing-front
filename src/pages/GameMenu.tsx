import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import Title from "../components/common/Title";
import { useParams } from "react-router-dom";
import { wordBasedOnRepetitions } from "../utils/wordBasedOnRepetitions";
import Icon from "../components/common/Icon";
import MainButton from "../components/common/Button";
import useGameDetails from "../hooks/useGameDetails";

const GameMenu = () => {
 const { name, id } = useParams();
 const { data: game, isLoading } = useGameDetails({ gameId: id });
 return (
  <Box as="section" maxWidth="80%" margin="100px auto">
   <Flex gap={5}>
    <Flex width="50%" justifyContent="space-between" flexDirection="column" position="relative">
     {isLoading && !game ? (
      <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='indigo.500'
       size='xl'
       position="absolute"
       left="50%"
       top="50%"
       transform="translateY(50%) translateX(-50%)"
      />
     ) : (
      <>
       <Title text={name} />
       <Flex flexDirection="column" justifyContent="space-evenly" flexGrow="1" gap={4}>
        <Text maxW={"lg"}>{game?.description}</Text>
        <Box>
         <Text display="flex" alignItems="center" gap={2}><Icon name="check" />Correct guess : <Text as="span" fontWeight="bold" fontSize="lg" color="indigo.500">100 points</Text></Text>
         <Text display="flex" alignItems="center" gap={2}><Icon name="wave" color="indigo.500" />One rank off guess : <Text as="span" fontWeight="bold" fontSize="lg" color="indigo.500">50 points</Text></Text>
        </Box>

        <Box>
         <Text display="flex" alignItems="center" gap={4}>
          <Icon name='video' size={8} color="indigo.500" />
          <Flex alignItems="center" gap={2}>
           <Text as="span" fontWeight="bold" fontSize="xl" color="indigo.500">
            {game?.videoCount}
           </Text>
           {wordBasedOnRepetitions("Video", "Videos", game?.videoCount ?? 0)} posted.
          </Flex>
         </Text>

         <Text display="flex" alignItems="center" gap={4}>
          <Icon name='game' size={8} color="indigo.500" />
          <Flex alignItems="center" gap={2}>
           <Text as="span" fontWeight="bold" fontSize="xl" color="indigo.500">
            {game?.gamePlayed}
           </Text>
           {wordBasedOnRepetitions("Game", "Games", game?.gamePlayed ?? 0)} already played.
          </Flex>
         </Text>
        </Box>
        <MainButton mode="solid" text="Start game" url={`/game/${game?.name}/${game?.id}/play`} theme="indigo" padding={6} hasArrow />
       </Flex>

      </>
     )}

    </Flex>
    <Box position="relative" width="50%">
     {isLoading ? (
      <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='indigo.500'
       size='xl'
       position="absolute"
       left="50%"
       top="50%"
       transform="translateY(50%) translateX(-50%)"
      />
     ) : (
      <Image width="full" height="full" src={game?.image} alt='game image' />
     )}
    </Box>
   </Flex>
  </Box >
 );
};

export default GameMenu;
