"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var icons_1 = require("@material-ui/icons");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  visibility: visible;\n  opacity: 1;\n  z-index: 10;\n  transition: visibility 0s, opacity 0.1s linear;\n"], ["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  visibility: visible;\n  opacity: 1;\n  z-index: 10;\n  transition: visibility 0s, opacity 0.1s linear;\n"])));
var Inner = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: white;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"], ["\n  background: white;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n"])));
var InnerContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  width: 100%;\n"], ["\n  flex: 1;\n  width: 100%;\n"])));
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  width: 100%;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-bottom: 1px solid #edf0f2;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])));
var Footer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-top: 1px solid #edf0f2;\n"], ["\n  width: 100%;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: flex-start;\n  position: relative;\n  border-top: 1px solid #edf0f2;\n"])));
var FooterPadding = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 20px;\n"], ["\n  padding: 20px;\n"])));
var Button = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 20px;\n"], ["\n  cursor: pointer;\n  padding: 20px;\n"])));
var TitleText = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  flex: 1;\n  padding: 20px;\n  color: #202529;\n  font-size: 28px;\n  font-weight: 600;\n"], ["\n  flex: 1;\n  padding: 20px;\n  color: #202529;\n  font-size: 28px;\n  font-weight: 600;\n"])));
exports.Modal = function (props) {
    return (React.createElement(Container, null,
        React.createElement(Inner, { style: { width: props.width, height: props.height } },
            React.createElement(Title, null,
                React.createElement(TitleText, null, props.title),
                React.createElement(Button, null,
                    React.createElement(icons_1.CloseOutlined, { htmlColor: "#524150", fontSize: "large", onClick: props.onClose }))),
            React.createElement(InnerContainer, null, props.children),
            props.footer &&
                React.createElement(Footer, null,
                    React.createElement(FooterPadding, null, props.footer)))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=index.js.map