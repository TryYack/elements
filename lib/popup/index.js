"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.default.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: ${props => typeof props.width == "number" ? "max-content" : props.width};
  height: max-content;
`;
const Overlay = styled_components_1.default.div `
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.1);
  display: none;
  z-index: 4;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Content = styled_components_1.default.div `
  display: flex;
  position: absolute;
  z-index: 1000;
  background: white;
  border-radius: 4px;
  /* overflow: hidden; */
  border: 1px solid #F1F3F5;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.05);
  width: ${props => typeof props.width == "number" ? props.width + "px" : props.width};
  height: max-content;

  &.left-top { top: 0px; left: 0px; transform: translateY(-100%);  }
  &.right-top { top: 0px; right: 0px; transform: translateY(-100%); }
  &.left-bottom { bottom: 0px; left: 0px; transform: translateY(100%); }
  &.right-bottom { bottom: 0px; right : 0px; transform: translateY(100%); }

  @media only screen and (max-width: 768px) {
    transform: none !important;
    top: auto !important;
    bottom: 0px !important;
    left: 0px !important;
    right: 0px !important;
    width: 100vw !important; /* 100% seems to be relative to parent (bug?) */
    height: fit-content;
    max-height: 50%;
    position: fixed !important;
    overflow: scroll;
    border-radius: 0px;
    margin: 0px;
  }
`;
const ContentActiveArea = styled_components_1.default.div `
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  width: ${props => typeof props.width == "number" ? props.width + "px" : props.width};

  @media only screen and (max-width: 768px) {
    display: block;
    height: fit-content;
    width: 100% !important;
    flex-direction: none;
    align-items: none;
    align-content: none;
    justify-content: none;
    flex: none;
  }
`;
const ContentActiveAreaInner = styled_components_1.default.div `
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  width: ${props => typeof props.width == "number" ? props.width + "px" : props.width};

  @media only screen and (max-width: 768px) {
    display: block;
    height: fit-content;
    width: 100% !important;
    flex-direction: none;
    align-items: none;
    align-content: none;
    justify-content: none;
    flex: none;
  }
`;
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
        this.wrapperRef = React.createRef();
        this.rootRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        return { visible: props.visible };
    }
    hidePopup() {
        this.props.handleDismiss();
    }
    handleClickOutside(event) {
        if (!this.wrapperRef)
            return;
        if (!this.wrapperRef.contains)
            return;
        if (this.wrapperRef.contains(event.target))
            return;
        if (!this.wrapperRef.contains(event.target))
            this.hidePopup();
    }
    handleKeyPress(e) {
        // Escape
        if (e.keyCode == 27)
            this.hidePopup();
        // Enter
        if (e.keyCode == 13)
            this.hidePopup();
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("keyup", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener("keyup", this.handleKeyPress);
    }
    render() {
        return (React.createElement(React.Fragment, null,
            this.props.visible && React.createElement(Overlay, null),
            React.createElement(Container, { width: this.props.width, className: this.props.containerClassName ? this.props.containerClassName : "", ref: (ref) => this.rootRef = ref },
                this.props.children,
                this.props.visible &&
                    React.createElement(Content, { ref: (ref) => this.wrapperRef = ref, width: this.props.width, className: this.props.direction },
                        React.createElement(ContentActiveArea, { width: this.props.width },
                            React.createElement(ContentActiveAreaInner, { width: this.props.width }, this.props.content))))));
    }
}
exports.Popup = Popup;
//# sourceMappingURL=index.js.map