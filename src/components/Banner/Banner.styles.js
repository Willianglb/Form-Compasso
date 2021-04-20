import styled from "styled-components"

export const Contener = styled.div`
background: black;
border: 2px solid palevioletred;
border-radius: 3px;

  @media(min-width: 600px){

  }

  .slick-dots {
      position:${props => props.theme.position.absolute};
      bottom: ${props => props.theme.bottom.bottomFive};
  }
  .slick-dots li button:before {
      font-size:${props => props.theme.fontSizes.fontSizeEighteen};
  }

`;

export const Img = styled.img`
max-width: ${props => props.theme.maxWidth.maxWidthHundred};
height: ${props => props.theme.height.heightForty};
`;

