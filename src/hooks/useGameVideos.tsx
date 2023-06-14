
import { useQuery } from "react-query";
import { getGameVideos } from "../services/game-videos.service";

const useGameVideos = ({ gameId }: { gameId: string | undefined }) => {

 const query = useQuery(['gameVideo', gameId], () => getGameVideos(gameId), {
  refetchOnWindowFocus: false,
  staleTime: 1,
  enabled: !!gameId,
 })

 return {
  ...query,
 }
}

export default useGameVideos;