import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Checkout_Icon = ({height, width, color, props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 55.3 50',
    }}
    viewBox="0 0 55.3 50"
    width={width}
    height={height}
    {...props}>
    <Path
      d="M21.1 39.5c-8 0-14.5-6.5-14.5-14.5s6.5-14.5 14.5-14.5c5.5 0 10.7 3.2 13.1 8.2l3.3-1.6c-3-6.3-9.5-10.3-16.4-10.3C11.1 6.8 2.9 15 2.9 25s8.2 18.2 18.2 18.2c7.2 0 13.8-4.3 16.7-10.9l-3.4-1.5c-2.3 5.3-7.6 8.7-13.3 8.7z"
      className="st0"
      fill={color}
    />
    <Path
      d="m43.1 15.7-2.6 2.6 4.8 4.8H16.4v3.7h28.9l-4.8 4.7 2.6 2.6 9.3-9.2z"
      className="st0"
      fill={color}
    />
  </Svg>
);
export default Checkout_Icon;
