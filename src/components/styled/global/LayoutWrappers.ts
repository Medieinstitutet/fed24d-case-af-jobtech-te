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
    height: 100%;
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
    border-bottom: var(--digi--border-width--secondary) solid var(--border-header);
    background-color:var(--bg-header);
`;

export const MainWrap = styled.main`
    width:100%;
    min-height:100%;
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
    gap: 1rem;
    background-color:var(--page-bg); 
`

export const FooterWrap = styled.footer`
    width:100%;
    height: 150px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0.5rem 1rem;
    border-top:var(--digi--border-width--complementary-1) solid var(--border-footer);
    background-color:var(--bg-footer); 
    color: var(--digi--color--text--inverted);

    & a{
        color:var( --digi--color--text--link);

    &:hover
    {
        color: var( --digi--color--text--link-hover);
    }
    
    &:visited {
        color: var( --digi--color--text--link-visited);
    }
    }
    `
