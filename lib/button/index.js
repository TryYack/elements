"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var colors_1 = require("../colors");
var Icon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ",
    ";\n"])), function (props) {
    if (props.jumbo)
        return "0px 0px 0px 30px";
    return "0px 0px 0px 15px";
});
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: max-content;\n  position: relative;\n  max-width: ", ";\n"], ["\n  width: max-content;\n  position: relative;\n  max-width: ",
    ";\n"])), function (props) {
    if (props.jumbo)
        return "300px";
    return "150px";
});
var Inner = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  position: relative;\n  transition: background-color 0.15s, color 0.15s, border 0.15s;\n  cursor: pointer;\n  height: ", ";\n  border-radius: ", ";\n  border-width: 2px;\n  border-style: solid;\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &.active {\n    background-color: ", " !important;\n    color: ", " !important;\n    border-color: ", " !important;\n  }\n"], ["\n  box-sizing: border-box;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  position: relative;\n  transition: background-color 0.15s, color 0.15s, border 0.15s;\n  cursor: pointer;\n  height: ",
    ";\n  border-radius: ",
    ";\n  border-width: 2px;\n  border-style: solid;\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &.active {\n    background-color: ", " !important;\n    color: ", " !important;\n    border-color: ", " !important;\n  }\n"])), function (props) {
    if (props.jumbo)
        return "80px";
    return "40px";
}, function (props) {
    if (props.jumbo)
        return "10px";
    return "6px";
}, function (props) { return colors_1.COLORS[props.theme].BASE.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].BASE.COLOR; }, function (props) { return colors_1.COLORS[props.theme].BASE.BORDER_COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.BORDER_COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.BORDER_COLOR; });
var Text = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  padding: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  margin: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  padding: ",
    ";\n  font-weight: ",
    ";\n  font-size: ",
    ";\n"])), function (props) {
    if (!props.jumbo && props.icon)
        return "0px 15px 0px 7px";
    if (props.jumbo && props.icon)
        return "0px 30px 0px 15px";
    if (props.jumbo && !props.icon)
        return "0px 30px 0px 30px";
    return "0px 15px 0px 15px";
}, function (props) {
    if (props.jumbo)
        return "500";
    return "500";
}, function (props) {
    if (props.jumbo)
        return "24px";
    return "12px";
});
/**
 * Button component.
 */
exports.Button = function (props) {
    var _a = React.useState(false), down = _a[0], setDown = _a[1];
    var theme = props.theme ? props.theme : "default";
    var disabled = props.disabled || false;
    return (React.createElement(Container, { jumbo: props.jumbo, onMouseDown: function () { return setDown(true); }, onMouseUp: function () { return setDown(false); } },
        React.createElement(Inner, { disabled: disabled, outline: props.outline, jumbo: props.jumbo, theme: theme, className: down ? "active" : "" },
            props.icon && (React.createElement(Icon, { jumbo: props.jumbo }, props.icon)),
            React.createElement(Text, { icon: props.icon, theme: theme, jumbo: props.jumbo, onClick: props.onClick }, props.text))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map