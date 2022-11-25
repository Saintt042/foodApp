import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0 50px 0;

  h1 {
    border-bottom: 4px solid #f1d5bb;
    position: absolute;
    width: 306px;
    height: 63px;
    left: 243px;
    top: 23px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 63px;
    color: #000000;
  }

  .foodies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    max-width: 1095px;
    width: 608px;
    height: 608px;
    max-height: 2000px;
    background: #f1d5bb;
    border-radius: 3px;
    left: 243px;
    top: 154px;
  }

  .loadmore {
    position: absolute;
    width: 194px;
    height: 54px;
    left: 676px;
    top: 841px;
    background: #000000;
    border-radius: 2px;
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    :hover {
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: 815px) {
    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      left: 2px;
      top: 5rem;
    }

    .foodies {
      width: 100%;
      height: 1800px;
      left: 0;
      top: 15rem;
    }

    .loadmore {
      left: 25%;
      top: 15rem;
    }
  }

  @media screen and (max-width: 575px) {
    .foodies {
      justify-content: center;
    }
  }
`;
