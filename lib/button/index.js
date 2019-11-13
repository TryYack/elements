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
  max-width: ${props => {
    switch (props.size) {
        case "full-width":
            return "100%";
        case "large":
            return "300px";
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
        case "small":
            return "30px";
        default:
            return "40px";
    }
}};
  border-radius: ${props => {
    switch (props.size) {
        case "large":
            return "10px";
        case "small":
            return "6px";
        default:
            return "8px";
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
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  padding: ${props => {
    if (props.icon) {
        switch (props.size) {
            case "large":
                return "0px 30px 0px 15px";
            case "small":
                return "0px 10px 0px 5px";
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
            default:
                return "0px 15px 0px 15px";
        }
    }
}};
  font-weight: ${props => {
    switch (props.size) {
        case "large":
            return "400";
        case "small":
            return "400";
        default:
            return "400";
    }
}};
  font-size: ${props => {
    switch (props.size) {
        case "large":
            return "24px";
        case "small":
            return "11px";
        default:
            return "14px";
    }
}};
`;
const Icon = styled_components_1.default.div `
  margin: ${props => {
    if (!props.text)
        return "0px 10px 0px 10px";
    if (!props.text && props.size)
        return "0px 20px 0px 20px";
    if (props.size)
        return "0px 0px 0px 30px";
    return "0px 0px 0px 15px";
}};
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