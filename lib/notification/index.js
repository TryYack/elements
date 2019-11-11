"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_feather_1 = require("react-feather");
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
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }
`;
const Text = styled_components_1.default.span `
  color: white;
  font-size: 14px;
  font-weight: 400;
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
                React.createElement(Icon, { onClick: props.onDismissClick },
                    React.createElement(react_feather_1.X, { color: "white", size: "20", thickness: "1.5" })))));
};
//# sourceMappingURL=index.js.map