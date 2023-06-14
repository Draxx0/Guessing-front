import { Box, Flex, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckIcon } from "../assets/icons/CheckIcon"
import MainButton from "../components/common/Button";
import { bounce } from "../design/chakra-animation";
import StatsList from "../components/home/StatsList";

const bounceAnimation = `${bounce} infinite 3s linear`;

const Home = () => {
 return (
  <>
   <Box as="section" maxWidth="80%" margin="100px auto">
    <Flex gap={4}>
     <Flex width="50%" flexDirection="column" gap={6}>
      <Flex alignItems="center" gap={2}>
       <Image src="assets/svg/Logo.webp" alt="logo" width={16} />
       <Heading as="h1" size="xl">
        Guess the Rank, Unleash Your Vision!
       </Heading>
      </Flex>
      <Text maxWidth="3xl" fontSize="lg" color="gray.500">
       Observe. Guess. Win. Test your skills by guessing player ranks in thrilling gameplay videos. Can you accurately predict their level? Join now and prove your expertise!
      </Text>
      <List spacing={3}>
       <ListItem fontSize="lg" fontWeight="bold">
        <ListIcon as={CheckIcon} />
        Click
       </ListItem>
       <ListItem fontSize="lg" fontWeight="bold">
        <ListIcon as={CheckIcon} />
        Watch
       </ListItem>
       <ListItem fontSize="lg" fontWeight="bold">
        <ListIcon as={CheckIcon} />
        Guess
       </ListItem>
      </List>
      <MainButton mode="solid" text="Discover" url="/games" theme="indigo" hasArrow />
     </Flex>
     <Flex position="relative" height="auto" width="50%">
      <Box zIndex="-1" position="absolute" left="60%" transform="translateX(-50%)" width="80%" filter="blur(100px)" height="full" backgroundColor="indigo.500" opacity="40%" borderRadius="full" padding={52}></Box>
      <Box zIndex="-1" position="absolute" left="20%" top="70%" transform="translateX(-50%)" width="50%" filter="blur(100px)" height="full" backgroundColor="indigo.800" opacity="30%" borderRadius="full" padding={48}></Box>
      <Image animation={bounceAnimation} src="/assets/svg/Bronze.webp" transform="rotate(180deg)" width={24} position="absolute" left="15%" bottom="0" />
      <Image animation={bounceAnimation} src="/assets/svg/Silver.webp" width={24} position="absolute" right="25%" bottom="35%" />
      <Image animation={bounceAnimation} src="/assets/svg/Platinium.webp" width={24} position="absolute" left="25%" />
      <Image animation={bounceAnimation} src="/assets/svg/Immortal.webp" width={24} position="absolute" right="15%" />
      <Image animation={bounceAnimation} src="/assets/svg/Logo.webp" width={24} position="absolute" top="10%" right="40%" />
      <Image animation={bounceAnimation} src="/assets/svg/Iron.webp" width={24} position="absolute" bottom="0%" right="15%" />
      <Image animation={bounceAnimation} src="/assets/svg/Gold.webp" width={24} position="absolute" top="50%" right="50%" />
     </Flex>
    </Flex>
   </Box>

   <Box as="section" backgroundColor="indigo.900" height="400px" margin="200px auto" position="relative" overflow="hidden">
    <Image src="assets/svg/line.svg" alt="line" position="absolute" zIndex="1" left="-20%" top="-15%" userSelect="none" />
    <StatsList />
    <Image src="assets/svg/line.svg" alt="line" position="absolute" zIndex="1" right="-20%" top="-15%" transform="scaleX(-1)" userSelect="none" />
   </Box>
  </>
 );
}

export default Home;