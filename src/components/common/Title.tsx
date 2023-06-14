import { Heading } from "@chakra-ui/react";

type Props = {
 text: string | undefined;
 as?: "h2" | "h1";
 weight?: "bold" | "semibold";
}

const Title = ({ text, as = "h1", weight = "bold" }: Props) => {
 return (
  <Heading as={as} position="relative" width="fit-content" marginBottom={6} fontWeight={weight} _before={{
   position: "absolute",
   content: `""`,
   left: "0",
   bottom: "-4px",
   width: "75%",
   height: "3px",
   backgroundColor: "indigo.500",
   borderRadius: "5px",
   transition: "ease-in-out 0.3s"
  }}>
   {text}
  </Heading>
 );
};

export default Title;
