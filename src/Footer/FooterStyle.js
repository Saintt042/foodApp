import styled from "styled-components";

export const Container = styled.div`
  .copyright {
    position: absolute;
    max-width: 265px;
    width: 265px;
    height: 19px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #000000;
    left: 244px;
    top: 951px;
  }

  @media screen and (max-width: 815px) {
    .copyright {
      height: 19px;
      left: 16.5%;
      top: 180rem;
    }
  }
`;
