"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const avatar_1 = require("../avatar");
const Container = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const ContainerPadding = styled_components_1.default.div `
  flex: 1;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
`;
const Divider = styled_components_1.default.div `
  background: #f1f3f5;
  width: 100%;
  height: 2px;
`;
const RowContainer = styled_components_1.default.div `
  background: transparent;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;
const Row = styled_components_1.default.div `
  background: transparent;
  padding: 7px 5px 7px 5px;
  flex: 1;
  border-radius: 10px;
  cursor: ${props => (props.nohover ? null : "pointer")};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;

  &:hover {
    background: ${props => (props.nohover ? null : "#f8f9fa")};
  }
`;
const IconContainer = styled_components_1.default.div `
  margin-right: 10px;
  margin-left: 5px;
`;
const AvatarContainer = styled_components_1.default.div `
  margin-right: 7px;
  margin-left: 3px;
`;
const Text = styled_components_1.default.div `
  overflow: hidden;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: #868e96;
  width: 100%;
  white-space: nowrap;
`;
const TextContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Label = styled_components_1.default.div `
  overflow: hidden;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: #cfd4da;
  width: 100%;
  white-space: nowrap;
`;
exports.Menu = (props) => {
    return (React.createElement(Container, null,
        React.createElement(ContainerPadding, null, props.items.map((item, index) => {
            if (item.hide)
                return null;
            return (React.createElement(RowContainer, { key: index },
                React.createElement(Row, { nohover: item.divider, onClick: (e) => {
                        e.stopPropagation();
                        item.onClick();
                    } },
                    item.divider && React.createElement(Divider, null),
                    !item.divider &&
                        React.createElement(React.Fragment, null,
                            item.image &&
                                React.createElement(AvatarContainer, null,
                                    React.createElement(avatar_1.Avatar, { image: item.image, title: item.text, size: "small-medium" })),
                            item.icon &&
                                React.createElement(IconContainer, null, item.icon),
                            React.createElement(TextContainer, null,
                                React.createElement(Text, null, item.text),
                                item.label && React.createElement(Label, null, item.label))))));
        }))));
};
//# sourceMappingURL=index.js.map