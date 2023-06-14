
import { useQuery } from "react-query";
import { getGameById } from "../services/game.service";

const useGameDetails = ({ gameId }: { gameId: string | undefined }) => {

 const query = useQuery(['game', gameId], () => getGameById(gameId), {
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
  enabled: !!gameId
 })

 return {
  ...query,
 }
}

export default useGameDetails;