"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const CloseOutlined_1 = require("@material-ui/icons/CloseOutlined");
const Container = styled_components_1.default.div `
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  z-index: 10;
  transition: visibility 0s, opacity 0.1s linear;
`;
const Inner = styled_components_1.default.div `
  background: white;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const InnerContainer = styled_components_1.default.div `
  flex: 1;
  width: 100%;
`;
const Title = styled_components_1.default.div `
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #edf0f2;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;
const Footer = styled_components_1.default.div `
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  border-top: 1px solid #edf0f2;
`;
const FooterPadding = styled_components_1.default.div `
  padding: 20px;
`;
const Button = styled_components_1.default.div `
  cursor: pointer;
  padding: 20px;
`;
const TitleText = styled_components_1.default.div `
  flex: 1;
  padding: 20px;
  color: #202529;
  font-size: 28px;
  font-weight: 600;
`;
exports.Modal = (props) => {
    return (React.createElement(Container, null,
        React.createElement(Inner, { style: { width: props.width, height: props.height } },
            React.createElement(Title, null,
                React.createElement(TitleText, null, props.title),
                React.createElement(Button, null,
                    React.createElement(CloseOutlined_1.default, { htmlColor: "#524150", fontSize: "large", onClick: props.onClose }))),
            React.createElement(InnerContainer, null, props.children),
            props.footer &&
                React.createElement(Footer, null,
                    React.createElement(FooterPadding, null, props.footer)))));
};
//# sourceMappingURL=index.js.map