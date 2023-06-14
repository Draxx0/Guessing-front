import { Flex, Image, Text } from "@chakra-ui/react";
import { AppStat } from "./StatsList";

const StatsItem = ({ stat }: { stat: AppStat }) => {
 return (
  <Flex flexDirection="column" gap={3} alignItems="center" color="white">
   <Image src={stat.icon} alt={stat.label} width={24} />
   <Text fontSize="2xl" fontWeight="bold">{stat.label}</Text>
   <Text fontSize="5xl" fontWeight="bold">{stat.value}</Text>
  </Flex>
 );
}

export default StatsItem;