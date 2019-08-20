import * as React from "react";
import styled from "styled-components";

const Container = styled.div<{ size?: string }>`
  width: ${props => {
    if (props.size === "small") return "150";
    if (props.size === "medium") return "200";
    if (props.size === "large") return "250";
    
    return "200";
  }}px;
  position: relative;
  display: inline-block;
`;

const Inner = styled.div<{ size?: string }>`
  background-color: #007af5;
  color: white;
  font-size: 25px;
  font-weight: 600;
  padding: ${props => {
    if (props.size === "small") return "10px 20px 10px 20px";
    if (props.size === "medium") return "15px 25px 15px 25px";
    if (props.size === "large") return "20px 30px 20px 30px";
    
    return "15px 25px 15px 25px";
  }};
  border-radius: 5px;
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: ${props => {
    if (props.size === "small") return "8";
    if (props.size === "medium") return "12";
    if (props.size === "large") return "16";

    return "12";
  }}px;

  &:hover {
    background-color: #0f081f;
    color: #007af5;
  }

  &:first-child {
    margin-right: 5px;
  }
`;

interface IButtonProps {
  /**
   * Value to display, either empty (" ") or string value
   *
   * @default " "
   */
  text: string;

  /** 
   * Possible string values:
   * - "small"
   * - "medium"
   * - "large"
   */
  size?: any;

  /** Called when an empty cell is clicked. */
  onClick?: any;
}

/**
 * Button component. 
 */
export const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
  return (
    <Container size={props.size}>
      <Inner
        className="inner"
        size={props.size}
        onClick={props.onClick}>
        {props.text}
      </Inner>
    </Container>
  );
};
