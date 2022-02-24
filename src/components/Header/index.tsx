import Link from 'next/link';
import React, { ReactNode } from 'react';

import { Container, HeaderStyle ,Navigator, Logo,Baixar} from './styles';

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <HeaderStyle>
        <Logo>
          <p>PL</p>
        </Logo>
        <Navigator>
            <ul>
              <li>Hard Skils</li>
              <li>Soft Skils</li>
              <li>Projetos</li>
              <li>Contatos</li>
            </ul>
        </Navigator>
        <Baixar>
            <button>
               <Link href="https://drive.google.com/file/d/1Qzy0v0CEQ7CQt5YaTtNXt6PJ7AQm258c/view?usp=sharing">
               <a target="_blank">Baixar CV</a></Link>
            </button>
        </Baixar>
      </HeaderStyle>
      {children}
    </Container>
  );
};

export default Header;
