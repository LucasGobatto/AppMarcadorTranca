import styled from 'styled-components/native';
import {themeColors} from '../theme/theme.colors';

export const TouchableSquare = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : themeColors.secColor};
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
`;

export const TouchableCircle = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
