"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_1 = require("react");
const avatar_1 = require("../avatar");
const popup_1 = require("../popup");
const menu_1 = require("../menu");
const react_feather_1 = require("react-feather");
const react_feather_2 = require("react-feather");
const react_feather_3 = require("react-feather");
const Container = styled_components_1.default.div `
  background: ${props => props.active ? "#202027" : "transparent"};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
`;
const ContainerPadding = styled_components_1.default.div `
  flex: 1;
  padding: 3px 25px 3px 25px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  position: relative;
`;
const Badge = styled_components_1.default.div `
  padding: 3px 7px 3px 7px;
  border-radius: 10px;
  background-color: #007af5;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 8px;
  color: white;
  font-weight: 700;
  margin-left: 5px;
`;
const Title = styled_components_1.default.div `
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.active ? "white" : "#626d7a"};
  white-space: wrap;
  max-width: 140px;
  /*letter-spacing: -0.5px;*/
  margin-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
const Excerpt = styled_components_1.default.div `
  flex: 1;
  margin-top: 1px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
`;
const ExcerptText = styled_components_1.default.span `
  font-size: 13px;
  color: #626d7a;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  max-width: 200px;
`;
const Contents = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
  flex: 1;
  padding-left: 10px;
`;
const InnerContents = styled_components_1.default.div `
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;
const MoreIcon = styled_components_1.default.span `
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s;
  display: inline-block;
  z-index: 5;
  right: 0px;
  top: 0px;
  display: flex;
  margin-left: 5px;
  margin-right: 4px;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  &:hover {
    opacity: 0.75;
  }
`;
const Flex = styled_components_1.default.div `
  flex: 1;
`;
exports.Channel = (props) => {
    const [over, setOver] = react_1.useState(false);
    const [menu, setMenu] = react_1.useState(false);
    return (React.createElement(Container, { onClick: props.onClick ? props.onClick : null, onMouseEnter: () => setOver(true), onMouseLeave: () => {
            setOver(false);
            setMenu(false);
        }, unread: props.unread, active: props.active },
        React.createElement(ContainerPadding, null,
            React.createElement(avatar_1.Avatar, { dark: true, presence: props.presence, size: "medium", image: props.image, title: props.title }),
            React.createElement(Contents, null,
                React.createElement(InnerContents, null,
                    React.createElement(Title, { active: props.active || (props.unread != 0) }, props.title),
                    props.muted &&
                        React.createElement(react_feather_1.BellOff, { color: "#626d7a", size: "15", thickness: "1.5", style: { marginRight: 5 } }),
                    !props.public && !props.private &&
                        React.createElement(react_feather_2.EyeOff, { color: "#626d7a", size: "15", thickness: "1.5" }),
                    React.createElement(Flex, null),
                    over && props.onMutedClick && props.onArchivedClick &&
                        React.createElement(popup_1.Popup, { handleDismiss: () => setMenu(false), visible: menu, width: 200, direction: "right-bottom", content: React.createElement(menu_1.Menu, { items: [
                                    { text: props.archived ? "Unarchive" : "Archive", onClick: (e) => {
                                            props.onArchivedClick();
                                        } },
                                    { text: props.muted ? "Unmute" : "Mute", onClick: (e) => {
                                            props.onMutedClick();
                                        } },
                                ] }) },
                            React.createElement(MoreIcon, { onClick: (e) => {
                                    e.stopPropagation();
                                    setMenu(true);
                                } },
                                React.createElement(react_feather_3.MoreHorizontal, { color: "#626d7a", size: "15", thickness: "1.5" }))),
                    !over && props.unread > 0 &&
                        React.createElement(Badge, null, props.unread)),
                props.excerpt &&
                    React.createElement(Excerpt, null,
                        React.createElement(ExcerptText, { active: props.active || (props.unread != 0) }, props.excerpt))))));
};
//# sourceMappingURL=index.js.map