import React from 'react';
import {SvgCss} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

const xml = `
    <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.28014 57.47949">
        <defs>
            <style>
                .cls-1{font-size:42.9594px;fill:#fff;font-family:HelveticaNeue-BoldItalic, Helvetica Neue;font-weight:700;font-style:italic;}.cls-2{letter-spacing:-0.01798em;}.cls-3{fill:#9ed18e;}
            </style>
        </defs>
        <title>logo</title>
        <text class="cls-1" transform="translate(47.30163 36.81592) scale(1.21531 1)">Dyne
            <tspan class="cls-2" x="105.03485" y="0">r</tspan><tspan x="120.97287" y="0">o</tspan>
        </text>
        <polygon class="cls-3" points="47.062 12.322 27.248 12.322 28.907 6.064 48.726 6.182 47.062 12.322"/>
        <polygon class="cls-3" points="43.739 24.614 13.275 24.614 14.902 18.522 45.372 18.64 43.739 24.614"/>
        <polygon class="cls-3" points="40.781 36.756 0 36.756 1.652 30.453 42.236 30.644 40.781 36.756"/>
    </svg>
`;

const Logo = ({style}: {style?: StyleProp<ViewStyle>}) => {
  return <SvgCss style={style} xml={xml} width="100%" height="100%" />;
};

export default Logo;
