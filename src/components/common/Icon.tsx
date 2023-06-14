
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { GameIcon } from "../../assets/icons/GameIcon";
import { VideoIcon } from "../../assets/icons/VideoIcon";
import { WaveIcon } from "../../assets/icons/WaveIcon";
import { ChakraColor } from "../../types/chakra.type";

type IconName =
  | "check"
  | "arrowRight"
  | "game"
  | "wave"
  | "video"

type Size = 8 | 12 | 16 | 18 | 20 | 24

const Icon = ({ name, color, size }: { name: IconName; color?: ChakraColor; size?: Size }): React.ReactElement => {
  switch (name) {
    case 'check':
      return <CheckIcon color={color} width={size} height={size} />

    case 'arrowRight':
      return <ArrowRightIcon color={color} width={size} height={size} />

    case 'game':
      return <GameIcon color={color} width={size} height={size} />

    case 'wave':
      return <WaveIcon color={color} width={size} height={size} />

    case 'video':
      return <VideoIcon color={color} width={size} height={size} />

    default:
      return <></>
  }
}

export default Icon
