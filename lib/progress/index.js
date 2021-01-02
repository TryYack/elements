"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.default.div `
  position: relative;
  overflow: hidden;
  width: 100%;
`;
const Inner = styled_components_1.default.div `
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const Bar = styled_components_1.default.div `
  flex: 1;
  border-radius: 5px;
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: ${props => props.color}
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
`;
const Text = styled_components_1.default.div `
  font-weight: 400;
  font-style: normal;
  color: #404C5A;
  display: inline-block;
  font-size: 13px;
  position: relative;
  z-index: 2;
  flex: 2;
  padding: 5px;
`;
const Percentage = styled_components_1.default.div `
  font-weight: 700;
  font-style: normal;
  color: #404C5A;
  display: inline-block;
  font-size: 10px;
  position: relative;
  z-index: 2;
  padding: 5px;
`;
const ProgressComponent = (props) => {
    return (React.createElement(Container, null,
        React.createElement(Bar, { percentage: props.percentage, color: props.color }),
        React.createElement(Inner, null, props.labels &&
            React.createElement(React.Fragment, null,
                React.createElement(Text, null, props.text),
                React.createElement(Percentage, null,
                    props.percentage,
                    "%")))));
};
ProgressComponent.defaultProps = {
    color: "#F8F9FA",
};
exports.Progress = React.memo((props) => React.createElement(ProgressComponent, Object.assign({}, props)));
//# sourceMappingURL=index.js.map