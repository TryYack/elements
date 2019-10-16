"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var avatar_1 = require("../avatar");
var icons_1 = require("@material-ui/icons");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding-top: 4px;\n  padding-bottom: 4px;\n  display: flex;\n"], ["\n  background: ", ";\n  padding-top: 4px;\n  padding-bottom: 4px;\n  display: flex;\n"])), function (props) { return props.active ? "#0c1828" : "transparent"; });
var Badge = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #007af5;\n"], ["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #007af5;\n"])));
var Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  white-space: nowrap;\n  width: max-content;\n"], ["\n  overflow: hidden;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  white-space: nowrap;\n  width: max-content;\n"])), function (props) { return props.active ? "white" : "#475669"; });
var Excerpt = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 11px;\n  color: #475669;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1;\n  margin-top: 4px;\n"], ["\n  font-size: 11px;\n  color: #475669;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  flex: 1;\n  margin-top: 4px;\n"])));
var Contents = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow: hidden;\n  align-items: stretch;\n  margin-right: 25px;\n"], ["\n  overflow: hidden;\n  align-items: stretch;\n  margin-right: 25px;\n"])));
exports.Room = function (props) {
    return (React.createElement(Container, { onClick: props.onClick ? props.onClick : null, unread: props.unread, active: props.active },
        React.createElement(avatar_1.Avatar, { dark: true, size: "medium", image: props.image, title: props.title, className: "mr-10 ml-25", style: { opacity: props.active || props.unread ? 1 : 0.5 } }),
        React.createElement(Contents, { className: "column flexer" },
            React.createElement("div", { className: "row flexer" },
                React.createElement(Title, { active: props.active || (props.unread != 0) }, props.title),
                !props.public && !props.private &&
                    React.createElement(icons_1.LockOutlined, { htmlColor: "#475669", fontSize: "small", className: "ml-5" }),
                React.createElement("div", { className: "flexer" }),
                props.unread && React.createElement(Badge, null)),
            props.excerpt &&
                React.createElement(Excerpt, null, props.excerpt))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map