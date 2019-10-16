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
var Label = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 700;\n  padding-bottom: 5px;\n"], ["\n  color: #858e96;\n  font-size: 12px;\n  font-weight: 700;\n  padding-bottom: 5px;\n"])));
var InputField = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: none;\n  flex: 1;\n  background: transparent;\n  color: #495057;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px;\n  width: 100%;\n  border: 1px solid #ebedef;\n  border-radius: 5px;\n  resize: none;\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n\n  &::placeholder {\n    color: #acb5bd;\n  }\n"], ["\n  border: none;\n  flex: 1;\n  background: transparent;\n  color: #495057;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px;\n  width: 100%;\n  border: 1px solid #ebedef;\n  border-radius: 5px;\n  resize: none;\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n\n  &::placeholder {\n    color: #acb5bd;\n  }\n"])));
exports.Input = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Label, null, props.label),
        React.createElement(InputField, __assign({}, props))));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map