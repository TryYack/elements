import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #8895a7;
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
  background: white;
  color: #343a40;
  font-size: ${props => {
    switch (props.inputSize) {
      case "large":
        return "24px";
      default:
        return "13px";
    }
  }};
  font-weight: 500;
  padding: 10px;
  width: 100%;
  border: 1px solid #edf0f2;
  border: 4px solid #f1f3f5;
  border-radius: 7px;
  resize: none;
  display: block;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.02);

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    border: 2px solid #f1f3f5;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 3px #cfd4da;
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
    <div className="flexer w-100">
      {props.label &&
        <Label>{props.label}</Label>
      }

      <InputField {...props} label={props.label || ""} />
    </div>
  );
};

Input.defaultProps = {
  inputSize: "default",
  className: "",
};
