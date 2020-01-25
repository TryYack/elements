"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Label = styled_components_1.default.div `
  font-size: 10px;
  font-weight: 700;
  color: #626d7a;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
const InputField = styled_components_1.default.input `
  border: none;
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  outline: none;
  background: transparent;
  color: #495057;
  font-size: ${props => {
    switch (props.inputSize) {
        case "large":
            return "24px";
        default:
            return "14px";
    }
}};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 1px solid #edf0f2;
  border-radius: 10px;
  resize: none;
  display: block;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;
exports.Input = (props) => {
    return (React.createElement(React.Fragment, null,
        props.label &&
            React.createElement(Label, null, props.label),
        React.createElement(InputField, Object.assign({}, props, { label: props.label || "" }))));
};
exports.Input.defaultProps = {
    inputSize: "default",
    className: "",
};
//# sourceMappingURL=index.js.map