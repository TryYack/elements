"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
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
  width: ${props => typeof props.width == "string" ? props.width : props.width + "px"} 
  height: ${props => typeof props.height == "string" ? props.height : props.height + "px"}
  border-radius: ${props => props.frameless ? "0px" : "5px"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
  ${props => {
    switch (props.position) {
        case "top": return "margin-bottom: auto;";
        case "bottom": return "margin-top: auto;";
        case "left": return "margin-right: auto;";
        case "right": return "margin-left: auto;";
        default: return "";
    }
}}

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;
const InnerContainer = styled_components_1.default.div `
  flex: 1;
  width: 100%;
  overflow: scroll;
  position: relative;
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
  height: 50px;
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
  flex: 1;
`;
const Button = styled_components_1.default.div `
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.25s;

  &:hover {
    background: #F8F9FA;
  }

  svg {
    fill: #CFD4D9;
  }

  &:hover svg {
    fill: #202529;
  }
`;
const TitleText = styled_components_1.default.div `
  flex: 1;
  padding-left: 20px;
  color: #202529;
  font-size: 20px;
  font-weight: 600;
`;
exports.Modal = (props) => {
    const [header, setHeader] = React.useState(true);
    const [frameless, setFrameless] = React.useState(false);
    React.useEffect(() => {
        if (typeof (props.header) == "boolean")
            setHeader(props.header);
        if (typeof (props.frameless) == "boolean")
            setFrameless(!!props.frameless);
    }, []);
    return (React.createElement(Container, null,
        React.createElement(Inner, { position: props.position, width: props.width, height: props.height, frameless: frameless },
            (!frameless && header) &&
                React.createElement(Title, null,
                    React.createElement(TitleText, null, props.title),
                    props.toolbar &&
                        React.createElement(React.Fragment, null, props.toolbar),
                    React.createElement(Button, null,
                        React.createElement("svg", { onClick: props.onClose, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", style: { transform: ";-ms-filter:" } },
                            React.createElement("path", { d: "M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" })))),
            React.createElement(InnerContainer, null, props.children),
            props.footer &&
                React.createElement(Footer, null,
                    React.createElement(FooterPadding, null, props.footer)))));
};
//# sourceMappingURL=index.js.map