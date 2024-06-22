import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Mail_icon = ({
  height,
  width,
  color,
  second_color,

  props,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 50 50',
    }}
    viewBox="0 0 50 50"
    width={width}
    height={height}
    {...props}>
    <Path
      d="M34.7 14.7H15.3c-1.6 0-2.8 1.3-2.8 2.8v15c0 1.6 1.3 2.8 2.8 2.8h19.4c1.6 0 2.8-1.3 2.8-2.8v-15c0-1.6-1.3-2.8-2.8-2.8zm1 17.8c0 .6-.5 1-1 1H15.3c-.6 0-1-.5-1-1v-15c0-.6.5-1 1-1h19.4c.6 0 1 .5 1 1v15z"
      className="st0"
      fill={color}
    />
    <Path
      d="M32.6 19.1 25 25l-7.6-5.9c-.4-.3-.9-.2-1.2.2-.3.4-.2.9.2 1.2l8.6 6.8 8.6-6.8c.4-.3.5-.9.2-1.2-.3-.4-.9-.5-1.2-.2z"
      className="st0"
      fill={second_color}
    />
  </Svg>
);
export default Mail_icon;
