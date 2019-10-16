import * as React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@material-ui/icons";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  z-index: 10;
  transition: visibility 0s, opacity 0.1s linear;
`;

const Inner = styled.div`
  background: white;
  border-radius: 5px;
`;

const InnerContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px;
`;

const TitleText = styled.div`
  flex: 1;
  color: #202529;
  font-size: 28px;
  font-weight: 600;
`;

interface IModalProps {
  children: any;
  title: string;
  width: number;
  height: any;
  onClose: any;
  footer: any;
}

export const Modal: React.FunctionComponent<IModalProps> = (props: IModalProps) => {
  return (
    <Container>
      <Inner className="column" style={{ width: props.width, height: props.height }}>
        <Title className="row">
          <TitleText>{props.title}</TitleText>
          <CloseOutlined
            htmlColor="#524150"
            fontSize="large"
            className="button"
            onClick={props.onClose}
          />
        </Title>
        <InnerContainer>
          {props.children}
        </InnerContainer>
        {props.footer}
      </Inner>
    </Container>
  );
};
