import React from 'react';
import styled from 'styled-components/native';
import Svg, {G, Path} from 'react-native-svg';

const SmallTopHeader: React.FC<{}> = () => {
  return (
    <MySvg width="469.775" height="128.419" viewBox="0 0 469.775 128.419">
      <G transform="matrix(1, 0, 0, 1, 0, 0)">
        <Path
          id="Path_1-2"
          data-name="Path 1"
          d="M1054.341,62.268l-14.828-120.3h439.775s-.921,60.436-10.9,67.4c-11.151,7.785-46.7,24.7-195.324,27.8C992.651,43.029,1054.341,62.268,1054.341,62.268Z"
          transform="translate(-1024.51 70.03)"
          fill="#0a5aaa"
        />
      </G>
    </MySvg>
  );
};

const MySvg = styled(Svg)`
  position: absolute;
  left: -50px;
  top: -15px;
`;

export default SmallTopHeader;
