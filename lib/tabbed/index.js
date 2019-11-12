"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const PanelContainer = styled_components_1.default.div `
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const PanelTitles = styled_components_1.default.div `
  border-right: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;
  min-height: 200px;
`;
const Panels = styled_components_1.default.div `
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  transform: translateX(${props => props.current * -100}%);
`;
const PanelsContainer = styled_components_1.default.div `
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  overflow: hidden;
`;
const PanelTabButton = styled_components_1.default.div `
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  cursor: pointer;
`;
const Panel = styled_components_1.default.div `
  position: absolute;
  background: white;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  transform: translateX(${props => props.index * 100}%);
`;
const Text = styled_components_1.default.div `
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: ${props => props.active ? "#007af5" : "#11161c"};
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.8;
  }
`;
exports.Tabbed = (props) => {
    const [current, setCurrent] = React.useState(props.start);
    return (React.createElement(PanelContainer, null,
        React.createElement(PanelTitles, null, props.panels.map((panel, index) => {
            if (!panel.show)
                return null;
            return (React.createElement(PanelTabButton, { key: index, className: current == index ? "active" : "", onClick: () => setCurrent(index) },
                React.createElement(Text, { active: current == index }, panel.title)));
        })),
        React.createElement(PanelsContainer, null,
            React.createElement(Panels, { current: current }, props.panels.map((panel, index) => {
                if (!panel.show)
                    return null;
                return (React.createElement(Panel, { key: index, index: index }, panel.content));
            })))));
};
//# sourceMappingURL=index.js.map