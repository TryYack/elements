"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_feather_1 = require("react-feather");
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
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
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
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
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
                React.createElement(react_feather_1.X, { color: themes_1.THEMES[theme].COLOR, size: themes_1.THEMES[theme].ICON_SIZE, thickness: "1.5" }))));
};
//# sourceMappingURL=index.js.map