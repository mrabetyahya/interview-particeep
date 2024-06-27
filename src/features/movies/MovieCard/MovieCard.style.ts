import styled from 'styled-components';
import { BarStyleProps, StackStyleProps } from './MovieCard.type';

export const StackStyle = styled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  gap: ${(props) => (props.spacing ?? 0) * 8}px;
  width: ${(props) => props.width};
  align-items: ${(props) => props.align ?? 'center'};
`;

export const TitleStyle = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #14171f;
  margin-bottom: 0px;
`;

export const TypographyStyle = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #14171f;
  margin-bottom: 0px;
`;



export const BarStyle = styled.div<BarStyleProps>`
  width: ${(props) => props.width};
  height: 2px;
  background: ${(props) => props.background ?? 'green'};
`;
