
import { useQuery } from "react-query";
import { getVideos } from "../services/video.service";

const useVideos = () => {

 const query = useQuery('videos', getVideos, {
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
 })

 return {
  ...query,
 }
}

export default useVideos;