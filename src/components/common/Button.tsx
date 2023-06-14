import { Button, Stack } from "@chakra-ui/react";
import { ChakraColor } from "../../types/chakra.type";
import { Link } from "react-router-dom";
import Icon from "./Icon";

type Props = {
 mode: "solid" | "outline";
 theme: ChakraColor;
 padding?: 2 | 4 | 6 | 8 | 10 | 12 | 14;
 text: string;
 url: string;
 hasArrow?: boolean;
}
const MainButton = ({ mode, theme, text, url, padding, hasArrow }: Props) => {
 return (
  <Link to={url}>
   <Button display="flex" alignItems="center" paddingX={padding && padding} gap={2} colorScheme={theme} borderColor="indigo.500" borderWidth="1.5px" variant={mode} color={mode !== "solid" ? `${theme}.500` : "white"} _hover={mode === "solid" ? { bgColor: `${theme}.700` } : {}}>
    {text}
    {hasArrow && <Icon name="arrowRight" />}
   </Button>
  </Link>
 );
}

export default MainButton;