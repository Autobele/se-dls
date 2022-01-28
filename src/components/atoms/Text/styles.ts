import styled, { css } from 'styled-components';
import { TextProps } from '.';
import { theme } from '../../../global-styles/theme';

const titleSize = {
  display: () => css`
    font-size: ${theme.font.sizes.xxl};
    font-weight: 700;
    letter-spacing: -1.2;
    line-height: 52px;
  @media only screen and (max-width: 600px) {
    font-size: ${theme.font.sizes.m};
    line-height: 44px;
  } 
  `,
  lg: () => css`
  font-size: ${theme.font.sizes.l};
  font-weight: 700;
  letter-spacing: -1;
  line-height: 44px;
  @media only screen and (max-width: 600px) {
    font-size: ${theme.font.sizes.m};
    line-height: 36px;
  } 
  `,
  md: () => css`
  font-size: ${theme.font.sizes.m};
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.8;
  @media only screen and (max-width: 600px) {
    font-size: ${theme.font.sizes.sm};
    line-height: 28px;
  }
  `,
  sm: () => css`
  font-size: ${theme.font.sizes.sm};
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.6;
  @media only screen and (max-width: 600px) {
    font-size: ${theme.font.sizes.xs};
    line-height: 24px;
  } 
  `,
  xs: () => css`
  font-size: ${theme.font.sizes.sm};
  font-weight: 700;
  line-height: 24px;
  @media only screen and (max-width: 600px) {
    font-size: ${theme.font.sizes.xs};
    line-height: 22px;
  } 
  `,
  sb: () => css`
  font-size: ${theme.font.sizes.sb};
  font-weight: 700;
  line-height: 20px;
  `,
  body: (weight = 400) => css`
  font-size: ${theme.font.sizes.sb};
  font-weight: ${weight ? weight : 400};
  line-height: 24px;
  `,
}

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`

export const Heading = styled.h1<TextProps>`
  ${({ fontWeight = 400, fontColor = 'dark-high', fontSize = 'lg', uppercase = false }) => css`
  ${titleSize[fontSize](fontWeight)};
  ${titleCase(uppercase)};
  color: ${theme.colors[fontColor]};
  `}
`;