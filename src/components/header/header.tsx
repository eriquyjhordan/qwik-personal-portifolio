import { component$ } from '@builder.io/qwik';

import { Header, Logo, Nav, NavLink, IconsWrapper, Icon, HamburguerIcon, SocialLinks } from './styles.css';


export default component$(() => {
  return (
    <Header>
      <Logo src="https://hrasslholpqvghzlczfm.supabase.co/storage/v1/object/public/site-images/eriquyjhordan.svg" alt="eriquy jhordan logo" />
      <Nav>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/about">Sobre</NavLink>
        <NavLink href="/projects">Projetos</NavLink>
        <NavLink href="/contact">Contato</NavLink>
      </Nav>
      <IconsWrapper>
        <SocialLinks href="https://www.github.com/eriquyjhordan" target="_blank">
          <Icon src="https://hrasslholpqvghzlczfm.supabase.co/storage/v1/object/public/site-images/github.svg" alt="github icon and link" width={24} height={24} />
        </SocialLinks>
        <SocialLinks href="https://www.linkedin.com/in/eriquyjhordan" target="_blank">
          <Icon src="https://hrasslholpqvghzlczfm.supabase.co/storage/v1/object/public/site-images/linkedin.svg" alt="Linkedin icon and link" width={24} height={24} />
        </SocialLinks>
        <SocialLinks href="mailto: eriquy@gmail.com">
          <Icon src="https://hrasslholpqvghzlczfm.supabase.co/storage/v1/object/public/site-images/mail.svg" alt="Mail icon and link" width={24} height={24} />
        </SocialLinks>
      </IconsWrapper>
      <HamburguerIcon src="https://hrasslholpqvghzlczfm.supabase.co/storage/v1/object/public/site-images/hamburguer-menu.webp" alt="Hamburguer menu icon" width={32} height={32} />
    </Header>
  );
});

