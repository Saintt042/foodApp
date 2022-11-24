import styled from "styled-components";

export const Container = styled.div`
  margin: 200px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .homelayout {
    z-index: 8;
    width: 822px;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      width: 250px;
      height: 80px;
      border-radius: 5px;
      font-size: 30px;
      cursor: pointer;
      :hover {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
        transform: scale(1.05);
      }
    }
  }

  p {
    color: white;
    font-size: clamp(1.2rem, 4vw, 1.95rem);
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  h1 {
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(2rem, 4vw, 3.75rem);
    text-align: center;
    span {
      color: #b8b8b8;
      font-size: clamp(2rem, 4vw, 3.75rem);
    }
  }

  .butt {
    color: #b8b8b8;
    text-align: center;
    top: 10px;
  }
  @media screen and (max-width: 815px) {
    margin: 4rem;

    h1 {
      max-width: 100%;
      align-items: center;
    }

    p {
      max-width: 95%;
      align-items: center;
    }

    ul {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      li {
        width: 200px;
        height: 60px;
      }
    }
  }
  @media screen and (max-width: 660px) {
  }
`;
