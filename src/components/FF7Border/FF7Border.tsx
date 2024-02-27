import TopBorder from "../../assets/images/border/FF7BorderTop.svg?react";
import LeftBorder from "../../assets/images/border/FF7BorderLeft.svg?react";
import RightBorder from "../../assets/images/border/FF7BorderRight.svg?react";
import BotBorder from "../../assets/images/border/FF7BorderBot.svg?react";
import TopLeftBorderCorner from "../../assets/images/border/FF7BorderTopLeft.svg?react";
import TopRightBorderCorner from "../../assets/images/border/FF7BorderTopRight.svg?react";
import BotLeftBorderCorner from "../../assets/images/border/FF7BorderBotLeft.svg?react";
import BotRightBorderCorner from "../../assets/images/border/FF7BorderBotRight.svg?react";
import { FF7_BORDER_VALUES } from "../../utils/consts";

import { StandardAsymSliceBorder } from "../../utils/styles/StandardAsymSliceBorder.styles";

export interface FF7BorderProps {
  children: React.ReactElement;
  className?: string
}

const FF7Border = ({children, className}: FF7BorderProps): React.ReactElement => {
  return (
    <StandardAsymSliceBorder className={className} {...FF7_BORDER_VALUES}>
      {children}
      <TopBorder className="top"/>
      <LeftBorder className="left"/>
      <RightBorder className="right"/>
      <BotBorder className="bot"/>
      <TopLeftBorderCorner className="top-left"/>
      <TopRightBorderCorner className="top-right"/>
      <BotLeftBorderCorner className="bot-left"/>
      <BotRightBorderCorner className="bot-right"/>
    </StandardAsymSliceBorder>
  )
}

export default FF7Border;
