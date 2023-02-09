import { component$ } from '@builder.io/qwik';

import {
  HeroSection,
  HeroLeft,
  Title,
  SubTitle,
  Description,
  StrongText,
  ButtonCalltoAction,
  ButtonDisclaimer,
  HeroRight,
  ImageHero,
  SubtitleWrapper,
  SubTitleIllustration,
  ButtonWrapper,
} from './styles.css';


export default component$(() => {
  return (
    <HeroSection>
      <HeroLeft>
        <Title>
          Crie produtos digitais, marcas
        </Title>
        <SubtitleWrapper>
          <SubTitleIllustration src="/images/exp-illustration.webp" alt="purple circle with a pencil inside" width={42} height={42} />
          <SubTitle>
            experiências
          </SubTitle>
        </SubtitleWrapper>
        <Description>
          <StrongText>Desenvolvedor web</StrongText> e <StrongText>designer</StrongText>, especializado em Design Responsivo, UI/UX e JavaScript
        </Description>
        <ButtonWrapper>
          <ButtonCalltoAction href="">
            Entre Em Contato
          </ButtonCalltoAction>
          <ButtonDisclaimer>
            Descreva seu projeto • Orçamento rápido e fácil
          </ButtonDisclaimer>
        </ButtonWrapper>
      </HeroLeft>
      <HeroRight>
        <ImageHero src="/images/hero-image.webp" alt="Hero image" width={525} height={315} />
      </HeroRight>
    </HeroSection>
  );
});