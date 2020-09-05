import * as React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #8895a7;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const Field = styled.textarea<{
  label: string;
  textareaSize?: string;
}>`
  border: none;
  flex: 1;
  outline: none;
  background: white;
  color: #343a40;
  font-size: ${props => {
    switch (props.textareaSize) {
      case "large":
        return "24px";
      default:
        return "13px";
    }
  }};
  font-weight: 400;
  padding: 10px;
  width: 100%;
  border: 1px solid #ebedef;
  border: 4px solid #f1f3f5;
  border-radius: 5px;
  resize: none;
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.02);

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 3px #cfd4da;
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
    <div className="flexer">
      <Label>{props.label}</Label>
      <Field {...props} />
    </div>
  );
};

Textarea.defaultProps = {
  textareaSize: "default",
  className: "",
};
