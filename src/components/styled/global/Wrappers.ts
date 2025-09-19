import styled from 'styled-components';


type AsTag = 'div' | 'section' | 'article';

type BaseWrapProps = {
  $p?: string;       // padding
  $maxW?: string;    // max-width
  $bg?: string;      // background color
  $gap?: string;     // flex-gap
  as?: AsTag;         // 
};

export const BaseBlockWrap = styled.section<BaseWrapProps>`
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


export const BaseBlockCard = styled.div<BaseWrapProps>`
  width: 100%;
  max-width: ${({ $maxW = '280px' }) => $maxW};
  background: ${({ $bg }) => $bg ?? 'var(--card-bg, var(--surface-1, #f5f7fa))'};
  border-radius: var(--radius-md, 8px);
  padding: ${({ $p = 'var(--space-4, 1rem)' }) => $p};
  box-shadow: var(--shadow-sm, 0 2px 6px rgba(0,0,0,0.1));
  display: flex;
  flex-direction: column;
  gap: ${({ $gap = 'var(--space-4, 1rem)' }) => $gap};
  align-items: center;
  text-align: center;
  border: 1px solid var(--border-default, #ececec);
`;
