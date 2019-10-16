"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  width: max-content;\n  height: max-content;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  width: max-content;\n  height: max-content;\n"])));
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n  background: white;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #F1F3F5;\n  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.05);\n  width: ", "px;\n  height: max-content;\n\n  &.left-top { top: 0px; left: 0px; transform: translateY(-100%);  }\n  &.right-top { top: 0px; right: 0px; transform: translateY(-100%); }\n  &.left-bottom { border: 1px solid blue; bottom: 0px; left: 0px; transform: translateY(100%); }\n  &.right-bottom { bottom: 0px; right : 0px; transform: translateY(100%); }\n"], ["\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n  background: white;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #F1F3F5;\n  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.05);\n  width: ", "px;\n  height: max-content;\n\n  &.left-top { top: 0px; left: 0px; transform: translateY(-100%);  }\n  &.right-top { top: 0px; right: 0px; transform: translateY(-100%); }\n  &.left-bottom { border: 1px solid blue; bottom: 0px; left: 0px; transform: translateY(100%); }\n  &.right-bottom { bottom: 0px; right : 0px; transform: translateY(100%); }\n"])), function (props) { return props.width; });
var ContentActiveArea = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: props.visible,
        };
        _this.wrapperRef = React.createRef();
        _this.rootRef = React.createRef();
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        return _this;
    }
    Popup.getDerivedStateFromProps = function (props, state) {
        return { visible: props.visible };
    };
    Popup.prototype.hidePopup = function () {
        this.props.handleDismiss();
    };
    Popup.prototype.handleClickOutside = function (event) {
        if (!this.wrapperRef)
            return;
        if (!this.wrapperRef.contains)
            return;
        if (this.wrapperRef.contains(event.target))
            return;
        if (!this.wrapperRef.contains(event.target))
            this.hidePopup();
    };
    Popup.prototype.handleKeyPress = function (e) {
        // Escape
        if (e.keyCode == 27)
            this.hidePopup();
        // Enter
        if (e.keyCode == 13)
            this.hidePopup();
    };
    Popup.prototype.componentDidMount = function () {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("keyup", this.handleKeyPress);
    };
    Popup.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener("keyup", this.handleKeyPress);
    };
    Popup.prototype.render = function () {
        var _this = this;
        return (React.createElement(Container, { className: this.props.containerClassName ? this.props.containerClassName : "", ref: function (ref) { return _this.rootRef = ref; } },
            this.props.children,
            this.props.visible &&
                React.createElement(Content, { ref: function (ref) { return _this.wrapperRef = ref; }, width: this.props.width, className: this.props.direction },
                    React.createElement(ContentActiveArea, null, this.props.content))));
    };
    return Popup;
}(React.Component));
exports.Popup = Popup;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map