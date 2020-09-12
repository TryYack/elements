"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Label = styled_components_1.default.div `
  font-size: 10px;
  font-weight: 700;
  color: #8895a7;
  text-transform: uppercase;
  padding-bottom: 5px;
`;
const InputField = styled_components_1.default.input `
  border: none;
  flex: 1;
  outline: none;
  background: white;
  color: #343a40;
  font-size: ${props => {
    switch (props.inputSize) {
        case "large":
            return "24px";
        default:
            return "13px";
    }
}};
  font-weight: 500;
  padding: 10px;
  width: 100%;
  border: 1px solid #edf0f2;
  border: 4px solid #f1f3f5;
  border-radius: 7px;
  resize: none;
  display: block;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.02);

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 3px #cfd4da;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;
exports.Input = (props) => {
    return (React.createElement("div", { className: "flexer w-100" },
        props.label &&
            React.createElement(Label, null, props.label),
        React.createElement(InputField, Object.assign({}, props, { label: props.label || "" }))));
};
exports.Input.defaultProps = {
    inputSize: "default",
    className: "",
};
//# sourceMappingURL=index.js.map