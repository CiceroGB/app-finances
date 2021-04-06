import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:1rem;
    margin-top: -10rem;

    @media (max-width: 975px) {
        display: flex;
        flex-direction: column;
        align-items: center;
     
    }


    div {
        width:20rem;
        height:8.5rem;
        color: var(--text-title);
        background: var(--shape);
        border-radius: 0.25rem;
        box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.06);

        @media (max-width: 975px) {
            width:25rem;     
        }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;

     
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      margin: 0 auto;
      padding: 0rem 2rem;

      @media (max-width: 975px) {
            font-size: 2.5rem;    
        }

    }

    &.highlight-background {
        background: var(--green);
        color: #FFF;
    }



    }

`

    ;