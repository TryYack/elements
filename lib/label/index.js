"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const LabelText = styled_components_1.default.div `
  font-size: 10px;
  font-weight: ${props => props.bold ? "900" : "700"};
  color: ${props => props.bold ? "#ACB5BD" : "#CFD4D9"};
  text-transform: uppercase;
`;
exports.Label = (props) => {
    const styles = props.style ? props.style : {};
    return (React.createElement(LabelText, { style: styles, bold: !!props.bold }, props.children));
};
//# sourceMappingURL=index.js.map