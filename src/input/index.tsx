import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  color: #858e96;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const InputField = styled.input<{
  label: string;
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
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  width: 100%;
  border: 1px solid #ebedef;
  border-radius: 5px;
  resize: none;
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;

  &::placeholder {
    color: #acb5bd;
  }
`;

interface IInputProps {
  /** Label above field */
  label: string;
  value: string;
  onChange: any;
  placeholder: string;
}

export const Input: React.FunctionComponent<IInputProps> = (props: IInputProps) => {
  return (
    <React.Fragment>
      <Label>{props.label}</Label>
      <InputField {...props} />
    </React.Fragment>
  );
};
