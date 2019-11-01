"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const CloseOutlined_1 = require("@material-ui/icons/CloseOutlined");
const Container = styled_components_1.default.div `
  background-color: #05A6FF;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const Padding = styled_components_1.default.div `
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const ActionText = styled_components_1.default.span `
  color: white;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
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
`;
const Text = styled_components_1.default.span `
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
exports.Notification = (props) => {
    return (React.createElement(Container, null,
        React.createElement(Padding, null,
            React.createElement(Text, null, props.text),
            props.actionText &&
                React.createElement(ActionText, { onClick: props.onActionClick }, props.actionText),
            props.onDismissClick &&
                React.createElement(Icon, null,
                    React.createElement(CloseOutlined_1.default, { htmlColor: "white", fontSize: "default", onClick: props.onDismissClick })))));
};
//# sourceMappingURL=index.js.map