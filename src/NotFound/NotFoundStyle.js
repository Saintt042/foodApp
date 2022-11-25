import styled from "styled-components";

export const Container = styled.div`
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(68, 68, 68);
    min-height: 80vh;
    h2 {
        font-size: 55px;
    }

    p {
        font-size: 20px;
    }

    button {
        height: 60px;
        width: 120px;
        margin-top: 20px;
        background: #B8B8B8;;
        border-radius: 8px;
        border: none;
        :hover {
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
            transform: scale(1.05);
          }
    }
}

  @media screen and (max-width: 815px) {
   
  }
`;
