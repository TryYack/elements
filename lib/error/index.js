"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 30px;\n  background: #ee716c;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 30px;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s, opacity 0.1s linear;\n  z-index: 10000;\n"], ["\n  position: relative;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 30px;\n  background: #ee716c;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 30px;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s, opacity 0.1s linear;\n  z-index: 10000;\n"])));
var Text = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n"], ["\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n"])));
exports.Error = function (props) {
    if (!props.message)
        return null;
    return (React.createElement(Container, null,
        React.createElement(Text, null, props.message)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map