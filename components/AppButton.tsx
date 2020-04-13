import React from 'react';
import styled from 'styled-components/native'

import { COLORS, StyleUtils } from '../styles/styles';

import AppText from './AppText';
import { TouchableHighlight } from 'react-native-gesture-handler';

type AppButtonProps = {
  label: string,
  isPrimary?: boolean,
}

type ButtonStyleProps = {
  isPrimary?: boolean,
}

export default function AppButton({ label, isPrimary }: AppButtonProps) {

  return (
    <Button isPrimary={ isPrimary }>
      <AppText isBold={ isPrimary }>{ label }</AppText>
    </Button>
  );
}

const Button = styled.TouchableHighlight<ButtonStyleProps>`
  ${StyleUtils.spacedVertical()}
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.highlightGray};
  border-radius: 10px;

  ${({ isPrimary }) => isPrimary && `background-color: ${COLORS.orange}`}
`