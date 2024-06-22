import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Logout_icon = ({
  height,
  width,
  color,

  props,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 50 50',
    }}
    viewBox="0 0 50 50"
    width={width}
    height={height}
    {...props}>
    <Path
      d="M14.5 38.5c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1v-21c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9H25v3H14.5v21H25v3H14.5zm16.5-6-2.1-2.2 3.8-3.8H20.5v-3h12.3L29 19.7l2.1-2.2 7.5 7.5-7.6 7.5z"
      fill={color}
    />
  </Svg>
);
export default Logout_icon;
