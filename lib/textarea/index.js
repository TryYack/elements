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
const Field = styled_components_1.default.textarea `
  border: none;
  flex: 1;
  outline: none;
  background: transparent;
  color: #495057;
  font-size: ${props => {
    switch (props.textareaSize) {
        case "large":
            return "24px";
        default:
            return "14px";
    }
}};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 1px solid #ebedef;
  border-radius: 10px;
  resize: none;
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;
exports.Textarea = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null, props.label),
        React.createElement(Field, Object.assign({}, props))));
};
exports.Textarea.defaultProps = {
    textareaSize: "default",
    className: "",
};
//# sourceMappingURL=index.js.map