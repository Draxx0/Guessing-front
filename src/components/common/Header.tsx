import { Flex, Image, Text } from "@chakra-ui/react";
import MainButton from "./Button";
import MainLink from "./MainLink";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <Flex as="header" justifyContent="space-between" alignItems="center" maxWidth="80%" margin="auto">
   <Flex paddingY="20px" alignItems="center" gap={2}>
    <Image src="/assets/svg/Logo.webp" alt="logo" width={10} />
    <Link to="/">
     <Text fontSize="2xl" fontWeight="bold">
      Guessing
     </Text>
    </Link>
   </Flex>

   <Flex gap={10}>
    <MainLink text="Home" url="/" />
    <MainLink text="Play" url="/games" />
    <MainLink text="Ranking" url="/ranking" />
    <MainLink text="Community" url="/community" />
   </Flex>

   <Flex gap={3}>
    <MainButton text="Post video" url="/" mode="solid" theme="indigo" hasArrow />
    <MainButton text="Signin" url="/" mode="outline" theme="indigo" hasArrow />
   </Flex>
  </Flex>
 );
}

export default Header;