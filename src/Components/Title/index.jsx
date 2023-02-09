import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 32px;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
