import styled from 'styled-components';

interface StackStyleProps {
  direction?: string;
  spacing?: number;
  width?: string;
  alignItems?: string;
  justify?: string;
}

export const StackStyle = styled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  gap: ${(props) => (props.spacing ?? 0) * 8}px;
  width: ${(props) => props.width};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems ?? 'center'};
  justify-content: ${(props) => props.justify ?? 'space-evenly'};
  height: 100%;
`;

export const TitleStyle = styled.p`
  font-family: Inter;
  font-size: 58px;
  font-weight: 800;
  text-align: left;
  color: #14171f;
  margin: 0px;
`;
