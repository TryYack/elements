"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var avatar_1 = require("../avatar");
var Name = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #483545;\n  font-size: 14px;\n  font-weight: 500;\n"], ["\n  color: #483545;\n  font-size: 14px;\n  font-weight: 500;\n"])));
var Label = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 500;\n"], ["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 500;\n"])));
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  cursor: pointer;\n"], ["\n  width: 100%;\n  height: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  cursor: pointer;\n"])), function (props) { return (props.active ? "#f8f9fa" : "transparent"); });
exports.User = function (props) {
    var _a = React.useState(false), hover = _a[0], setHover = _a[1];
    // prettier-ignore
    return (React.createElement(Container, { active: props.active, onClick: props.onClick, onMouseOver: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } },
        React.createElement(avatar_1.Avatar, { className: "small", image: props.image, title: props.name }),
        React.createElement("div", { className: "pl-10 column" },
            React.createElement(Name, null, props.name),
            React.createElement(Label, null, props.label)),
        React.createElement("div", { className: "flexer" }),
        hover &&
            React.createElement(React.Fragment, null, props.children)));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map