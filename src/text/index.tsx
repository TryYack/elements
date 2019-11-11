import * as React from "react";
import styled from "styled-components";

const Container = styled.div<{
  onClick?: string;
  color: string;
  display: string | undefined;
  weight: string | undefined;
}>`
  color: ${props => {
    switch (props.color) {
      case "xxxd":
        return "#11161c";
      case "xxd":
        return "#202934";
      case "xd":
        return "#5F6B7A";
      case "d":
        return "#8895A7";
      case "m":
        return "#B8C4CE";
      case "l":
        return "#CFD6DE";
      case "xl":
        return "#E1E7EB";
      case "xxl":
        return "#F8F9FA";
      case "highlight":
        return "#00a8ff";
      case "danger":
        return "#DC2F30";
      default:
        return "#483545";
    }
  }};
  font-size: ${props => {
    switch (props.display) {
      case "h1":
        return "50px";
      case "h2":
        return "40px";
      case "h3":
        return "30px";
      case "h4":
        return "20px";
      case "h5":
        return "15px";
      case "p":
        return "13px";
      case "small":
        return "10px";
      default:
        return "13px";
    }
  }};
  font-weight: ${props => props.weight};
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  cursor: ${props => props.onClick ? "pointer" : "default"}
  opacity: 1;
  transition: opacity 0.5s;

  &:hover {
    opacity: ${props => props.onClick ? 0.75 : 1}
  }
`;

interface ITextProps {
  /**
   * The usual font weights 100 - 900
   */
  weight?: string | undefined;

  /**
   * Possible values:
   * - xxd
   * - xd
   * - d
   * - m
   * - l
   * - xl
   * - xxl
   * - highlight
   * - Danger
   */
  color: string;

  /**
   * Possible values:
   * - h1
   * - h2
   * - h3
   * - h4
   * - h5
   * - p
   * - a
   * - small
   */
  display?: string | undefined;
  onClick?: any;
  style?: any;
  children: any;
}

export const Text: React.FunctionComponent<ITextProps> = (props: ITextProps) => {
  return (
    <Container
      style={props.style}
      onClick={props.onClick}
      weight={props.weight}
      color={props.color}
      display={props.display}
      {...props}>
      {props.children}
    </Container>
  );
};

Text.defaultProps = {
  weight: "400",
  color: "xxd",
  display: "p",
};
