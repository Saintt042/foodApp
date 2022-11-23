import styled from "styled-components";

export const Container = styled.section`
  // display: flex;
  position: absolute;
  border-color: #f5f5f5;
//   z-index: 
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // width: 100vw;
  // height: 100vh;'
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  // .carousell {
  // 	display: flex;
  // 	height: 500px;
  // 	width: 100%;
  // 	max-width: 1440px;
  // 	border: 2px solid red;
  // }

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    // border: 2px solid red;
  }

  .card {
    // display: flex;
    // flex: 1;
    // border: 2px solid red;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
    
      // display: block;
    }
  }
  @media screen and (max-width: 660px) {
  }
`;
