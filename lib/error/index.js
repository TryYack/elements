"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const themes_1 = require("./themes");
const Container = styled_components_1.default.div `
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  background: ${props => themes_1.THEMES[props.theme].BACKGROUND_COLOR};
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.1s linear;
  z-index: 10000;
`;
const Text = styled_components_1.default.div `
  color: ${props => themes_1.THEMES[props.theme].COLOR};
  font-size: ${props => themes_1.THEMES[props.theme].FONT_SIZE}px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
exports.Error = (props) => {
    if (!props.message)
        return null;
    const theme = props.theme ? props.theme : "default";
    const [errorMessage, setErrorMessage] = React.useState("");
    React.useEffect(() => {
        if (props.message != errorMessage) {
            // update our error message
            setErrorMessage(props.message);
        }
    }, [props.message]);
    return (React.createElement(Container, { theme: theme, onClick: () => props.onDismiss ? props.onDismiss() : null },
        React.createElement(Text, { theme: theme }, errorMessage)));
};
//# sourceMappingURL=index.js.map