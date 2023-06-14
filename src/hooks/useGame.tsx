
import { useQuery } from "react-query";
import { getGame } from "../services/game.service";

const useGame = ({ gameId }: { gameId: string | undefined }) => {

 const query = useQuery(['game', gameId, 'gameVideos'], () => getGame(gameId), {
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
  enabled: !!gameId
 })

 return {
  ...query,
 }
}

export default useGame;