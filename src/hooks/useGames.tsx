
import { useQuery } from "react-query";
import { getGames } from "../services/game.service";

const useGames = () => {

 const query = useQuery('games', getGames, {
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
 })

 return {
  ...query,
 }
}

export default useGames;