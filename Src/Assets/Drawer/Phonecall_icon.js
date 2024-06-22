import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Phonecall_Icon = ({
  height,
  width,
  color,
  second_color,
  third_color,
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
      d="M37.4 32.1c-.2-1.3-.9-2.6-1.7-3.4C34 27 32 26.3 30 26.8c-1.5.3-2.6 1.4-3.2 2.3-.9-.7-2.2-1.7-3.3-2.8-1.1-1.1-2-2.3-2.6-3.1.9-.6 2-1.7 2.3-3.2.4-2-.2-4-2-5.7-1.6-1.6-5.2-2.7-7.2-.7-.5.5-2 2.3-1.5 5.7.5 3.3 2.8 7 6.8 11l.4.4c5.5 5.5 9.6 6.9 12.3 6.9 2.7 0 4.1-1.3 4.4-1.6.9-1 1.3-2.3 1-3.9zm-2.2 2.6c-1.7 1.7-6.5 2.4-14.2-5.3l-.4-.4c-3.7-3.7-5.8-7.1-6.3-10-.3-2.1.3-3.5 1-4.2.4-.4.9-.5 1.5-.5 1.1 0 2.4.5 3.2 1.3.9.9 1.9 2.3 1.5 4.1-.3 1.4-1.8 2.3-2.2 2.5l-.8.5.5.8c.5.8 1.8 2.6 3.4 4.1 1.7 1.7 3.5 3 4.3 3.5l.8.5.5-.8c.2-.4 1.1-1.9 2.5-2.2 1.8-.4 3.2.6 4.1 1.5.6.6 1 1.5 1.2 2.5 0 .8-.1 1.6-.6 2.1z"
      className="st0"
      fill={color}
    />
    <Path
      d="M25.4 19.5c2.6 0 4.8 2.2 4.8 4.8 0 .5.4.9.9.9s.9-.4.9-.9c0-3.6-2.9-6.6-6.6-6.6-.5 0-.9.4-.9.9s.4.9.9.9z"
      className="st0"
      fill={second_color}
    />
    <Path
      d="M25.4 15.7c4.7 0 8.6 3.9 8.6 8.6 0 .5.4.9.9.9s.9-.4.9-.9c0-5.7-4.7-10.4-10.4-10.4-.5 0-.9.4-.9.9s.4.9.9.9z"
      className="st0"
      fill={third_color}
    />
  </Svg>
);
export default Phonecall_Icon;
