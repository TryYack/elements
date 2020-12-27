"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const themes_1 = require("./themes");
const Container = styled_components_1.default.button `
  box-sizing: border-box;
  width: ${props => {
    switch (props.size) {
        case "full-width":
            return "100%";
        default:
            return "auto";
    }
}}
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-size: cover;
  position: relative;
  transition: background-color 0.15s, color 0.15s, border 0.15s;
  cursor: pointer;
  box-sizing: border-box;
  max-width: ${props => {
    switch (props.size) {
        case "full-width":
            return "100%";
        case "large":
            return "300px";
        case "x-small":
            return "fit-content";
        case "small":
            return "fit-content";
        default:
            return "150px";
    }
}};
  height: ${props => {
    switch (props.size) {
        case "full-width":
            return "auto";
        case "large":
            return "80px";
        case "x-small":
            return "20px";
        case "small":
            return "30px";
        default:
            return "40px";
    }
}};
  border-radius: ${props => {
    switch (props.size) {
        case "large":
            return "14px";
        case "small":
            return "10px";
        default:
            return "12px";
    }
}};
  border-width: ${props => {
    switch (props.size) {
        case "large":
            return "2px";
        case "small":
            return "1px";
        default:
            return "2px";
    }
}};
  border-style: solid;
  background-color: ${props => themes_1.THEMES[props.theme].BASE.BACKGROUND_COLOR};
  color: ${props => themes_1.THEMES[props.theme].BASE.COLOR};
  border-color: ${props => themes_1.THEMES[props.theme].BASE.BORDER_COLOR};

  @media only screen and (max-width: 768px) {
    border-width: 2px;
    border-radius: 5px;
    height: 40px;
    max-width: 150px;
  }

  &:hover {
    background-color: ${props => themes_1.THEMES[props.theme].HOVER.BACKGROUND_COLOR};
    color: ${props => themes_1.THEMES[props.theme].HOVER.COLOR};
    border-color: ${props => themes_1.THEMES[props.theme].HOVER.BORDER_COLOR};
  }

  &.active {
    background-color: ${props => themes_1.THEMES[props.theme].ACTIVE.BACKGROUND_COLOR} !important;
    color: ${props => themes_1.THEMES[props.theme].ACTIVE.COLOR} !important;
    border-color: ${props => themes_1.THEMES[props.theme].ACTIVE.BORDER_COLOR} !important;
  }

  &:disabled {
    opacity: 0.5 !important;
  }
`;
const Text = styled_components_1.default.span `
  margin: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  padding: ${props => {
    if (props.icon) {
        switch (props.size) {
            case "large":
                return "0px 30px 0px 15px";
            case "small":
                return "0px 10px 0px 5px";
            case "x-small":
                return "0px 7px 0px 2px";
            default:
                return "0px 15px 0px 8px";
        }
    }
    else {
        switch (props.size) {
            case "large":
                return "0px 30px 0px 30px";
            case "small":
                return "0px 10px 0px 10px";
            case "x-small":
                return "0px 5px 0px 5px";
            default:
                return "0px 15px 0px 15px";
        }
    }
}};
  font-weight: ${props => {
    switch (props.size) {
        case "large":
            return "700";
        case "small":
            return "700";
        case "x-small":
            return "800";
        default:
            return "500";
    }
}};
  font-size: ${props => {
    switch (props.size) {
        case "large":
            return "23px";
        case "small":
            return "10px";
        case "x-small":
            return "8px";
        default:
            return "13px";
    }
}};

  @media only screen and (max-width: 768px) {
    padding: ${props => props.icon ? "0px 15px 0px 8px" : "0px 15px 0px 15px"}
    font-weight: 500;
    font-size: 13px;
  }
`;
const Icon = styled_components_1.default.div `
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: ${props => {
    if (!props.text)
        return "0px 10px 0px 10px";
    if (!props.text && props.size)
        return "0px 20px 0px 20px";
    if (props.size) {
        switch (props.size) {
            case "large":
                return "0px 0px 0px 30px";
            case "small":
                return "0px 0px 0px 10px";
            default:
                return "0px 0px 0px 15px";
        }
    }
    return "0px 0px 0px 15px";
}};

  @media only screen and (max-width: 768px) {
    margin: 0px 0px 0px 15px;
  }
`;
/**
 * Button component.
 */
exports.Button = (props) => {
    const [down, setDown] = React.useState(false);
    const theme = props.theme ? props.theme : "default";
    const className = down ? "active " + props.className : props.className;
    return (React.createElement(Container, Object.assign({ size: props.size, theme: theme, className: className, onClick: props.onClick, onMouseDown: () => setDown(true), onMouseUp: () => setDown(false) }, props),
        props.icon && (React.createElement(Icon, { text: props.text, size: props.size }, props.icon)),
        props.text && (React.createElement(Text, { icon: props.icon, theme: theme, size: props.size }, props.text))));
};
//# sourceMappingURL=index.js.map