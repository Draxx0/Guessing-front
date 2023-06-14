import { Flex } from "@chakra-ui/react";
import useVideos from "../../hooks/useVideos";
import StatsItem from "./StatsItem";

export type AppStat = {
 id: number;
 icon: string;
 label: string;
 value: number | undefined;
}

const StatsList = () => {

 const { data: videos } = useVideos()


 const appStats: AppStat[] = [
  {
   id: 1,
   icon: "assets/svg/Platinium.webp",
   label: "Vidéos",
   value: videos?.total,
  },

  {
   id: 2,
   icon: "assets/svg/Platinium.webp",
   label: "Players",
   value: videos?.total,
  },

  {
   id: 3,
   icon: "assets/svg/Platinium.webp",
   label: "Games Played",
   value: videos?.total,
  },
 ];

 return (
  <Flex maxWidth="80%" margin="auto" paddingY={12} height="full" alignItems="center" justifyContent="space-around" zIndex="2">
   {appStats.map((stat) => (
    <StatsItem stat={stat} key={stat.id} />
   ))}
  </Flex>
 );
}

export default StatsList;