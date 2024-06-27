import styled from 'styled-components';
import { StackStyleProps } from '../../features/movies/MovieCard/MovieCard.type';

export const RootStyle = styled.button`
  height: 50px;
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: #9e9e9e;
  }

  &:disabled {
    opacity: 1;
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

export const StackStyle = styled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  gap: ${(props) => (props.spacing ?? 0) * 8}px;
  width: ${(props) => props.width};
  align-items: ${(props) => props.align ?? 'center'};
`;

export const TextStyle = styled.p`
  font-size: 14px;
  color: #606060;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
