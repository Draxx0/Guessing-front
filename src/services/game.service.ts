import axios from "axios";
import { Game } from "../types/game.type";
import { Paginate } from "../types/paginate.type";

export const getGames = async (): Promise<Paginate<Game>> => {
  const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/games`);
  return data;
};

export const getGameById = async (id: string | undefined): Promise<Game> => {
  if (!id) {
    throw new Error("There is no id for this game");
  }
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/games/${id}`
  );
  return data;
};

export const getGame = async (id: string | undefined): Promise<Game> => {
  if (!id) {
    throw new Error("There is no id for this game");
  }
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/videos/game/${id}`
  );
  return data;
};
