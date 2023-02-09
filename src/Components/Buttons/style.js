import styled from 'styled-components';

const ComponentButton = styled.button`
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 5px;
  color: ${props => props.color};
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  padding: ${props => props.size};
`;

export { ComponentButton };