import { Box, Progress, Skeleton, Step, StepIcon, StepIndicator, StepNumber, StepStatus, Stepper, Text, useSteps } from "@chakra-ui/react";
import GameOverlay from "./GameOverlay";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useGameVideos from "../../hooks/useGameVideos";

const GameStepper = () => {

  const { id } = useParams()

  const { data: rounds, isLoading, isError } = useGameVideos({ gameId: id })

  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: rounds?.data.length,
  })


  const progressPercent = useMemo(() => {
    if (rounds?.data) {
      return (activeStep / rounds?.data.length - 1) * 100
    }
    return undefined
  }, [rounds, activeStep])

  if (isError) return <Text color="red.500">An error occured please try again.</Text>

  return (
    <>
      <Box position='relative' marginTop={10}>
        {isLoading ? (
          <Skeleton height='20px' />
        ) : (
          <>
            <Stepper size='sm' index={activeStep} colorScheme='indigo' gap='0'>
              {rounds?.data.map((_, index) => (
                <Step key={index} >
                  <StepIndicator borderColor="indigo.500" bg='white'>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                </Step>
              ))}
            </Stepper>
            <Progress
              value={progressPercent}
              position='absolute'
              height='3px'
              width='full'
              top='10px'
              zIndex={-1}
              colorScheme="indigo"
            />
          </>
        )}

        {
          isLoading ? (
            <Skeleton height='400px' mt={5} />
          ) : (rounds?.data.map((step, index) => (
            <>
              {
                index === activeStep && (
                  <GameOverlay step={step} next={goToNext} />
                )
              }
            </>
          )))
        }
      </Box>
    </>
  )
}

export default GameStepper