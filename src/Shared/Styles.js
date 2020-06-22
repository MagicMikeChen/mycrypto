const theme = "dark";
// const theme = "light";
export const lightTheme = theme === "light";

export const color = lightTheme ? "white" : "##ff00f7";
export const color2 = lightTheme ? "white" : "#2b2b2b";
export const color3 = lightTheme ? "#119100" : "#00db12";

if (lightTheme) {
  document.body.style.background = "#e8e8e8";
  document.body.style.color = "#171717";
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #ff0a0a`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? "#e8e8e8" : "#d19d00"
}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #d1d1d1`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";
