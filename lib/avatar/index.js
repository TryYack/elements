"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const chroma = require("chroma-js");
const Container = styled_components_1.default.div `
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  box-sizing: border-box;
`;
const Inner = styled_components_1.default.div `
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  /*background-image: ${props => props.image};*/
  background-color: ${props => props.background};
  overflow: hidden;
  transition: opacity 0.25s;
  position: relative;
  box-sizing: border-box;
  opacity: ${props => props.over && props.onClick ? 0.75 : 1};

  &.overlap-right {
    margin-right: -7px;
  }

  &.outline {
    border: 1.5px solid ${props => props.outlineInnerColor};
    box-shadow: 0px 0px 0px 1.5px ${props => props.outlineOuterColor};
  }
`;
const Text = styled_components_1.default.div `
  font-weight: 500;
  color: ${props => props.color || "white"};
  position: relative;
  top: 0px;
  margin: 0px;
  padding: 0px;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${props => {
    if (props.size === "very-small")
        return "6";
    if (props.size === "small")
        return "8";
    if (props.size === "small-medium")
        return "10";
    if (props.size === "medium")
        return "12";
    if (props.size === "medium-large")
        return "14";
    if (props.size === "large")
        return "16";
    if (props.size === "x-large")
        return "24";
    if (props.size === "xx-large")
        return "32";
    if (props.size === "xxx-large")
        return "40";
    return "12";
}}px;
`;
const Delete = styled_components_1.default.div `
  top: -2px;
  right: -2px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  position: absolute;
  overflow: hidden;
  background-color: #e23f62;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid white;
  box-sizing: border-box;
  z-index: 1000;
  transition: background-color 0.25s;

  &:hover {
    background-color: #ce3354;
    transition: background-color 0.25s;
  }
`;
const Edit = styled_components_1.default.div `
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  align-content: center;
  cursor: pointer;
`;
const Presence = styled_components_1.default.span `
  position: absolute;
  right: -3px;
  bottom: -3px;
  width: 13px;
  height: 13px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: ${props => props.onClick ? "pointer" : "default"};
  z-index: 3;
  border: 2px solid ${props => (props.dark ? "#08111d" : "#ffffff")};
  background-color: ${props => {
    switch (props.presence) {
        case "online":
            return "#36C5AB";
        case "away":
            return "#FD9A00";
        case "busy":
            return "#FC1449";
        case "invisible:user":
            return props.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
        default:
            return "transparent";
    }
}};
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: ${props => props.onClick ? "0.75" : "1"};
  }
`;
const Muted = styled_components_1.default.span `
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  border-radius: ${props => props.borderRadius}px;
`;
const ImageMemo = React.memo((props) => {
    console.log("Render");
    return React.createElement("div", { style: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            backgroundImage: props.image,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        } });
});
/**
 * Avatar component. Displays a circle or square container for users,
 * channels, or anything else
 */
exports.AvatarComponent = (props) => {
    const [over, setOver] = react_1.useState(false);
    const image = props.image ? "url(" + props.image + ")" : "";
    const background = props.dark
        ? "#222129"
        : props.color
            ? chroma(props.color)
                .desaturate(2)
                .brighten(2.25)
                .toString()
            : "#f1f3f5";
    const color = props.color ? props.color : props.textColor ? props.textColor : "#007af5";
    const className = props.outlineInnerColor || props.outlineOuterColor ? props.className + " outline" : props.className;
    let width = 35;
    let height = 35;
    let borderRadius = 35;
    const generateInitials = (str) => {
        return str.split(" ")
            .map((part, _) => {
            return part[0] ? part[0].toUpperCase() : "";
        })
            .splice(0, 2)
            .toString()
            .replace(",", "")
            .trim();
    };
    switch (props.size) {
        case "very-small":
            width = 15;
            height = 15;
            borderRadius = props.circle ? 200 : 4;
            break;
        case "small":
            width = 20;
            height = 20;
            borderRadius = props.circle ? 200 : 5;
            break;
        case "small-medium":
            width = 25;
            height = 25;
            borderRadius = props.circle ? 200 : 6;
            break;
        case "medium":
            width = 30;
            height = 30;
            borderRadius = props.circle ? 200 : 7;
            break;
        case "medium-large":
            width = 35;
            height = 35;
            borderRadius = props.circle ? 200 : 8;
            break;
        case "large":
            width = 40;
            height = 40;
            borderRadius = props.circle ? 200 : 10;
            break;
        case "x-large":
            width = 80;
            height = 80;
            borderRadius = props.circle ? 200 : 12;
            break;
        case "xx-large":
            width = 120;
            height = 120;
            borderRadius = props.circle ? 200 : 16;
            break;
        case "xxx-large":
            width = 180;
            height = 180;
            borderRadius = props.circle ? 200 : 18;
            break;
        default:
            width = 30;
            height = 30;
            borderRadius = props.circle ? 200 : 5;
    }
    return (React.createElement(Container, { width: width, height: height, onMouseEnter: () => setOver(true), onMouseLeave: () => setOver(false) },
        over && props.onEditClick && props.editIcon &&
            React.createElement(Edit, { onClick: props.onEditClick }, props.editIcon),
        over && props.onDeleteClick && props.deleteIcon &&
            React.createElement(Delete, { onClick: props.onDeleteClick }, props.deleteIcon),
        props.presence &&
            React.createElement(React.Fragment, null, (props.presence != "offline" && props.presence != "invisible") &&
                React.createElement(Presence, { onClick: props.onPresenceClick || null, presence: props.presence, dark: props.dark || false })),
        props.muted &&
            React.createElement(Muted, { borderRadius: borderRadius },
                React.createElement("svg", { width: width, height: height },
                    React.createElement("defs", null,
                        React.createElement("pattern", { id: "pattern-stripe", width: "4", height: "4", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" },
                            React.createElement("rect", { width: "1.5", height: "4", transform: "translate(0,0)", fill: "white" })),
                        React.createElement("mask", { id: "mask-stripe" },
                            React.createElement("rect", { x: "0", y: "0", width: width, height: height, fill: "url(#pattern-stripe)" }))),
                    React.createElement("rect", { x: "0", y: "0", width: width, height: height, fill: props.image ? background : color, mask: "url(#mask-stripe)" }))),
        React.createElement(Inner, { over: over, onClick: props.onClick, width: width, height: height, borderRadius: borderRadius, className: className, image: image, background: background, outlineInnerColor: props.outlineInnerColor ? props.outlineInnerColor : "transparent", outlineOuterColor: props.outlineOuterColor ? props.outlineOuterColor : "transparent", style: props.style },
            image && React.createElement(ImageMemo, { image: image }),
            React.createElement("div", { style: {
                    zIndex: 2,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                } },
                props.children,
                ((!props.children && !props.image && props.title && !props.onEditClick) ||
                    (!props.children && !props.image && props.title && props.onEditClick && !over)) &&
                    React.createElement(Text, { color: color, size: props.size }, generateInitials(props.title))))));
};
exports.Avatar = React.memo((props) => React.createElement(exports.AvatarComponent, Object.assign({}, props)));
//# sourceMappingURL=index.js.map