import React, {useRef} from 'react';
import {Input} from '../atom/text-input.atom';
import {Label} from '../atom/text.atom';
import {VBox} from '../atom/views.atom';

import {themeColors} from '../theme/theme.colors';
import {textSize} from '../theme/theme.sizes';

export const Forms = (props) => {
  const value = useRef('');

  function handleFirstSubmit(text) {
    value.current = text;
    props.handleChangeTextPlayer1({
      text: value.current,
      isValid: validateName(value.current),
    });
  }
  function handleSecondSubmit(text) {
    value.current = text;
    props.handleChangeTextPlayer2({
      text: value.current,
      isValid: validateName(value.current),
    });
  }

  function validateName(name) {
    const validation = /\W|_|[0-9]/;
    return !validation.test(name) && name.length <= 15 && name.length >= 2;
  }

  return (
    <>
      <Label fontSize={textSize.titleText} color={themeColors.mainColor}>
        {props.text}
      </Label>
      <VBox>
        <Input onChangeText={handleFirstSubmit} />
        <Input onChangeText={handleSecondSubmit} />
      </VBox>
    </>
  );
};
