"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const avatar_1 = require("../avatar");
const Container = styled_components_1.default.div `
  width: 100%;
  background: ${props => (props.active ? "#f8f9fa" : "transparent")};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #edf0f2;
  cursor: pointer;
`;
const Content = styled_components_1.default.div `
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Flex = styled_components_1.default.div `
  flex: 1;
`;
const ContainerPadding = styled_components_1.default.div `
  flex: 1;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;
exports.User = (props) => {
    const [hover, setHover] = React.useState(false);
    return (React.createElement(Container, { active: props.active, onClick: props.onClick, onMouseOver: () => setHover(true), onMouseLeave: () => setHover(false) },
        React.createElement(ContainerPadding, null,
            React.createElement(avatar_1.Avatar, { size: "medium", image: props.image, title: props.name }),
            React.createElement(Content, null,
                React.createElement("div", { className: "color-d5 regular p" }, props.name),
                React.createElement("div", { className: "color-d0 regular small" }, props.label)),
            React.createElement(Flex, null),
            hover &&
                React.createElement(React.Fragment, null, props.children))));
};
//# sourceMappingURL=index.js.map