import { Box } from "@chakra-ui/react";
import Header from "../components/common/Header";


const Layout = ({ children }: { children: React.ReactElement }) => {
 return (
  <>
   <Header />
   <Box as="main">
    {children}
   </Box>
  </>
 );
};

export default Layout;