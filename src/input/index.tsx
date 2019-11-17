import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  color: #858e96;
  font-size: 11px;
  font-weight: 500;
  padding-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const InputField = styled.input<{
  label: string;
  inputSize?: string;
}>`
  border: none;
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  outline: none;
  background: transparent;
  color: #495057;
  font-size: ${props => {
    switch (props.inputSize) {
      case "large":
        return "24px";
      default:
        return "14px";
    }
  }};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 1px solid #edf0f2;
  border-radius: 5px;
  resize: none;
  display: block;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;

interface IInputProps {
  /** Label above field */
  label?: string;
  value: string;
  onChange: any;
  placeholder: string;
  /** size props is taken already */
  inputSize?: string;
  className?: string;
}

export const Input: React.FunctionComponent<IInputProps> = (props: IInputProps) => {
  return (
    <React.Fragment>
      {props.label &&
        <Label>{props.label}</Label>
      }

      <InputField {...props} label={props.label || ""} />
    </React.Fragment>
  );
};

Input.defaultProps = {
  inputSize: "default",
  className: "",
};
