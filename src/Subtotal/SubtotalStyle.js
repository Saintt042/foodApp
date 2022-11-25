import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 893px;
  width: 443px;
  top: 135px;
  gap: 30px;

  h3,
  h4 {
font-style: normal;
font-weight: 400;
font-size: 40px;
color: #000000;
margin: 20px;
  }

  .subb {
    font-weight: 400;
font-size: 30px;
margin: 25px;
  }

  .confirmbtn {
    margin: 25px;
    width: 365px;
height: 78px;
font-weight: 400;
font-size: 30px;
color: #FFFFFF;
background: #000000;
border-radius: 5px;
cursor: pointer;
  }
.subtotal {
  display: flex;
  flex-direction: column;
background: #F1D5BB;
border-radius: 3px;
}

.promo {
height: 326px;
display: flex;
  flex-direction: column;
background: #FFFFFF;
border: 1px solid #F1D5BB;
border-radius: 3px;
}

form {
  display: flex;
  flex-direction: column;
}

.typist {
  width: 365px;
height: 78px;
font-weight: 200;
font-size: 30px;
line-height: 38px;
padding: 10px;
color: rgba(0, 0, 0, 0.6);
background: #FFFFFF;
border: 1px solid #F1D5BB;
margin: 15px;
}

.applybtn {
  margin: 15px;
  width: 166px;
height: 78px;
font-weight: 400;
font-size: 30px;
color: #FFFFFF;
background: #000000;
border-radius: 5px;
cursor: pointer;
}

.applybtn,
.confirmbtn {
  :hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }
}

  @media screen and (max-width: 815px) {
    position: relative;
    left: 0;
    width: 385px;
    top: 130rem;
    align-items: center;
  text-align: center;
  
    h3,
    h4 {
  font-size: 30px;
    }
  
    .confirmbtn {
      width: 325px;
    }
    .subb {
  font-size: 25px;
    }

  
.typist {
  width: 325px;
font-size: 20px;
}
`;
