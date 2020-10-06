import React, {useState} from 'react';

import {Title, Label} from '../atom/text.atom';
import {Input} from '../atom/text-input.atom';
import {VBox} from '../atom/views.atom';

export const Scores = (props) => {
  const [score, setScore] = useState(0);

  function pointsList(points) {
    points.map((point) => {
      return <Label>{point}</Label>;
    });
  }

  function handleChangeText(point) {
    if (props.onClick) {
      props.points.push(point);
      setScore(score + point);
    }
  }

  return (
    <VBox>
      <Title>{props.name}</Title>
      <Title>{score}</Title>
      {pointsList(props.points)}
      <Input onChangeText={handleChangeText} />
    </VBox>
  );
};
