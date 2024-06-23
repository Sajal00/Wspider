import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Camera_Icon = ({
  height,
  width,
  color,

  props,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 70 70',
    }}
    viewBox="0 0 70 70"
    width={width}
    height={height}
    {...props}>
    <Path
      d="M21.5 50c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V29c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h4.7l2.8-3h9v3h-7.7l-2.7 3h-6.1v18h24V33.5h3V47c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9h-24zm24-21v-3h-3v-3h3v-3h3v3h3v3h-3v3h-3zm-12 15.8c1.9 0 3.5-.7 4.8-2s2-2.9 2-4.8-.7-3.5-2-4.8-2.9-2-4.8-2-3.5.7-4.8 2-2 2.9-2 4.8.7 3.5 2 4.8 2.9 2 4.8 2zm0-3c-1 0-1.9-.4-2.7-1.1-.7-.7-1.1-1.6-1.1-2.7s.4-1.9 1.1-2.7c.7-.7 1.6-1.1 2.7-1.1s1.9.4 2.7 1.1c.7.7 1.1 1.6 1.1 2.7s-.4 1.9-1.1 2.7c-.8.7-1.7 1.1-2.7 1.1z"
      fill={color}
    />
  </Svg>
);
export default Camera_Icon;
