"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var avatar_1 = require("../avatar");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 10px 10px 10px;\n  width: 100%;\n"], ["\n  padding: 10px 10px 10px 10px;\n  width: 100%;\n"])));
var Divider = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #f1f3f5;\n  width: 100%;\n  height: 2px;\n"], ["\n  background: #f1f3f5;\n  width: 100%;\n  height: 2px;\n"])));
var Row = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: transparent;\n  padding: 7px 5px 7px 5px;\n  width: 100%;\n  border-radius: 10px;\n  cursor: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  background: transparent;\n  padding: 7px 5px 7px 5px;\n  width: 100%;\n  border-radius: 10px;\n  cursor: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (props) { return (props.nohover ? null : "pointer"); }, function (props) { return (props.nohover ? null : "#f8f9fa"); });
var IconContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: 10px;\n  margin-left: 5px;\n"], ["\n  margin-right: 10px;\n  margin-left: 5px;\n"])));
var AvatarContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 7px;\n  margin-left: 3px;\n"], ["\n  margin-right: 7px;\n  margin-left: 3px;\n"])));
var Text = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  color: #868e96;\n  width: 100%;\n  white-space: nowrap;\n"], ["\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  color: #868e96;\n  width: 100%;\n  white-space: nowrap;\n"])));
var Label = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  color: #cfd4da;\n  width: 100%;\n  white-space: nowrap;\n"], ["\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  color: #cfd4da;\n  width: 100%;\n  white-space: nowrap;\n"])));
exports.Menu = function (props) {
    return (React.createElement(Container, { className: "column" }, props.items.map(function (item, index) {
        if (item.hide)
            return null;
        return (React.createElement(Row, { className: "row", key: index, onClick: item.onClick, nohover: item.divider },
            item.divider && React.createElement(Divider, null),
            !item.divider &&
                React.createElement(React.Fragment, null,
                    item.image &&
                        React.createElement(AvatarContainer, null,
                            React.createElement(avatar_1.Avatar, { image: item.image, title: item.text, size: "small-medium" })),
                    item.icon &&
                        React.createElement(IconContainer, null, item.icon),
                    React.createElement("div", { className: "column" },
                        React.createElement(Text, null, item.text),
                        item.label && React.createElement(Label, null, item.label)))));
    })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=index.js.map