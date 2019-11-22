"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.default.div `
  background: white;
  width: 35px !important;
  position: relative;
  height: 22px !important;
  border: 1px solid #F1F3F5;
  box-shadow: 0px 0px 16px -9px rgba(0,0,0,0.75);
  cursor: pointer;
  overflow: hidden;
  border-radius: 35px !important;
`;
const Circle = styled_components_1.default.div `
  position: absolute;
  top: 3px !important;
  left: ${props => props.on ? "16px" : "3px"} !important;
  background-color: ${props => props.on ? "#007af5" : "#CFD6DD"};
  border-radius: 50%;
  transition: left 0.5s, background-color 0.5s;
  width: 16px !important;
  height: 16px !important;
`;
exports.Toggle = (props) => {
    const [on, setOn] = React.useState(props.on);
    React.useEffect(() => setOn(props.on), [props.on]);
    return (React.createElement(Container, { onClick: () => {
            props.onChange(!on);
            setOn(!on);
        } },
        React.createElement(Circle, { on: on })));
};
//# sourceMappingURL=index.js.map