import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: center;
  width: 100%;
  margin: 20px;
  figure {
    display: flex;
    flex-direction: column;
    img {
      display: flex;
      flex-direction: row;
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
  .info {
    // border: 1px solid red;
    > * {
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      margin: 20px;
    }
  }

  .bold {
    font-weight: 600;
    font-size: clamp(0.95rem, 1.5vw, 1.3rem);
  }

  .money {
    font-size: clamp(0.75rem, 1.5vw, 0.99rem);
  }

  .add {
    border: 1px solid red;
    display: flex;
    align-items: center;
     flex-direction: flex-end;
    // justify-content: space-evenly;
    width: 45%;

    img {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      width: 20px;
      height: 20px;
    }
  }

  .span {
    padding: 5px 9px;
    box-sizing: border-box;
    border: none;
    background: white;
    width: 76px;
    height: 305px;
  }
  .one {
    margin: 20px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    align-items: center;
  }

  @media screen and (max-width: 815px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px;
  figure {
    display: flex;
    flex-direction: column;
    img {
    width: 200px;
    height: 200px;
      border-radius: 20%;
    }
  }
  .info {
    // border: 1px solid red;
    > * {
      gap: 15px;
      margin: 20px;
    }
  }


  @media screen and (max-width: 575px) {
    .foodies {
      justify-content: center;
    }
  }
`;

