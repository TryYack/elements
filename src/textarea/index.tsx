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

const Field = styled.textarea<{
  label: string;
}>`
  border: none;
  flex: 1;
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
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #acb5bd;
  }
`;

interface ITextareaProps {
  label: string;
  value: string;
  onChange: any;
  placeholder: string;
  rows: number;
}

export const Textarea: React.FunctionComponent<ITextareaProps> = (props: ITextareaProps) => {
  return (
    <React.Fragment>
      <Label>{props.label}</Label>
      <Field {...props} />
    </React.Fragment>
  );
};
