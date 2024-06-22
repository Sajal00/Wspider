import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Openeyeicon = ({height, width, props}) => (
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
      d="M41.3 24.2c-.3-.3-7.3-8.4-16.3-8.4S9 23.9 8.7 24.2L8 25l.7.8c.3.3 7.3 8.4 16.3 8.4s16-8.1 16.3-8.4l.7-.8-.7-.8zM25 29.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7zm-3.4-11c-2.2 1.2-3.7 3.6-3.7 6.3 0 2.7 1.5 5.1 3.7 6.3-4.8-1.2-8.7-4.7-10.3-6.3 1.6-1.6 5.5-5.1 10.3-6.3zm6.8 12.6c2.2-1.2 3.7-3.6 3.7-6.3 0-2.7-1.5-5.1-3.7-6.3 4.8 1.2 8.7 4.7 10.3 6.3-1.6 1.6-5.5 5.1-10.3 6.3z"
      style={{
        fill: '#809bad',
      }}
    />
  </Svg>
);
export default Openeyeicon;
