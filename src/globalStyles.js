import { createGlobalStyle } from "styled-components";
import styled,{css} from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 968) {
    padding: 0 30px;
  }
`;

export const Section = styled.div`
  color: #fff;
  padding: 0 160px;
`;

export const Heading = styled.h1`
  font-size: clamp(4rem,7.5vw,6rem);
  color: white;
  margin-bottom: 1rem;
  text-align: center;

`;

export const InnerHeading = styled.h1`
  color: black;
  font-size: clamp(2rem, 3.5vw, 5rem);
  letter-spacing: 4px;
  font-weight: bold;
  color: #222;
  text-align: center;
  position: relative;
`

export const Text = styled.p`
  font-size: ${({ showcase }) => (showcase ? "18px" : "15px")};
  color: ${({ grey }) => (grey ? "#626881" : "#fff")};
  margin: .5rem !important;
  letter-spacing: 1px;

  @media screen and (max-width: 568px) {
    display: none;
  }
`;

export const BaseButtonStyle = css`
text-transform: uppercase;
padding: 1rem 4rem;
background-color: white;
letter-spacing: 2px;
font-size: .7rem;
border: none;
color: purple;
font-weight: 600;
border-radius: 9rem;

&:hover{
  background-color: #f5f5f5;
}

`

export const Button = styled.button`
${BaseButtonStyle}
`;

export default GlobalStyle;
