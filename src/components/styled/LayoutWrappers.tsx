import { TypographyVariation } from '@digi/arbetsformedlingen'
import { DigiTypography } from '@digi/arbetsformedlingen-react'
import styled from 'styled-components'

export const Typography = styled(DigiTypography).attrs({
    afVariation: TypographyVariation.LARGE

})`
    height:100%;
    width:100%;
`
export const PageWrap = styled.div`
    width:100%;
    min-height:100dvh;
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 78px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:2px solid var(--digi--grayscale-400);
`;

export const MainWrap = styled.main`
    width:100%;
    height:10px;
    min-height:100%;
    flex: 1;
    padding: 2rem 1rem;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const FooterWrap = styled.div`
    width:100%;
    height: 150px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0.5rem 1rem;
    border-top:2px solid var(--digi--grayscale-400);
    `