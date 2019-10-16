"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: white;\n  width: 30px;\n  position: relative;\n  height: 17px;\n  border: 1px solid #F1F3F5;\n  box-shadow: 0px 0px 16px -9px rgba(0,0,0,0.75);\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 100px;\n"], ["\n  background: white;\n  width: 30px;\n  position: relative;\n  height: 17px;\n  border: 1px solid #F1F3F5;\n  box-shadow: 0px 0px 16px -9px rgba(0,0,0,0.75);\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 100px;\n"])));
var Circle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  left: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  transition: left 0.5s, background-color 0.5s;\n  width: 15px;\n  height: 15px;\n"], ["\n  position: absolute;\n  top: 0px;\n  left: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  transition: left 0.5s, background-color 0.5s;\n  width: 15px;\n  height: 15px;\n"])), function (props) { return props.on ? "13px" : "0px"; }, function (props) { return props.on ? "#007af5" : "#e8ecee"; });
exports.Toggle = function (props) {
    var _a = React.useState(props.on), on = _a[0], setOn = _a[1];
    React.useEffect(function () { return setOn(props.on); }, [props.on]);
    return (React.createElement(Container, { onClick: function () {
            props.onChange(!on);
            setOn(!on);
        } },
        React.createElement(Circle, { on: on })));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map