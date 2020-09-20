import React from 'react';
import {Label} from '../atom/text.atom';
import {TouchableSquare, TouchableCircle} from '../atom/touchable.atom';
import {themeColors} from '../theme/theme.colors';

export const SquareButton = (props) => {
  return (
    <TouchableSquare onPress={props.onPress}>
      <Label>{props.text}</Label>
    </TouchableSquare>
  );
};

export const CircularButton = (props) => {
  return (
    <TouchableCircle
      backgroundColor={
        props.backgroudColor ? props.backgroudColor : themeColors.mainColor
      }
      onPress={props.onPress}>
      <Label color={props.color ? props.color : themeColors.secColor}>
        {props.text}
      </Label>
    </TouchableCircle>
  );
};
