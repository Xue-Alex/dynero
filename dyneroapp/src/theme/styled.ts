import 'styled-components/native';
import {DefaultTheme} from 'styled-components/native';
import {KTheme} from './index';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends KTheme {}
}
