import styled from 'styled-components';
import furryBg from '../../../assets/furry-txt-bg.png';

/* Responsiv, centrerad grid */
export const Columns = styled.div`
  --container-max: 900px;
  --container-pad-x: 16px;
  --col-min: 250px;

  width: min(100% - 2 * var(--container-pad-x), var(--container-max));
  margin-inline: auto;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--col-min), 1fr));
`;

/* Circle around initials in avatar*/
export const AvatarCircle = styled.div`
  inline-size: 130px;
  block-size: 130px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--bg-avatar, #e8f4f1);
  border: 2px solid var(--border-default, #ececec);
`;

/* Image background for text */
export const InitialsClip = styled.span<{ $img?: string }>`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 1;

  background-image: url(${p => p.$img || furryBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AvatarTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  color: var(--text-primary, #2a2730);
`;

export const Role = styled.p`
  margin: 0;
  color: var(--text-secondary, #615661);
  font-size: 0.95rem;
`;

export const LinkWrap = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: end;
`;
export const DigiLink = styled.a`
  color: var(--digi--color--text--link, #116e63);
  text-decoration: underline;
  &:hover { color: var(--digi--color--text--link-hover, #1aa48f); }
  &:visited { color: var(--digi--color--text--link-visited, #0e8c7b); }
`;
