import * as React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";

const Container = styled.button<{
  jumbo?: boolean,
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
    if (props.jumbo) return "300px";
    return "150px";
  }};
  height: ${props  => {
    if (props.jumbo) return "80px";
    return "40px";
  }};
  border-radius: ${props => {
    if (props.jumbo) return "10px";
    return "6px";
  }};
  border-width: 2px;
  border-style: solid;
  background-color: ${props => COLORS[props.theme].BASE.BACKGROUND_COLOR};
  color: ${props => COLORS[props.theme].BASE.COLOR};
  border-color: ${props => COLORS[props.theme].BASE.BORDER_COLOR};

  &:hover {
    background-color: ${props => COLORS[props.theme].HOVER.BACKGROUND_COLOR};
    color: ${props => COLORS[props.theme].HOVER.COLOR};
    border-color: ${props => COLORS[props.theme].HOVER.BORDER_COLOR};
  }

  &.active {
    background-color: ${props => COLORS[props.theme].ACTIVE.BACKGROUND_COLOR} !important;
    color: ${props => COLORS[props.theme].ACTIVE.COLOR} !important;
    border-color: ${props => COLORS[props.theme].ACTIVE.BORDER_COLOR} !important;
  }

  &:disabled {
    opacity: 0.5 !important;
  }
`;

const Text = styled.span<{
  icon?: any,
  theme: string,
  jumbo?: boolean,
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
    if (!props.jumbo && props.icon) return "0px 15px 0px 7px";
    if (props.jumbo && props.icon) return "0px 30px 0px 15px";
    if (props.jumbo && !props.icon) return "0px 30px 0px 30px";
    return "0px 15px 0px 15px";
  }};
  font-weight: ${props => {
    if (props.jumbo) return "500";
    return "500";
  }};
  font-size: ${props => {
    if (props.jumbo) return "24px";
    return "12px";
  }};
`;

const Icon = styled.div<{
  jumbo?: boolean,
  text?: string,
}>`
  margin: ${props => {
    if (!props.text) return "0px 10px 0px 10px";
    if (!props.text && props.jumbo) return "0px 20px 0px 20px";
    if (props.jumbo) return "0px 0px 0px 30px";

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
   * Possible values are true/false
   *
   * @default false
   */
  jumbo?: boolean;

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
  const { jumbo } = props;

  return (
    <Container
      jumbo={jumbo}
      theme={theme}
      className={className}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      {...props}>
      {props.icon && (
        <Icon
          text={props.text}
          jumbo={props.jumbo}>
          {props.icon}
        </Icon>
      )}
      {props.text && (
        <Text
          icon={props.icon}
          theme={theme}
          jumbo={props.jumbo}
          onClick={props.onClick}>
          {props.text}
        </Text>
      )}
    </Container>
  );
};
