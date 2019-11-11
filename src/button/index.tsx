import * as React from "react";
import styled from "styled-components";
import { THEMES } from "./themes";

const Container = styled.button<{
  size?: string,
  theme: string,
  disabled?: boolean,
}>`
  box-sizing: border-box;
  width: auto;
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
      case "large":
        return "300px";
      case "small":
        return "fit-content";
      default:
        return "150px";
    }
  }};
  height: ${props  => {
    switch (props.size) {
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
  background-color: ${props => THEMES[props.theme].BASE.BACKGROUND_COLOR};
  color: ${props => THEMES[props.theme].BASE.COLOR};
  border-color: ${props => THEMES[props.theme].BASE.BORDER_COLOR};

  &:hover {
    background-color: ${props => THEMES[props.theme].HOVER.BACKGROUND_COLOR};
    color: ${props => THEMES[props.theme].HOVER.COLOR};
    border-color: ${props => THEMES[props.theme].HOVER.BORDER_COLOR};
  }

  &.active {
    background-color: ${props => THEMES[props.theme].ACTIVE.BACKGROUND_COLOR} !important;
    color: ${props => THEMES[props.theme].ACTIVE.COLOR} !important;
    border-color: ${props => THEMES[props.theme].ACTIVE.BORDER_COLOR} !important;
  }

  &:disabled {
    opacity: 0.5 !important;
  }
`;

const Text = styled.span<{
  icon?: any,
  theme: string,
  size?: string,
}>`
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
    } else {
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

const Icon = styled.div<{
  size?: string,
  text?: string,
}>`
  margin: ${props => {
    if (!props.text) return "0px 10px 0px 10px";
    if (!props.text && props.size) return "0px 20px 0px 20px";
    if (props.size) return "0px 0px 0px 30px";

    return "0px 0px 0px 15px";
  }};
`;

interface IButtonProps {
  /**
   * Icon to display next to text,
   *
   * @default null
   */
  icon?: any;

  /**
   * Value to display, either empty (" ") or string value
   *
   * @default " "
   */
  text?: string;

  /**
   * Colour theme for button
   *
   * @default " " (blue)
   */
  theme?: string;

  /**
   * Button disabled value
   *
   * @default null
   */
  disabled?: boolean;

  /**
   * Possible values are "small" | "medium" | "large"
   *
   * @default false
   */
  size?: string;

  /**
   * React classname property
   *
   * @default null
   */
  className?: string;

  /** Called when an empty cell is clicked. */
  onClick?: any;
}

/**
 * Button component.
 */
export const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const [down, setDown] = React.useState(false);
  const theme: string = props.theme ? props.theme : "default";
  const className = down ? "active " + props.className : props.className;

  return (
    <Container
      size={props.size}
      theme={theme}
      className={className}
      onClick={props.onClick}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      {...props}>
      {props.icon && (
        <Icon
          text={props.text}
          size={props.size}>
          {props.icon}
        </Icon>
      )}
      {props.text && (
        <Text
          icon={props.icon}
          theme={theme}
          size={props.size}>
          {props.text}
        </Text>
      )}
    </Container>
  );
};
