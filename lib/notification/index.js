"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_feather_1 = require("react-feather");
const Container = styled_components_1.default.div `
  background-color: #e3f5ff;
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
  color: #05A6FF;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
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
  color: #05A6FF;
  font-size: 12px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
exports.Notification = (props) => {
    let [notificationMessage, setNotificationMessage] = React.useState("");
    React.useEffect(() => {
        if (props.text != notificationMessage) {
            // update our error message
            setNotificationMessage(props.text);
        }
    }, [props.text]);
    return (React.createElement(Container, null,
        React.createElement(Padding, null,
            React.createElement(Text, { onClick: () => props.onDismiss ? props.onDismiss() : null }, notificationMessage),
            props.actionText &&
                React.createElement(ActionText, { onClick: props.onActionClick }, props.actionText)),
        props.onDismissIconClick &&
            React.createElement(Icon, { onClick: props.onDismissIconClick },
                React.createElement(react_feather_1.X, { color: "#05A6FF", size: "20", thickness: "1.5" }))));
};
//# sourceMappingURL=index.js.map