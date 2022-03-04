import React, { ReactNode } from 'react';
import Card from '../Card';

import { Cards } from '../HardSkils/styles';

import { Container } from './styles';

import {CodigoIcon, ScrumIcon} from '../icons/index'

interface SoftSkilsProps {
  children?: ReactNode;
}

function SoftSkils({ children }: SoftSkilsProps) {
  return (
    <Container>
      <h1>Soft Skils</h1>

      <Cards>
        <Card>
        <div>
          <CodigoIcon/>
            <h3>Principais ferramentas de trabalho</h3>
            <p>Versionamento de codigo com git e github.<br/>
               comunicação com slack e discord<br/>
               controle de fluxo de trabalho con trello e similares.
            </p>
          </div>
        </Card>

        <Card>
        <div>
          <ScrumIcon/>
            <h3>Metodologias de trabalho</h3>
            <p>Metologias de trabalho com scrum/kamban<br/>
               documentaçãoes de codigos e projetos<br/>
               comunicação de agil, sempre disposto a ajudar e agregrar valor.
            </p>
          </div>
        </Card>
      </Cards>
      {children}
    </Container>
  );
};

export default SoftSkils;
