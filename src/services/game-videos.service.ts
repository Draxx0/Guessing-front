import axios from "axios";
import { Paginate } from "../types/paginate.type";
import { Video } from "../types/video.type";

export const getGameVideos = async (
  id: string | undefined
): Promise<Paginate<Video>> => {
  if (!id) {
    throw new Error("valid id should be provided");
  }
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/videos/game/${id}`
  );
  return data;
};
