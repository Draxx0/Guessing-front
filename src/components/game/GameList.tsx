import { Grid, Skeleton, Text } from "@chakra-ui/react";
import GameItem from "./GameItem";
import useGames from "../../hooks/useGames";

const GamesList = () => {
 const { data: games, isLoading, isError } = useGames();

 return (
  <Grid
   templateColumns='repeat(4, 1fr)'
   gap={4}
  >
   {isError && (
    <Text color="red.500">An errror occured, please try again</Text>
   )}
   {isLoading ? (
    <>
     <Skeleton height='200px' borderRadius="5px" />
     <Skeleton height='200px' borderRadius="5px" />
     <Skeleton height='200px' borderRadius="5px" />
     <Skeleton height='200px' borderRadius="5px" />
    </>
   ) : (
    games?.data.map((game) => (
     <GameItem key={game.id} game={game} />
    ))
   )}
  </Grid>
 );
}

export default GamesList;