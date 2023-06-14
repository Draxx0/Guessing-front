import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { bounce } from "../../design/chakra-animation";

const bounceAnimation = `${bounce} infinite 3s linear`;

const Soon = () => {
 return (
  <Flex flexDirection="column" height="40vh">
   <Text fontSize="3xl" fontWeight="bold" textAlign="center">Coming soon</Text>

   <Box position="relative" flexGrow="1">
    <Box zIndex="-1" position="absolute" left="60%" transform="translateX(-50%)" width="80%" filter="blur(100px)" height="full" backgroundColor="indigo.500" opacity="40%" borderRadius="full" padding={52}></Box>
    <Box zIndex="-1" position="absolute" left="20%" top="70%" transform="translateX(-50%)" width="50%" filter="blur(100px)" height="full" backgroundColor="indigo.800" opacity="30%" borderRadius="full" padding={48}></Box>
    <Image animation={bounceAnimation} src="/assets/svg/Bronze.webp" transform="rotate(180deg)" width={24} position="absolute" left="15%" bottom="0" />
    <Image animation={bounceAnimation} src="/assets/svg/Silver.webp" width={24} position="absolute" right="25%" bottom="35%" />
    <Image animation={bounceAnimation} src="/assets/svg/Platinium.webp" width={24} position="absolute" left="25%" />
    <Image animation={bounceAnimation} src="/assets/svg/Immortal.webp" width={24} position="absolute" right="15%" />
    <Image animation={bounceAnimation} src="/assets/svg/Logo.webp" width={24} position="absolute" top="10%" right="40%" />
    <Image animation={bounceAnimation} src="/assets/svg/Iron.webp" width={24} position="absolute" bottom="0%" right="15%" />
    <Image animation={bounceAnimation} src="/assets/svg/Gold.webp" width={24} position="absolute" top="50%" right="50%" />
   </Box>
  </Flex>

 );
}

export default Soon;