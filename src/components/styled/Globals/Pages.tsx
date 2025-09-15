import styled from 'styled-components';

type PageSectionProps = {
    $bg?: string;
    $gap?: string;
    $padding?: string;
};

export const PageSection = styled.section<PageSectionProps>`
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: ${({ $gap = '1rem' }) => $gap};
    padding: ${({ $padding = '0' }) => $padding};
    background: ${({ $bg = 'transparent' }) => $bg};
`;

export const HiddenPageTitle = styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
`;

export const PageTitle = styled.h2`
    align-self: center;
`;