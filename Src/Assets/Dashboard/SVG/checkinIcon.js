import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const CheckIn_Icon = ({height, width, color, secondcolor, props}) => (
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
      d="m28.5 23-4.8-4.7 2.6-2.7 9.3 9.3-9.3 9.3-2.6-2.6 4.8-4.8h-25V23z"
      className="st0"
      fill={secondcolor}
    />
    <Path
      d="M28.2 39.5c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5c-5.6 0-10.7 3.2-13.1 8.3l-3.4-1.6c3-6.3 9.5-10.4 16.5-10.4 10.1 0 18.3 8.2 18.3 18.3 0 10.1-8.2 18.3-18.3 18.3-7.2 0-13.8-4.3-16.7-10.9l3.4-1.5c2.3 5.1 7.6 8.5 13.3 8.5z"
      className="st0"
      fill={color}
    />
  </Svg>
);
export default CheckIn_Icon;
