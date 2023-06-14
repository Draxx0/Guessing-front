import axios from "axios";
import { Paginate } from "../types/paginate.type";
import { Video } from "../types/video.type";

export const getVideos = async (): Promise<Paginate<Video>> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/videos`
  );
  return data;
};
