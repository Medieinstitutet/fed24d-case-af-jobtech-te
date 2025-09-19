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
  justify-content:space-between;
  text-align: center;
  border: 1px solid var(--border-default, #ececec);
`;


type ColumnsProps = {
  $max?: string;    // container max-width, e.g. "1200px" / "90rem"
  $padX?: string;   // horizontal padding, e.g. "16px"
  $colMin?: string; // min column width, e.g. "300px"
  $gap?: string;    // grid gap, e.g. "2rem"
};

export const Columns = styled.div<ColumnsProps>`
  --container-max: ${({ $max = '1200px' }) => $max};
  --container-pad-x: ${({ $padX = '16px' }) => $padX};
  --col-min: ${({ $colMin = '300px' }) => $colMin};

  width: min(calc(100% - 2 * var(--container-pad-x)), var(--container-max));
  margin-inline: auto;

  display: grid;
  gap: ${({ $gap = '2rem' }) => $gap};
  grid-template-columns: repeat(auto-fit, minmax(var(--col-min), 1fr));
`;
