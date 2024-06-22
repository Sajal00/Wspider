import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const PasswordIcon = ({height, width, props}) => (
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
      d="M33.7 21.6h-1v-8.5c0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6v8.5h-1c-3.5 0-6.3 2.8-6.3 6.3v16.6h30V27.9c-.2-3.5-3-6.3-6.5-6.3zm-13.5-8.5c0-2.7 2.2-4.8 4.8-4.8s4.8 2.2 4.8 4.8v8.5h-9.7v-8.5zm16.9 28.3H12.9V27.9c0-1.9 1.5-3.4 3.4-3.4h17.3c1.9 0 3.4 1.5 3.4 3.4v13.5z"
      className="st0"
    />
    <Path
      d="M25.1 27.2c-1.8 0-3.2 1.4-3.2 3.2 0 1.3.7 2.4 1.8 2.9v5.6h2.7v-5.6c1.1-.5 1.8-1.6 1.8-2.9.1-1.7-1.3-3.2-3.1-3.2z"
      className="st0"
    />
  </Svg>
);
export default PasswordIcon;
