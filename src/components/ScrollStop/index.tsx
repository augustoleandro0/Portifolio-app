import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ScrollStopProps {
  children: ReactNode;
}

function ScrollStop({ children }: ScrollStopProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ScrollStop;
