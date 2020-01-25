import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #626d7a;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Field = styled.textarea<{
  label: string;
  textareaSize?: string;
}>`
  border: none;
  flex: 1;
  outline: none;
  background: transparent;
  color: #495057;
  font-size: ${props => {
    switch (props.textareaSize) {
      case "large":
        return "24px";
      default:
        return "14px";
    }
  }};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 1px solid #ebedef;
  border-radius: 10px;
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
  textareaSize?: string;
  className?: string;
}

export const Textarea: React.FunctionComponent<ITextareaProps> = (props: ITextareaProps) => {
  return (
    <React.Fragment>
      <Label>{props.label}</Label>
      <Field {...props} />
    </React.Fragment>
  );
};

Textarea.defaultProps = {
  textareaSize: "default",
  className: "",
};
