"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var chroma = require("chroma-js");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n"], ["\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n"])));
var Inner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  display: inline-block;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  z-index: 1;\n  background-size: cover;\n  background-position: center center;\n  background-image: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  transition: opacity 0.25s;\n  opacity: ", ";\n\n  &.overlap-right {\n    margin-right: -7px;\n  }\n\n  &.outline {\n    border: 1.5px solid ", ";\n    box-shadow: 0px 0px 0px 1.5px ", ";\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  display: inline-block;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  z-index: 1;\n  background-size: cover;\n  background-position: center center;\n  background-image: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  transition: opacity 0.25s;\n  opacity: ", ";\n\n  &.overlap-right {\n    margin-right: -7px;\n  }\n\n  &.outline {\n    border: 1.5px solid ", ";\n    box-shadow: 0px 0px 0px 1.5px ", ";\n  }\n"])), function (props) { return props.width; }, function (props) { return props.height; }, function (props) { return props.borderRadius; }, function (props) { return props.image; }, function (props) { return props.background; }, function (props) { return props.over && props.onClick ? 0.75 : 1; }, function (props) { return props.outlineInnerColor; }, function (props) { return props.outlineOuterColor; });
var Text = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  color: ", ";\n  position: relative;\n  top: 0px;\n  margin: 0px;\n  padding: 0px;\n  outline: none;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  text-decoration: none;\n  font-size: ", "px;\n"], ["\n  font-weight: 500;\n  color: ", ";\n  position: relative;\n  top: 0px;\n  margin: 0px;\n  padding: 0px;\n  outline: none;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  text-decoration: none;\n  font-size: ",
    "px;\n"])), function (props) { return props.color || "white"; }, function (props) {
    if (props.size === "very-small")
        return "6";
    if (props.size === "small")
        return "8";
    if (props.size === "small-medium")
        return "10";
    if (props.size === "medium")
        return "12";
    if (props.size === "medium-large")
        return "14";
    if (props.size === "large")
        return "16";
    if (props.size === "x-large")
        return "24";
    if (props.size === "xx-large")
        return "32";
    if (props.size === "xxx-large")
        return "40";
    return "12";
});
var Delete = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  top: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  position: absolute;\n  overflow: hidden;\n  background-color: #e23f62;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  border: 1px solid white;\n  z-index: 1;\n  transition: background-color 0.25s;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\n  &:hover {\n    background-color: #ce3354;\n    transition: background-color 0.25s;\n  }\n"], ["\n  top: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  position: absolute;\n  overflow: hidden;\n  background-color: #e23f62;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  border: 1px solid white;\n  z-index: 1;\n  transition: background-color 0.25s;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\n  &:hover {\n    background-color: #ce3354;\n    transition: background-color 0.25s;\n  }\n"])));
var Edit = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  cursor: pointer;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  cursor: pointer;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Presence = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  width: 11px;\n  height: 11px;\n  border-radius: 10px;\n  z-index: 2;\n  background-color: ", ";\n  box-sizing: border-box;\n  border: 2px solid ", ";\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  width: 11px;\n  height: 11px;\n  border-radius: 10px;\n  z-index: 2;\n  background-color: ", ";\n  box-sizing: border-box;\n  border: 2px solid ", ";\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])), function (props) { return (props.online ? "#36C5AB" : "#FD9A00"); }, function (props) { return (props.dark ? "#08111d" : "#ffffff"); });
var Badge = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: #007af5;\n  z-index: 2;\n  border: 2px solid ", ";\n"], ["\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: #007af5;\n  z-index: 2;\n  border: 2px solid ", ";\n"])), function (props) { return (props.dark ? "#08111d" : "#ffffff"); });
/**
 * Avatar component. Displays a circle or square container for users,
 * channels, or anything else
 */
exports.Avatar = function (props) {
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    var _c = react_1.useState(false), online = _c[0], setOnline = _c[1];
    var _d = react_1.useState(false), offline = _d[0], setOffline = _d[1];
    var image = props.image ? "url(" + props.image + ")" : "";
    var background = props.dark
        ? "#0c1828"
        : props.color
            ? chroma(props.color)
                .desaturate(2)
                .brighten(2.25)
                .toString()
            : "#f1f3f5";
    var color = props.color ? props.color : props.textColor ? props.textColor : "#007af5";
    var className = props.outlineInnerColor || props.outlineOuterColor ? props.className + " outline" : props.className;
    var width = 35;
    var height = 35;
    var borderRadius = 35;
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    react_1.useEffect(function () {
        var snapshot = new Date().getTime();
        // Only process this if both the heart prop 
        if (props.heartbeat) {
            setInterval(function () {
                // is present and the component is mounted
                if (mounted) {
                    var ticker = new Date().getTime();
                    var difference = ticker - snapshot;
                    if (difference < 30000) {
                        setOnline(true);
                        setOffline(false);
                    }
                    if (difference > 30000) {
                        setOnline(false);
                        setOffline(false);
                    }
                    if (difference > 60000) {
                        setOnline(false);
                        setOffline(true);
                    }
                }
            }, 1000);
        }
    }, [props.heartbeat]);
    var generateInitials = function (str) {
        return str.split(" ")
            .map(function (part, _) {
            return part[0] ? part[0].toUpperCase() : "";
        })
            .splice(0, 2)
            .toString()
            .replace(",", "")
            .trim();
    };
    switch (props.size) {
        case "very-small":
            width = 15;
            height = 15;
            borderRadius = props.circle ? 200 : 5;
            break;
        case "small":
            width = 20;
            height = 20;
            borderRadius = props.circle ? 200 : 6;
            break;
        case "small-medium":
            width = 25;
            height = 25;
            borderRadius = props.circle ? 200 : 7;
            break;
        case "medium":
            width = 30;
            height = 30;
            borderRadius = props.circle ? 200 : 8;
            break;
        case "medium-large":
            width = 35;
            height = 35;
            borderRadius = props.circle ? 200 : 9;
            break;
        case "large":
            width = 40;
            height = 40;
            borderRadius = props.circle ? 200 : 10;
            break;
        case "x-large":
            width = 80;
            height = 80;
            borderRadius = props.circle ? 200 : 16;
            break;
        case "xx-large":
            width = 120;
            height = 120;
            borderRadius = props.circle ? 200 : 18;
            break;
        case "xxx-large":
            width = 180;
            height = 180;
            borderRadius = props.circle ? 200 : 20;
            break;
        default:
            width = 30;
            height = 30;
            borderRadius = props.circle ? 200 : 8;
    }
    return (React.createElement(Container, { onMouseEnter: function () { return setOver(true); }, onMouseLeave: function () { return setOver(false); } },
        over && props.onEditClick && props.editIcon &&
            React.createElement(Edit, { onClick: props.onEditClick }, props.editIcon),
        over && props.onDeleteClick && props.deleteIcon &&
            React.createElement(Delete, { onClick: props.onDeleteClick }, props.deleteIcon),
        props.heartbeat && !offline && !props.badge &&
            React.createElement(Presence, { online: online, dark: props.dark || false }),
        props.badge && React.createElement(Badge, { dark: props.dark || false }),
        React.createElement(Inner, { over: over, onClick: props.onClick, width: width, height: height, borderRadius: borderRadius, className: className, image: image, background: background, outlineInnerColor: props.outlineInnerColor ? props.outlineInnerColor : "transparent", outlineOuterColor: props.outlineOuterColor ? props.outlineOuterColor : "transparent", style: props.style },
            props.children,
            ((!props.children && !props.image && props.title && !props.onEditClick) ||
                (!props.children && !props.image && props.title && props.onEditClick && !over)) &&
                React.createElement(Text, { color: color, size: props.size, className: "text" }, generateInitials(props.title)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=index.js.map