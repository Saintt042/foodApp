import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  border-color: #f5f5f5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 815px) {
    .wrapper {
      height: 600px;
     } 
  }
`;
