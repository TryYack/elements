"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var colors_1 = require("../colors");
var Container = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  position: relative;\n  transition: background-color 0.15s, color 0.15s, border 0.15s;\n  cursor: pointer;\n  max-width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  border-width: ", ";\n  border-style: solid;\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &.active {\n    background-color: ", " !important;\n    color: ", " !important;\n    border-color: ", " !important;\n  }\n\n  &:disabled {\n    opacity: 0.5 !important;\n  }\n"], ["\n  box-sizing: border-box;\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  background-size: cover;\n  position: relative;\n  transition: background-color 0.15s, color 0.15s, border 0.15s;\n  cursor: pointer;\n  max-width: ",
    ";\n  height: ",
    ";\n  border-radius: ",
    ";\n  border-width: ",
    ";\n  border-style: solid;\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &.active {\n    background-color: ", " !important;\n    color: ", " !important;\n    border-color: ", " !important;\n  }\n\n  &:disabled {\n    opacity: 0.5 !important;\n  }\n"])), function (props) {
    switch (props.size) {
        case "large":
            return "300px";
        case "small":
            return "fit-content";
        default:
            return "150px";
    }
}, function (props) {
    switch (props.size) {
        case "large":
            return "80px";
        case "small":
            return "30px";
        default:
            return "40px";
    }
}, function (props) {
    switch (props.size) {
        case "large":
            return "10px";
        case "small":
            return "6px";
        default:
            return "8px";
    }
}, function (props) {
    switch (props.size) {
        case "large":
            return "2px";
        case "small":
            return "1px";
        default:
            return "2px";
    }
}, function (props) { return colors_1.COLORS[props.theme].BASE.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].BASE.COLOR; }, function (props) { return colors_1.COLORS[props.theme].BASE.BORDER_COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.COLOR; }, function (props) { return colors_1.COLORS[props.theme].HOVER.BORDER_COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.BACKGROUND_COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.COLOR; }, function (props) { return colors_1.COLORS[props.theme].ACTIVE.BORDER_COLOR; });
var Text = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  padding: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  margin: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  padding: ",
    ";\n  font-weight: ",
    ";\n  font-size: ",
    ";\n"])), function (props) {
    if (props.icon) {
        switch (props.size) {
            case "large":
                return "0px 30px 0px 15px";
            case "small":
                return "0px 10px 0px 5px";
            default:
                return "0px 15px 0px 8px";
        }
    }
    else {
        switch (props.size) {
            case "large":
                return "0px 30px 0px 30px";
            case "small":
                return "0px 10px 0px 10px";
            default:
                return "0px 15px 0px 15px";
        }
    }
}, function (props) {
    switch (props.size) {
        case "large":
            return "500";
        case "small":
            return "500";
        default:
            return "500";
    }
}, function (props) {
    switch (props.size) {
        case "large":
            return "24px";
        case "small":
            return "11px";
        default:
            return "14px";
    }
});
var Icon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ",
    ";\n"])), function (props) {
    if (!props.text)
        return "0px 10px 0px 10px";
    if (!props.text && props.size)
        return "0px 20px 0px 20px";
    if (props.size)
        return "0px 0px 0px 30px";
    return "0px 0px 0px 15px";
});
/**
 * Button component.
 */
exports.Button = function (props) {
    var _a = React.useState(false), down = _a[0], setDown = _a[1];
    var theme = props.theme ? props.theme : "default";
    var className = down ? "active " + props.className : props.className;
    return (React.createElement(Container, __assign({ size: props.size, theme: theme, className: className, onClick: props.onClick, onMouseDown: function () { return setDown(true); }, onMouseUp: function () { return setDown(false); } }, props),
        props.icon && (React.createElement(Icon, { text: props.text, size: props.size }, props.icon)),
        props.text && (React.createElement(Text, { icon: props.icon, theme: theme, size: props.size }, props.text))));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map