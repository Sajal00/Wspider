import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Menu_icon = ({height, width, color, props}) => (
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
    <Path d="M2 11h46v9.9H2zM2 29.1h25.6V39H2z" className="st0" fill={color} />
  </Svg>
);
export default Menu_icon;
