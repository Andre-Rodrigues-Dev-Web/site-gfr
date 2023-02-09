import styled from 'styled-components';

const Content = styled.main`
    width: 100%;
    @media (min-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0 -15px;
`;

export { Content, Row };