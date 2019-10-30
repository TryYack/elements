"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var PanelContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"])));
var PanelTitles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-right: 1px solid #eaeaea;\n  box-sizing: border-box;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  height: 100%;\n  min-height: 200px;\n"], ["\n  border-right: 1px solid #eaeaea;\n  box-sizing: border-box;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  height: 100%;\n  min-height: 200px;\n"])));
var Panels = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  transform: translateX(", "%);\n"], ["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  transform: translateX(", "%);\n"])), function (props) { return props.current * -100; });
var PanelsContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  overflow: hidden;\n"], ["\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n  overflow: hidden;\n"])));
var PanelTabButton = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 10px 20px 10px 20px;\n  color: #dcd8db;\n  border-bottom: 1px solid #eaeaea;\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\n  &.active {\n    color: #00a8ff;\n  }\n"], ["\n  padding: 10px 20px 10px 20px;\n  color: #dcd8db;\n  border-bottom: 1px solid #eaeaea;\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\n  &.active {\n    color: #00a8ff;\n  }\n"])));
var Panel = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  background: white;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  display: flex;\n  transform: translateX(", "%);\n"], ["\n  position: absolute;\n  background: white;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  display: flex;\n  transform: translateX(", "%);\n"])), function (props) { return props.index * 100; });
exports.Tabbed = function (props) {
    var _a = React.useState(props.start), current = _a[0], setCurrent = _a[1];
    return (React.createElement(PanelContainer, null,
        React.createElement(PanelTitles, null, props.panels.map(function (panel, index) {
            if (!panel.show)
                return null;
            return (React.createElement(PanelTabButton, { key: index, className: current == index ? "active" : "", onClick: function () { return setCurrent(index); } }, panel.title));
        })),
        React.createElement(PanelsContainer, null,
            React.createElement(Panels, { current: current }, props.panels.map(function (panel, index) {
                if (!panel.show)
                    return null;
                return (React.createElement(Panel, { key: index, index: index }, panel.content));
            })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map