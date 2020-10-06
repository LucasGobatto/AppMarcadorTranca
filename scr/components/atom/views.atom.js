import styled from 'styled-components/native';
import {themeColors} from '../theme/theme.colors';

export const VBox = styled.View`
  flex-direction: column;
  align-items: center;
  border-width: 4px;
  border-radius: 10px;
  border-color: ${themeColors.mainColor};
`;

export const Hbox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Root = styled.View`
  flex: 1;
`;
