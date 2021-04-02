import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);

`;

export const Content = styled.div`
max-width: 1120px;
margin: 0  auto;

padding: 2rem 1rem 12rem;
display:flex;
flex-wrap:wrap;
gap:2rem;
align-items: center;
justify-content: space-between;

@media (max-width: 975px) {
        display: flex;
        flex-direction: column;
        align-items: center;
     
}

button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s ease-in-out;

   

    &:hover {
        filter: brightness(0.9);

    }
    
}

`;