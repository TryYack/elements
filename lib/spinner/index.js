"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Loading = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"])));
var Graphic = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 20px;\n  height: 20px;\n\n  &.inner div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    margin: 2px;\n    border: 2px solid #3d9ee1;\n    border-radius: 50%;\n    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #3d9fe1 transparent transparent transparent;\n  }\n\n  &.inner div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n\n  &.inner div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n\n  &.inner div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 20px;\n  height: 20px;\n\n  &.inner div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    margin: 2px;\n    border: 2px solid #3d9ee1;\n    border-radius: 50%;\n    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #3d9fe1 transparent transparent transparent;\n  }\n\n  &.inner div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n\n  &.inner div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n\n  &.inner div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));
exports.Spinner = function (props) {
    return React.createElement(Loading, null,
        React.createElement(Graphic, { className: "inner" },
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map