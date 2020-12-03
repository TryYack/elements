"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const themes_1 = require("./themes");
const Container = styled_components_1.default.div `
  background-color: ${props => themes_1.THEMES[props.theme].BACKGROUND_COLOR};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  height: 30px;
`;
const Padding = styled_components_1.default.div `
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  text-align: center;
`;
const ActionText = styled_components_1.default.span `
  color: ${props => themes_1.THEMES[props.theme].COLOR};
  font-size: ${props => themes_1.THEMES[props.theme].FONT_SIZE}px;
  font-weight: 800;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: underline;
`;
const Icon = styled_components_1.default.span `
  margin-left: auto;
  height: 22px;
  width: 22px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }
`;
const Text = styled_components_1.default.span `
  color: ${props => themes_1.THEMES[props.theme].COLOR};
  font-size: ${props => themes_1.THEMES[props.theme].FONT_SIZE}px;
  font-weight: 400;
`;
exports.Notification = (props) => {
    if (!props.text)
        return null;
    const [notificationMessage, setNotificationMessage] = React.useState("");
    const theme = props.theme ? props.theme : "default";
    React.useEffect(() => {
        if (props.text != notificationMessage) {
            // update our error message
            setNotificationMessage(props.text);
        }
    }, [props.text]);
    return (React.createElement(Container, { theme: theme },
        React.createElement(Padding, null,
            React.createElement(Text, { theme: theme, onClick: () => props.onDismiss ? props.onDismiss() : null }, notificationMessage),
            props.actionText &&
                React.createElement(ActionText, { theme: theme, onClick: props.onActionClick }, props.actionText)),
        props.onDismissIconClick &&
            React.createElement(Icon, { theme: theme, onClick: props.onDismissIconClick },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: themes_1.THEMES[theme].ICON_SIZE, height: themes_1.THEMES[theme].ICON_SIZE, viewBox: "0 0 24 24", style: { fill: themes_1.THEMES[theme].COLOR, transform: ";-ms-filter:" } },
                    React.createElement("path", { d: "M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" })))));
};
//# sourceMappingURL=index.js.map