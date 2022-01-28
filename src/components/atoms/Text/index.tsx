import React from 'react';
import { GlobalStyle } from '../../../global-styles/global-styles';
import * as Styled from './styles';

export type TextProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: 'display' | 'lg' | 'md' | 'sm' | 'xs' | 'sb' | 'body',
  uppercase?: boolean;
  fontColor?: 'dark-low' | 'dark-medium' | 'dark-high' | 'magenta' | 'light-solid' | 'light-high',
  fontWeight?: 400 | 700
}

export const Text = ({
  children,
  as = 'h1',
  fontSize = 'lg',
  uppercase = false,
  fontColor = 'dark-high',
  fontWeight = 400
}: TextProps) => {
  return (
    <>
      <Styled.Heading
        as={as}
        fontSize={fontSize}
        uppercase={uppercase}
        fontColor={fontColor}
        fontWeight={fontWeight}
      >
        {children}
      </Styled.Heading>
      <GlobalStyle/>
    </>
  )
}