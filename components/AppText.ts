import styled from 'styled-components/native';

import { COLORS, StyleUtils } from '../styles/styles';

type TextProps = {
  isBold?: boolean,
}

const AppText = styled.Text<TextProps>`
  ${StyleUtils.fontSize('sm')}
  ${StyleUtils.spacedVertical()}
  ${StyleUtils.fontFamily('body')}
  color: ${COLORS.lightGray};

  ${({ isBold }) => isBold && StyleUtils.fontFamily('bold')}
`;

export default AppText;
