import { Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

type Props = {
 url: string;
 text: string;
 size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
 weight?: "medium" | "semibold" | "bold";
}

const MainLink = ({ url, text, size = "lg", weight = "semibold" }: Props) => {
 return (
  <NavLink to={url}>
   <Text fontSize={size} fontWeight={weight} position="relative" _hover={{ "&::before": { width: "100%" } }} _before={{
    position: "absolute",
    content: `""`,
    left: "0",
    bottom: "-4px",
    width: "0%",
    height: "3px",
    backgroundColor: "indigo.500",
    borderRadius: "5px",
    transition: "ease-in-out 0.3s"
   }}>
    {text}
   </Text>
  </NavLink>
 );
}

export default MainLink;