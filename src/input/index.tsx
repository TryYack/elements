import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #8895a7;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const InputField = styled.input<{
  label: string;
  inputSize?: string;
}>`
  border: none;
  flex: 1;
  outline: none;
  background: transparent;
  color: #343a40;
  font-size: ${props => {
    switch (props.inputSize) {
      case "large":
        return "24px";
      default:
        return "13px";
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
