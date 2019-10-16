"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var icons_1 = require("@material-ui/icons");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #05A6FF;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  background-color: #05A6FF;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"])));
var Padding = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  flex: 1;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n"])));
var ActionText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  margin-left: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n"], ["\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  margin-left: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n"])));
var Icon = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: auto;\n  height: 22px;\n  width: 22px;\n  cursor: pointer;\n"], ["\n  margin-left: auto;\n  height: 22px;\n  width: 22px;\n  cursor: pointer;\n"])));
var Text = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
exports.Notification = function (props) {
    return (React.createElement(Container, null,
        React.createElement(Padding, null,
            React.createElement(Text, null, props.text),
            props.actionText &&
                React.createElement(ActionText, { onClick: props.onActionClick }, props.actionText),
            props.onDismissClick &&
                React.createElement(Icon, null,
                    React.createElement(icons_1.CloseOutlined, { htmlColor: "white", fontSize: "default", onClick: props.onDismissClick })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map