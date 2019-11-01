"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.default.div `
  background: white;
  width: 30px;
  position: relative;
  height: 19px;
  border: 1px solid #F1F3F5;
  box-shadow: 0px 0px 16px -9px rgba(0,0,0,0.75);
  cursor: pointer;
  overflow: hidden;
  border-radius: 100px;
`;
const Circle = styled_components_1.default.div `
  position: absolute;
  top: 2px;
  left: ${props => props.on ? "13px" : "2px"};
  background-color: ${props => props.on ? "#007af5" : "#e8ecee"};
  border-radius: 50%;
  transition: left 0.5s, background-color 0.5s;
  width: 15px;
  height: 15px;
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