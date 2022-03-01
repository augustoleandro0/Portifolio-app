import React, { ReactNode } from 'react';

import { Container } from './styles';

interface FooterProps {
  children?: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <Container>
      <div>
        <p>Email: pedroaugustoleandro123@gmail.com</p>
        <p>Likedin: Pedro Leandro</p>
        <p>WhatsApp: (21) 967530875</p>
      </div>
      <h4>Criado por Pedro Leandro</h4>
      {children}
    </Container>
  );
};

export default Footer;
