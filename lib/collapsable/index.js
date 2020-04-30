"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_feather_1 = require("react-feather");
const CollapsableContainer = styled_components_1.default.div `
  width: 100%;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  &.open {
    max-height: 500px;
    overflow: visible;
    transition: max-height 0.25s ease-in;
  }
`;
const Container = styled_components_1.default.div `
  width: 100%;
`;
exports.Collapsable = (props) => {
    const [open, setOpen] = React.useState(false);
    const containerClasses = props.className ? props.className + " row w-100" : "row w-100";
    return (React.createElement(Container, null,
        React.createElement("div", { className: containerClasses },
            React.createElement("div", { className: "p regular color-d2 flexer" }, props.title),
            open &&
                React.createElement(react_feather_1.ChevronUp, { color: "#acb5bd", size: "16", thickness: "3", className: "button", onClick: () => setOpen(!open) }),
            !open &&
                React.createElement(react_feather_1.ChevronDown, { color: "#acb5bd", size: "16", thickness: "3", className: "button", onClick: () => setOpen(!open) })),
        React.createElement(CollapsableContainer, { className: open ? "open" : "" }, props.children)));
};
exports.Collapsable.defaultProps = {
    className: "",
};
//# sourceMappingURL=index.js.map