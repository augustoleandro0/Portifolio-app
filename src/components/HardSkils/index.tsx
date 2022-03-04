import React, { ReactNode } from 'react';

import { Container, Cards } from './styles';

import { AtomicIcon, JavaScriptIcon, TypeScriptIcon, CssIcon } from '../icons/index'
import Card from '../Card';



interface ConhecimentoProps {
  children?: ReactNode;
}

function Conhecimento({ children }: ConhecimentoProps) {
  return (
    <Container>
      <h1>Hard skils</h1>
      <Cards>

        <Card>
          <div>
            <JavaScriptIcon />
            <h3>JavaScript e TypeScript</h3>
            <p>Manipulação da DOM, criação de funções para consumo de apis,<br /> implementações de regras de negocios voltadas para o front end, padroes de typagem e controle de dados, </p>
          </div>
        </Card>

        <Card>
          <div>
            <CssIcon />
            <h3>CSS</h3>
            <p>css e seu pre-processadores, libs de estilizações Tailwind, o classico Bootstrap e o styled Components para Css-in-JS </p>
          </div>
        </Card>

        <Card>
          <div>
            <AtomicIcon />
            <h3>React JS e Next JS</h3>
            <p>habilidades no desenvolvimento de interfaces
              web com freamework
              ReactJS/Next puro JS ou junto ao typescript.
            </p>
          </div>
        </Card>
        
      </Cards>
      {children}
    </Container>
  );
};

export default Conhecimento;
