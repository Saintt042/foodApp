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
      background: #ffffff;
      border-radius: 5px;
      font-size: 30px;
      cursor: pointer;
      :hover {
        color: blue;
        transform: scale(1.02);
      }
    }
  }

  p {
    color: white;
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h1 {
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 75px;
    span {
      color: red;
      font-size: 60px;
    }
  }

  .butt {
    color: red;
    text-align: center;
    top: 10px;
    :hover {
      color: blue;
      transform: scale(1.02);
    }
  }
  // @media screen and (max-width: 815px) {
  // 	padding: 20px 3%;
  // }
  @media screen and (max-width: 660px) {
    
  }
`;
