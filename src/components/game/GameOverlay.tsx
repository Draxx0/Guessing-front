import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

const GameOverlay = ({ step, next }: { step: any; next: () => void }) => {
 const { isOpen, onOpen, onClose } = useDisclosure()

 return (
  <Box>
   <Box margin="50px auto" width="75%">
    <iframe width="100%" height="500px" src={step.url} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
   </Box>
   <Flex justifyContent="end">
    <Button onClick={() => onOpen()} variant='solid' display="flex" alignItems="center" paddingX={6} gap={2} colorScheme="indigo" borderColor="indigo.500" borderWidth="1.5px" color="white" _hover={{ bgColor: `indigo.700` }}>
     Confirm
    </Button>
   </Flex>

   <Modal onClose={onClose} size={"4xl"} colorScheme="orange" isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
     <ModalHeader>Result</ModalHeader>
     <ModalBody>

     </ModalBody>
     <ModalFooter>
      <Button onClick={next}>Next</Button>
     </ModalFooter>
    </ModalContent>
   </Modal>
  </Box>
 );
};

export default GameOverlay;
