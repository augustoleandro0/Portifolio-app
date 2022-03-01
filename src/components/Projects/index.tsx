import Image from 'next/image';
import Link from 'next/link'
import React, { ReactNode } from 'react';

import { Container, Projeto,Projetos, Buttons } from './styles';

interface ProjectsProps {
  children?: ReactNode;
}

function Projects({ children }: ProjectsProps) {
  return (
    <Container>
      <h1>Projetos</h1>
      <Projetos>
        <Projeto>
          <div>
            <Image
              src="/img/2022-01-27 20.37.46 galery-tatoo.vercel.app 85ce5fa67c54.png"
              alt="Picture of the author"
              width={500}
              height={300}
            />
            <Buttons>
              <button>
                <Link href="https://galery-tatoo.vercel.app" passHref>
                  <a target="_blank">Acesse</a>
                </Link>
              </button>
              <button>
                <Link href="https://github.com/augustoleandro0/galery-tatoo" passHref>
                  <a target="_blank">Codigo fonte </a>
                </Link>
              </button>
            </Buttons>
          </div>
        </Projeto>

        <Projeto>
          <div>
            <h1>App tarefas</h1>
            <h2>Em andamento...</h2>
            <Buttons>
              <button>
                <Link href="https://github.com/augustoleandro0/AppTarefaso" passHref>
                  <a target="_blank">Codigo fonte </a>
                </Link>
              </button>
            </Buttons>
          </div>
        </Projeto>
      </Projetos>
      {children}
    </Container>
  );
};

export default Projects;
