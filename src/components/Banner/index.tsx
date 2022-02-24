import React, { ReactNode } from 'react';
import Image from 'next/image'
import { Container,TextBanner } from './styles';

interface BannerProps {
  children?: ReactNode;
}

function Banner({ children }: BannerProps) {
  return (
    <Container>
      <TextBanner>
        <h1>Olá, sou <strong>Pedro Leandro</strong></h1>
        <h2>Dev Front-End</h2>
      </TextBanner>
      <Image
        src="/img/WhatsApp_Image_2021-02-22_at_11.42.08_2_-removebg-preview.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      {children}
    </Container>
  );
};

export default Banner;
