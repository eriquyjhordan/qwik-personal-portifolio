import { styled } from "styled-vanilla-extract/qwik";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.4rem;
`;

export const Logo = styled.img`
  font-size: 6rem;
  width: 26rem;
  height: 2.86rem;
  @media (max-width: 1080px) {
    font-size: 8rem;
  }
  @media (max-width: 720px) {
    font-size: 12rem;
    max-width: 90%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const HamburguerIcon = styled.img`
  display: none;
  @media (max-width: 790px) {
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  position: relative;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const SocialLinks = styled.a`
  color: #0f1221;
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0f1221;
    opacity: 0.8;
  }
`;

export const NavLink = styled.a`
  color: #0f1221;
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #0f1221;
    opacity: 0.8;
    border-bottom: 0.1rem solid #0f1221;
  }
`;
