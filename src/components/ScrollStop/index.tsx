import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ScrollStopProps {
  children: ReactNode;
}

function ScrollStop({ children }: ScrollStopProps) {
  return (
    <Container>
      <h1>ScrollStop</h1>
      {children}
    </Container>
  );
};

export default ScrollStop;
