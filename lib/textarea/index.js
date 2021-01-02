"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Label = styled_components_1.default.div `
  font-size: 10px;
  font-weight: 700;
  color: #CFD4D9;
  text-transform: uppercase;
  padding-bottom: 5px;
`;
const Field = styled_components_1.default.textarea `
  border: none;
  flex: 1;
  outline: none;
  background: white;
  color: #343a40;
  font-size: ${props => {
    switch (props.textareaSize) {
        case "large":
            return "24px";
        default:
            return "13px";
    }
}};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 3px solid #F0F3F5;
  border-radius: 7px;
  resize: none;
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.02);
  transition: border .2s;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    border: 2px solid #F0F3F5;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    /*box-shadow: inset 0px 0px 0px 3px #F0F3F5;*/
    border: 3px solid #DEE2E5;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;
exports.Textarea = (props) => {
    return (React.createElement("div", { className: "flexer w-100" },
        React.createElement(Label, null, props.label),
        React.createElement(Field, Object.assign({}, props))));
};
exports.Textarea.defaultProps = {
    textareaSize: "default",
    className: "",
};
//# sourceMappingURL=index.js.map