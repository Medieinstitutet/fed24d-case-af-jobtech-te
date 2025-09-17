import styled from "styled-components";

export const HeroWrap = styled.section<{ $height?: string }>`
  position: relative;
  width: 100%;
  min-height: ${({ $height }) => $height ?? "320px"};
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.1) contrast(1.05);
`;

export const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0,0,0,.35) 0%,
    rgba(0,0,0,.25) 40%,
    rgba(0,0,0,.45) 100%
  );
`;

export const GlassQuote = styled.figure`
  position: relative;
  z-index: 1;
  margin: 0;

  /* glass */
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,.15);

  color: #fff;
  padding: 1rem 1.25rem;
  max-width: 780px;
  width: calc(100% - 2rem);

  display: grid;
  gap: .5rem;

  blockquote {
    margin: 0;
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    line-height: 1.35;
  }
  figcaption {
    font-size: .9rem;
    opacity: .9;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
  width: 100%;
  place-items: center;
  padding: 1rem;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0,0,0,.35);
  font-size: clamp(1.4rem, 4.2vw, 2.2rem);
`;
