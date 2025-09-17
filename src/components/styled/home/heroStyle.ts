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
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.15);

  color: #fff;
  padding: 2rem 2.5rem 2rem 1rem;
  max-width: max-content;
  display: grid;
  gap: .5rem;

  blockquote {
    margin: 0;
    text-align: center;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    line-height: 1.75;
    white-space: pre-line; 
  }

  figcaption {
    font-size: 1rem;
    opacity: .9;
    text-align: end;
    margin-top: 1rem;
   margin-right:-1rem;

  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
  width: 100%;
  place-items: start;
  padding:2rem .5rem 1rem 1rem;

`;

export const HeroTitle = styled.h1`
  color: #fff;
  text-shadow: 0 1px 8px rgba(0,0,0,.35);
  font-size: clamp(1.4rem, 4.2vw, 2.2rem);
  text-align: center;
  padding-left: 3rem;
`;
