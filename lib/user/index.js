"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var avatar_1 = require("../avatar");
var Name = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #483545;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  color: #483545;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Label = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  cursor: pointer;\n"], ["\n  width: 100%;\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  cursor: pointer;\n"])), function (props) { return (props.active ? "#f8f9fa" : "transparent"); });
var Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"])));
var Flex = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var ContainerPadding = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n"], ["\n  flex: 1;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n"])));
exports.User = function (props) {
    var _a = React.useState(false), hover = _a[0], setHover = _a[1];
    return (React.createElement(Container, { active: props.active, onClick: props.onClick, onMouseOver: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } },
        React.createElement(ContainerPadding, null,
            React.createElement(avatar_1.Avatar, { size: "medium", image: props.image, title: props.name }),
            React.createElement(Content, null,
                React.createElement(Name, null, props.name),
                React.createElement(Label, null, props.label)),
            React.createElement(Flex, null),
            hover &&
                React.createElement(React.Fragment, null, props.children))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map