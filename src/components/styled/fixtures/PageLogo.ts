import { Link } from "react-router";
import styled from "styled-components";

export const LogoImg = styled.img`
  display: block;
  height: auto;
  width: auto;
  max-height: 48px;
  max-width: 160px;
  object-fit: contain;
  transform-origin: left center;
  transition: transform 180ms ease-out;

  @media (prefers-reduced-motion: reduce) { transition: none; }

    @media (min-width: 400px) {
    max-width: 200px;
  }
`;

export const HeaderLogoLink = styled(Link)`
  width: max-content;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  padding: .15rem .5rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover ${LogoImg}, &:focus-visible ${LogoImg} {
      transform: scale(1.05);
    }
  }
`;

export const FooterLogoLink = styled(Link)`
  width: max-content;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  padding: .15rem .5rem;
`;