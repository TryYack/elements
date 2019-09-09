import * as React from "react";
import styled from "styled-components";
import { PALETTE } from "../palette";

const Icon = styled.div<{ jumbo?: boolean }>`
  margin: ${props => {
    if (props.jumbo) return "0px 0px 0px 30px";
    return "0px 0px 0px 15px";
  }};
`;

const Container = styled.div<{ jumbo?: boolean }>`
  width: max-content;
  position: relative;
  max-width: ${props => {
    if (props.jumbo) return "300px";
    return "200px";
  }};
`;

const Inner = styled.button<{
  jumbo?: boolean,
  theme: string,
  outline?: boolean,
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
  background-color: ${props => PALETTE[props.theme].BASE.BACKGROUND_COLOR};
  color: ${props => PALETTE[props.theme].BASE.COLOR};
  border-color: ${props => PALETTE[props.theme].BASE.BORDER_COLOR};

  &:hover {
    background-color: ${props => PALETTE[props.theme].HOVER.BACKGROUND_COLOR};
    color: ${props => PALETTE[props.theme].HOVER.COLOR};
    border-color: ${props => PALETTE[props.theme].HOVER.BORDER_COLOR};
  }

  &.active {
    background-color: ${props => PALETTE[props.theme].ACTIVE.BACKGROUND_COLOR} !important;
    color: ${props => PALETTE[props.theme].ACTIVE.COLOR} !important;
    border-color: ${props => PALETTE[props.theme].ACTIVE.BORDER_COLOR} !important;
  }
`;

const Text = styled.span<{
  jumbo?: boolean,
  theme: string,
  icon?: any,
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

interface IButtonProps {
  /**
   * Type of button for form
   *
   * @default null
   */
  type?: any;

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
  text: string;

  /**
   * Colour theme for button
   *
   * @default " " (blue)
   */
  theme?: string;

  /**
   * Possible values are true/false
   *
   * @default false
   */
  outline?: boolean;

  /**
   * Possible values are true/false
   *
   * @default false
   */
  jumbo?: boolean;

  /** Called when an empty cell is clicked. */
  onClick?: any;
}

/**
 * Button component.
 */
export const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  const [down, setDown] = React.useState(false)
  const buttonTheme = props.theme ? props.theme : "default";

  return (
    <Container
      jumbo={props.jumbo}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      >
      <Inner
        type={props.type || null}
        outline={props.outline}
        jumbo={props.jumbo}
        theme={buttonTheme}
        className={down ? "active" : ""}>
        {props.icon && (
          <Icon jumbo={props.jumbo}>
            {props.icon}
          </Icon>
        )}
        <Text
          icon={props.icon}
          theme={buttonTheme}
          jumbo={props.jumbo}
          onClick={props.onClick}>
          {props.text}
        </Text>
      </Inner>
    </Container>
  );
};
