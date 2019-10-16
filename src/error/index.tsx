import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  background: #ee716c;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.1s linear;
  z-index: 10000;
`;

const Text = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

interface IErrorProps {
  message?: string;
}

export const Error: React.FunctionComponent<IErrorProps> = (props: IErrorProps) => {
  if (!props.message) return null;

  return (
    <Container>
      <Text>{props.message}</Text>
    </Container>
  );
};
