"use strict";
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
var user_1 = require("../user");
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { index: 0, members: [] };
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        return _this;
    }
    Members.getDerivedStateFromProps = function (props, state) {
        return {
            members: props.members.filter(function (member, index) { return (index <= 5 ? true : false); }),
        };
    };
    Members.prototype.handleKeyPress = function (e) {
        // Move up
        if (e.keyCode == 38)
            this.setState({ index: this.state.index - 1 < 0 ? this.state.members.length - 1 : this.state.index - 1 });
        // Move down
        if (e.keyCode == 40)
            this.setState({ index: this.state.index + 1 == this.state.members.length ? 0 : this.state.index + 1 });
        // Press enter
        if (e.keyCode == 13) {
            if (this.state.members.length > 0)
                this.props.handleAccept(this.state.members[this.state.index]);
        }
    };
    Members.prototype.componentDidMount = function () {
        document.addEventListener("keyup", this.handleKeyPress);
    };
    Members.prototype.componentWillUnmount = function () {
        document.removeEventListener("keyup", this.handleKeyPress);
    };
    // prettier-ignore
    Members.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null, this.state.members.map(function (member, index) {
            return (React.createElement(user_1.User, { key: index, active: index == _this.state.index, image: member.user.image, name: member.user.name, label: "@" + member.user.username, onClick: function () { return _this.props.handleAccept(member); } }));
        })));
    };
    return Members;
}(React.Component));
exports.Members = Members;
//# sourceMappingURL=index.js.map