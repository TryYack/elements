"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
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
                React.createElement("svg", { onClick: () => setOpen(!open), className: "button", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", style: { fill: "#acb5bd", transform: ";-ms-filter:" } },
                    React.createElement("path", { d: "M12 6.879L4.939 13.939 7.061 16.061 12 11.121 16.939 16.061 19.061 13.939z" })),
            !open &&
                React.createElement("svg", { onClick: () => setOpen(!open), className: "button", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", style: { fill: "#acb5bd", transform: ";-ms-filter:" } },
                    React.createElement("path", { d: "M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z" }))),
        React.createElement(CollapsableContainer, { className: open ? "open" : "" }, props.children)));
};
exports.Collapsable.defaultProps = {
    className: "",
};
//# sourceMappingURL=index.js.map