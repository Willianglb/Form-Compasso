import React from "react";
import { GridColumn, GridRow } from "semantic-ui-react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFF",
    cinza: "#707070",
    preto:"#000000",
    azul: "blue",
    verde: "green",
    GrayishCyan: "#a9c5bc",
    red:"#ff0000",
    rose: "#ff6666",
  },
  fonts: {
    muli:"muli",
    regular:"regular",
    lato:"lato",
    avenir: "avenir"
  },
  fontSizes: {
    fontSizeNano: "12px",
    fontSizeMedium: "24px",
    fontSizeLarge: "32px",
    fontSizeThirty:"30px",
    fontSizeMicro:"14px",
    fontSizeTiny:"16px",
    fontSizeSmall:"20px",
    fontSizeEighteen:"18px",
    fontSizeTwoFive: "25px"

  },
  borderRadius: {
    borderRadiusFifteen: "15px",
    borderRadiusOneHundred:'100px',
    borderNone:'none',
  },
  display: {
    displayFlex:"flex",
    displayInlineGrid: "inline-grid",
    displayGrid: "grid",
    displayBlock: "block",
    displayNone: "none"
  },
  justifyContent: {
    justifyContentCenter: "center",

  },
  alignItems: {
    alignItemscenter: "center",
  },
  opacity: {
    opacityOne: "1",
  },
  position: {
    relative: "relative",
    absolute:"absolute",
  },
  width: {
    auto: "auto",
    hundred: "100%",
    thirty: "30px",
    forty: "40px",
    fifty: "42%",
    thirtyFive:"35%",
    twoHundred:"200px",
    widthHundred: "1000px",
    widthThreeHundred: "350px",
    twentTwo:"22px",
  },
  left: {
    leftZero: "0px",
    leftTwenty: "20px",
    leftSOne: "50%",
    leftSeventy: "70%"

  },
  height: {
    heightSelf: "auto",
    heightForty: "400px"
  },
  maxWidth: {
    maxWidthAuto: "auto",
    maxWidthThirty: "30%",
    maxWidthForty: "40%",
    maxWidthFifty: "50%",
    maxWidthHundred: "100%",
  },
  bottom: {
    bottomFive: "5%",
  },
  textAlign: {
    textAlignLeft: "left",
  },
  letterSpacing: {
    letterSpacingZero: "0px",
  },
  padding: {
    paddingFive: "5px",
    paddingTen: "10px",
    paddingTwo: "2px",
  },
  textDecoration: {
    textDecorationNone: "none"
  },
  lineHeight: {
    lineHeightThree: "3",
    lineHeighOne: "1.5",
    lineHeighTwo: "2"
  },
  top: {
    topTwenty: "20%",
    topHundred: "100px",
    topTen: "-10%",
    topSeven: "-7%",
    eight:"-8%",
    topOne: "6%",
    topEleven: "11%",
    topTwelve: "12%",
    topNinety: "90px",
    topFifteen: "15%",
    topFourteen: "14.5%",
    topTwo: "2%",
    topNinet: "90%",
    topSFive: "62.5%",
    topFifty:"-300px",
  },
  margin: {
    marginSmall: "1em",
    marginTwenty: "20px",
    marginFortyFive:'45%',
  
  },
  flexDirection: {
    flexDirectionColumn: "column",
  },
  marginLeft: {
    marginLeftTen: "10px",
    marginLeftThree: "3px",
    marginLeftThirtyFive: "35%"

  },
  marginTop: {
    marginTopFour: "4px",
    marginTopEight: "8px",
    marginTopTwo: "2%"
  },
  marginRight: {
    marginRightThree: "3px",
  },
  cursor: {
    cursorPointer: "pointer",
  },
  borderTop: {
    borderTopWhite: "white",
  },
  borderLeft: {
    borderLeftWhite: "white",
  },
  borderRight: {
    borderRightWhite: "white",
  },
  fontWeight: {
    bold: "bold",
  },
  boxShadow: {
    boxShadow: "0px 3px 6px #00000029",
  },
  GridColumn: {
    gridCollumn1: 1,
    gridCollumn2: 2,
  },
  GridRow: {
    gridRow1: 1,
    gridRow2: 2,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;