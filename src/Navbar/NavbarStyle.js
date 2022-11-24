import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  max-width: 132px;
  height: 852px;
  max-height: 852px;
  left: 57px;
  top: 43px;

  background: #0c0b0b;
  border-radius: 24px;
  img {
    width: 129px;
    border-radius: 8px;
    height: 100px;
    margin-bottom: 20px;
  }
  .navbar {
    padding-top: 16px;
    .icons {
      color: #818181;
      display: flex;
      flex-direction: column;
      gap: 110px;
      align-items: center;
      :hover {
        color: red;
      }
    }
  }

  #icon {
    color: white;
    width: 40px;
    height: 40px;
    :hover {
      background: #f1d5bb;
      width: 132px;
      height: 80px;
    }
  }

  @media screen and (max-width: 815px) {
    width: 350px;
    max-width: 852px;
    height: 75px;
    max-height: 132px;
    left: 2px;
    top: 10rem;
    background: none;
    border-radius: 14px;
    img {
      display: none;
    }
    .navbar {
      display: flex;
      justify-content: center;
      width: 100%;

      .icons {
        color: #818181;
        display: flex;
        flex-direction: row;
        gap: 35px;
        align-items: center;
      }
    }

    #icon {
      color: black;
      width: 30px;
      height: 30px;
      :hover {
        background: none;
        width: 72px;
        max-width: 132px;
        height: 60px;
        max-height: 180px;
        border-radius: 25%;
      }
    }
  }
`;
