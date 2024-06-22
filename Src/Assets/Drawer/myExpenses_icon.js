import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const MyExpense_icon = ({height, width, color, secondColor, props}) => (
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
      d="M40.8 21.8v-4.2c0-1.9-1.5-3.4-3.4-3.4h-1.2l-.4-4-27.1 4H7.5v25.5h29.9c1.9 0 3.4-1.5 3.4-3.4v-5.9c1-.2 1.7-1.1 1.7-2.2v-4.4c0-.9-.7-1.8-1.7-2zM40 28h-7.6v-3.8H40V28zm-6.5-14.8.1 1.1h-7.4l7.3-1.1zm3.9 24H10V16.8h27.4c.5 0 .8.4.8.8v4.1h-8.5v8.9h8.5v5.8c.1.4-.3.8-.8.8z"
      className="st0"
      fill={color}
    />
    <Path
      d="M23.4 25h-.2c-.5.1-.9.6-.8 1.1v.2c0 .1 0 .2.1.4 0 .7-.2 1.4-.6 2.1-.7 1.1-1.6 2-2.8 2.8-.2.1-.4.2-.5.3v-4.4l2.3-2.1c.2-.2.4-.3.5-.5.2-.2.3-.5.2-.8-.1-.3-.3-.5-.7-.6h-.2c-.2 0-.4.1-.6.3l-1.6 1.5v-.8l2-1.8c.2-.2.5-.4.7-.7.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.6-.2-.1-.3-.2-.5-.2s-.5.1-.6.3l-1.5 1.3v-1.5c0-.2 0-.6-.5-.9-.1 0-.1-.1-.2-.1h-.6c-.1 0-.1 0-.2.1-.3.2-.5.5-.5.9v3.3c-.2.2-.4.3-.5.5l-1.5 1.3c-.1.1-.4.3-.4.7v.4h.1c.2.4.4.6.8.6.2 0 .5-.1.7-.3l.5-.5.4-.4v.8l-2 1.8-.2.2c-.2.3-.3.6-.1.9.1.3.4.5.8.5.2 0 .4-.1.6-.3l.9-.8V33.4c0 .3.1.5.3.7.2.2.5.3.7.3h.3c.4-.1.9-.3 1.3-.5 1-.5 1.9-1.1 2.8-2 .8-.8 1.4-1.6 1.8-2.4.7-1.3.8-2.5.6-3.8-.3-.4-.6-.7-1.1-.7z"
      className="st0"
      fill={secondColor}
    />
  </Svg>
);
export default MyExpense_icon;
