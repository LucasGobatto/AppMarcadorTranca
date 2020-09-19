import styled from 'styled-components/native';
import {themeColors, auxColors} from '../theme/theme.colors';

export const Input = styled.TextInput`
  text-align: center;
  background-color: ${themeColors.secColor};
  border-bottom-width: 2px;
  border-top-width: 2px;
  border-radius: 10px;
  border-color: ${auxColors.secondAuxColor};
  width: 200px;
  height: 40px;
  font-size: 16px;
  color: ${themeColors.mainColor};
`;
