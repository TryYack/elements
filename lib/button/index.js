"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  position: relative;\n  display: inline-block;\n"], ["\n  width: ",
    "px;\n  position: relative;\n  display: inline-block;\n"])), function (props) {
    if (props.size === "small")
        return "150";
    if (props.size === "medium")
        return "200";
    if (props.size === "large")
        return "250";
    return "200";
});
var Inner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #007af5;\n  color: white;\n  font-size: 25px;\n  font-weight: 600;\n  padding: ", ";\n  border-radius: 5px;\n  transition: background-color 0.25s, color 0.25s;\n  cursor: pointer;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: ", "px;\n\n  &:hover {\n    background-color: #0f081f;\n    color: #007af5;\n  }\n\n  &:first-child {\n    margin-right: 5px;\n  }\n"], ["\n  background-color: #007af5;\n  color: white;\n  font-size: 25px;\n  font-weight: 600;\n  padding: ",
    ";\n  border-radius: 5px;\n  transition: background-color 0.25s, color 0.25s;\n  cursor: pointer;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: ",
    "px;\n\n  &:hover {\n    background-color: #0f081f;\n    color: #007af5;\n  }\n\n  &:first-child {\n    margin-right: 5px;\n  }\n"])), function (props) {
    if (props.size === "small")
        return "10px 20px 10px 20px";
    if (props.size === "medium")
        return "15px 25px 15px 25px";
    if (props.size === "large")
        return "20px 30px 20px 30px";
    return "15px 25px 15px 25px";
}, function (props) {
    if (props.size === "small")
        return "8";
    if (props.size === "medium")
        return "12";
    if (props.size === "large")
        return "16";
    return "12";
});
/**
 * Button component.
 */
exports.Button = function (props) {
    return (React.createElement(Container, { size: props.size },
        React.createElement(Inner, { className: "inner", size: props.size, onClick: props.onClick }, props.text)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map