import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import styled from 'styled-components/native';

const Header: React.FC<{}> = () => {
  return (
    <MySvg width="456.842" height="587.466" viewBox="0 0 456.842 587.466">
      <G transform="matrix(1, 0, 0, 1, 0, 0)">
        <Path
          id="Path_1-2"
          data-name="Path 1"
          d="M1054.341,521.315l.949-557.466h419.516s3.561,218.4-6.414,257.846c-11.151,44.1-46.7,139.88-195.324,157.466C992.651,412.341,1054.341,521.315,1054.341,521.315Z"
          transform="translate(-1033.58 48.15)"
          fill="#0a5aaa"
        />
      </G>
    </MySvg>
  );
};

const MySvg = styled(Svg)`
  position: absolute;
  left: -50px;
  top: -50px;
`;

export default Header;
