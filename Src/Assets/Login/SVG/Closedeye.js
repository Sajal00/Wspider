import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Closedeye = ({height, width, props}) => (
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
      d="M41.3 24.8c-.2-.2-3.4-3.8-8.1-6.3l2-2c.5-.5.5-1.3 0-1.7s-1.3-.5-1.7 0l-2.7 2.7c-1.8-.7-3.8-1.1-5.8-1.1-9 0-16 8.1-16.3 8.4l-.7.8.7.8c.2.2 3 3.4 7.3 5.8l-1.2 1.2c-.5.5-.5 1.3 0 1.7.2.2.6.4.9.4.3 0 .6-.1.9-.4l1.8-1.8c2 .8 4.3 1.4 6.7 1.4 8.9 0 16-8.1 16.3-8.4l.7-.8-.8-.7zm-11.6.8c0 2.6-2.1 4.7-4.7 4.7-1 0-1.9-.3-2.7-.9l6.5-6.5c.6.8.9 1.7.9 2.7zm-9.4 0c0-2.6 2.1-4.7 4.7-4.7.7 0 1.3.2 1.9.4l-6.2 6.2c-.2-.6-.4-1.2-.4-1.9zm-9 0c1.6-1.6 5.5-5 10.3-6.3-2.2 1.2-3.7 3.6-3.7 6.3 0 1.4.4 2.6 1.1 3.7l-1.1 1.1c-3.1-1.5-5.4-3.6-6.6-4.8zm17.1 6.3c2.2-1.2 3.7-3.6 3.7-6.3 0-1.7-.6-3.2-1.6-4.5l.8-.8c3.4 1.6 6.1 4 7.3 5.2-1.5 1.7-5.4 5.2-10.2 6.4z"
      style={{
        fill: '#809bad',
      }}
    />
  </Svg>
);
export default Closedeye;
