import styled from 'styled-components';

type BaseBlockWrapProps = {
    $p?: string;       // padding
    $maxW?: string;    // max-width
    $bg?: string;      // background color
    $gap?: string;      // flex-gap
};

export const BaseBlockWrap = styled.section<BaseBlockWrapProps>`
  width: 100%;
  max-width: ${({ $maxW = '1200px' }) => $maxW};
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap = '1rem' }) => $gap};

  padding: ${({ $p = '1rem' }) => $p};
  background: ${({ $bg = 'transparent' }) => $bg};
`;
