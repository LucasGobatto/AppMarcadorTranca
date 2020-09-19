import styled from 'styled-components/native';
import {themeColors} from '../theme/theme.colors';
import {textSize} from '../theme/theme.sizes';

export const Label = styled.Text`
  text-align: center;
  color: ${(props) => (props.color ? props.color : themeColors.mainColor)};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : textSize.buttomText}px;
`;
