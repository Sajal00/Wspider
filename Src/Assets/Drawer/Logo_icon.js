import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Logo_icon = ({height, width, color, second_Color, props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 192 192',
    }}
    viewBox="0 0 192 192"
    width={width}
    height={height}
    {...props}>
    <Path
      fill={second_Color}
      d="M108 173h82.7c.5-1.8.8-3.7.8-5.6V29c0-11.9-9.6-21.5-21.5-21.5H22C10.1 7.5.5 17.1.5 29v147.9c0 2.7.5 5.2 1.4 7.6l58.8-58.8L108 173z"
    />
    <Path
      fill={color}
      d="M182.4 69.7V42.9h-70.7L85.1 17.8v78.6L60.7 72.1 36.4 96.4V32.9L9.6 58.4v105.5l51.1-51.2 51.2 51.2h70.5v-26.8h-70.5v-20h70.5V90.4h-70.5V69.7z"
    />
  </Svg>
);
export default Logo_icon;
