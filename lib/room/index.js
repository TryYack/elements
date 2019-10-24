"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var avatar_1 = require("../avatar");
var icons_1 = require("@material-ui/icons");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"], ["\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"])), function (props) { return props.active ? "#0c1828" : "transparent"; });
var ContainerPadding = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  padding: 4px 25px 4px 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"], ["\n  flex: 1;\n  padding: 4px 25px 4px 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"])));
var Badge = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 3px 7px 3px 7px;\n  border-radius: 10px;\n  background-color: #007af5;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 8px;\n  color: white;\n  font-weight: 700;\n"], ["\n  padding: 3px 7px 3px 7px;\n  border-radius: 10px;\n  background-color: #007af5;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 8px;\n  color: white;\n  font-weight: 700;\n"])));
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow: hidden;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  white-space: nowrap;\n  width: max-content;\n  margin-right: 5px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"], ["\n  overflow: hidden;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  white-space: nowrap;\n  width: max-content;\n  margin-right: 5px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n"])), function (props) { return props.active ? "white" : "#475669"; });
var Excerpt = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  margin-top: 4px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  overflow: hidden;\n"], ["\n  flex: 1;\n  margin-top: 4px;\n  font-family: -apple-system, BlinkMacSystemFont,\n  \"Segoe UI\", \"Roboto\", \"Oxygen\",\n  \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n  \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  overflow: hidden;\n"])));
var ExcerptText = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 11px;\n  color: #475669;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  overflow: hidden;\n  max-width: 200px;\n"], ["\n  font-size: 11px;\n  color: #475669;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  overflow: hidden;\n  max-width: 200px;\n"])));
var Contents = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  flex: 1;\n  padding-left: 10px;\n"], ["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  flex: 1;\n  padding-left: 10px;\n"])));
var InnerContents = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n"])));
var Flex = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.Room = function (props) {
    return (React.createElement(Container, { onClick: props.onClick ? props.onClick : null, unread: props.unread, active: props.active },
        React.createElement(ContainerPadding, null,
            React.createElement(avatar_1.Avatar, { dark: true, heartbeat: props.heartbeat, size: "medium", image: props.image, title: props.title, style: { opacity: props.active || props.unread ? 1 : 0.5 } }),
            React.createElement(Contents, null,
                React.createElement(InnerContents, null,
                    React.createElement(Title, { active: props.active || (props.unread != 0) }, props.title),
                    !props.public && !props.private &&
                        React.createElement(icons_1.LockOutlined, { htmlColor: "#475669", fontSize: "small" }),
                    React.createElement(Flex, null),
                    props.unread > 0 &&
                        React.createElement(Badge, null, props.unread)),
                props.excerpt &&
                    React.createElement(Excerpt, null,
                        React.createElement(ExcerptText, null, props.excerpt))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=index.js.map