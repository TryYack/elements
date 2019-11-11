"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Text = styled_components_1.default.div ``;
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
exports.Tabbed = (props) => {
    const [current, setCurrent] = React.useState(props.start);
    return (React.createElement(PanelContainer, null,
        React.createElement(PanelTitles, null, props.panels.map((panel, index) => {
            if (!panel.show)
                return null;
            return (React.createElement(PanelTabButton, { key: index, className: current == index ? "active" : "", onClick: () => setCurrent(index) },
                React.createElement(Text, { className: `button ${current == index ? "color-blue" : "color-d5"}` }, panel.title)));
        })),
        React.createElement(PanelsContainer, null,
            React.createElement(Panels, { current: current }, props.panels.map((panel, index) => {
                if (!panel.show)
                    return null;
                return (React.createElement(Panel, { key: index, index: index }, panel.content));
            })))));
};
//# sourceMappingURL=index.js.map