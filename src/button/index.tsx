import * as React from "react";
import styled from "styled-components";

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

const Inner = styled.div<{
  jumbo?: boolean,
  theme?: string,
  outline?: boolean,
}>`
  height: ${props => {
    if (props.jumbo) return "80px";
    return "40px";
  }};
  border-radius: ${props => {
    if (props.jumbo) return "10px";
    return "6px";
  }};
  background-color: ${props => {
    if (props.theme == "muted") return "#F8F9FA";
    if (props.theme == "danger") return "#F8B6B7";
    if (props.theme == "blue") return "#EFF8FF";
    return "#007af5";
  }};
  color: ${props => {
    if (props.theme == "muted") return "#ADB5BD";
    if (props.theme == "danger") return "#8E2F29";
    if (props.theme == "blue") return "#007af5";
    return "white";
  }};
  border: ${props => {
    if (props.outline && !props.theme) return "1.5px solid #007af5";
    if (props.outline && props.theme == "muted") return "1.5px solid #ADB5BD";
    if (props.outline && props.theme == "danger") return "1.5px solid #8E2F29";
    if (props.outline && props.theme == "blue") return "1.5px solid #286BA4";
    return "none";
  }};
  box-sizing: border-box;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-size: cover;
  position: relative;
  transition: background-color 0.25s, color 0.25s, border 0.25s;
  cursor: pointer;

  &:hover {
    color: ${props => {
      if (props.theme == "muted") return "#0f081f";
      if (props.theme == "danger") return "white";
      if (props.theme == "blue") return "white";
      return "white";
    }};
    background-color: ${props => {
      if (props.theme == "muted") return "#F1F3F5";
      if (props.theme == "danger") return "#ED553B";
      if (props.theme == "blue") return "#007af5";
      return "#0f081f";
    }};

    border: ${props => {
      if (props.outline && !props.theme) return "2px solid #0f081f";
      if (props.outline && props.theme == "muted") return "2px solid #F1F3F5";
      if (props.outline && props.theme == "danger") return "2px solid #ED553B";
      if (props.outline && props.theme == "blue") return "2px solid #007af5";
      return "none";
    }};
  }
`;

const Text = styled.span<{
  jumbo?: boolean,
  theme?: string,
  icon?: any,
}>`
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
  margin: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
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
  return (
    <Container jumbo={props.jumbo}>
      <Inner
        outline={props.outline}
        jumbo={props.jumbo}
        theme={props.theme}>
        {props.icon && (
          <Icon jumbo={props.jumbo}>
            {props.icon}
          </Icon>
        )}
        <Text
          icon={props.icon}
          theme={props.theme}
          jumbo={props.jumbo}
          onClick={props.onClick}>
          {props.text}
        </Text>
      </Inner>
    </Container>
  );
};
