/**
 * Went with this approach as border-image wouldn't work with the asymmetrical border,
 * and background-image would scale the SVG uniformly, preventing intended display.
 * 
 * Unfortunately, was not able to figure out how to make an SVG scale non-uniformly. It's 
 * a Scalable Vector Graphic, not a Relative Vector Graphic. The only other viable approach I could think of
 * would be to use the `vector-effect: non-scaling-stroke` on a bunch of path with square end caps, and creating
 * a quilt/lattice to display the pixels at the appropriate points without scaling.
 */

import styled from "@emotion/styled";

interface CornerDimensions {
  height: string;
  width: string;
}

export interface StandardAsymSliceBorderProps {
  topHeight: string;
  leftWidth: string;
  rightWidth: string;
  botHeight: string;
  topLeft: CornerDimensions;
  topRight: CornerDimensions;
  botLeft: CornerDimensions;
  botRight: CornerDimensions;
}

/**
 * Styled div that lets you display a border with asymmetric corners around a container.
 * Positions each SVG child at it's appropriate position around the div.
 * Corners will prevent scaling, and sides will only scale along their respective axis,
 * stretching to fill the space between corners.
 */
export const StandardAsymSliceBorder = styled.div<StandardAsymSliceBorderProps>`
  min-height: ${props => `max(calc(${props.topLeft.height} + ${props.botLeft.height}), calc(${props.topRight.height} + ${props.botRight.height}))`};
  min-width: ${props => `max(calc(${props.topLeft.width} + ${props.topRight.width}), calc(${props.botLeft.width} + ${props.botRight.width}))`};

  position: relative;

  padding-top: ${props => props.topHeight};
  padding-left: ${props => props.leftWidth};
  padding-right: ${props => props.rightWidth};
  padding-bottom: ${props => props.botHeight};

  /* Scales along x axis */
  > .top {
    position: absolute;

    top: 0px;
    left: ${props => props.topLeft.width};

    height: ${props => props.topHeight};
    width: ${props => `calc(100% - calc(${props.topLeft.width} + ${props.topRight.width}))`};

  }

  /* Scales along y axis */
  > .left {
    position: absolute;

    top: ${props => props.topLeft.height};
    left: 0px;

    height: ${props => `calc(100% - calc(${props.topLeft.height} + ${props.botLeft.height}))`};
    width: ${props => props.leftWidth};
  }

  /* Scales along y axis */
  > .right {
    position: absolute;

    top: ${props => props.topRight.height};
    right: 0px;
    
    height: ${props => `calc(100% - calc(${props.topRight.height} + ${props.botRight.height}))`};
    width: ${props => props.rightWidth};
  }

  /* Scales along x axis */
  > .bot {
    position: absolute;
    
    bottom: 0px;
    left: ${props => props.botLeft.width};

    height: ${props => props.botHeight};
    width: ${props => `calc(100% - calc(${props.botLeft.width} + ${props.botRight.width}))`};
  }

  /* Doesn't scale */
  > .top-left {
    position: absolute;

    top: 0px;
    left: 0px;

    height: ${props => props.topLeft.height};
    width: ${props => props.topLeft.width};
  }

  /* Doesn't scale */
  > .top-right {
    position: absolute;

    top: 0px;
    right: 0px;

    height: ${props => props.topRight.height};
    width: ${props => props.topRight.width};
  }

  /* Doesn't scale */
  > .bot-left {
    position: absolute;

    bottom: 0px;
    left: 0px;

    height: ${props => props.botLeft.height};
    width: ${props => props.botLeft.width};
  }

  /* Doesn't scale */
  > .bot-right {
    position: absolute;

    bottom: 0px;
    right: 0px;

    height: ${props => props.botRight.height};
    width: ${props => props.botRight.width};
  }
`