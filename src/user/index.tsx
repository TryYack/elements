import * as React from "react";
import styled from "styled-components";
import { Avatar } from "../avatar";

const Name = styled.div`
  color: #483545;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Label = styled.div`
  color: #858e96;
  font-size: 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Container = styled.div<{
  active: boolean;
}>`
  width: 100%;
  background: ${props => (props.active ? "#f8f9fa" : "transparent")};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #edf0f2;
  cursor: pointer;
`;

const Content = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const Flex = styled.div`
  flex: 1;
`;

const ContainerPadding = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

interface IUserProps {
  image: string;
  name: string;
  label: string;
  children?: any;
  onClick: any;
  active: boolean;
}

export const User: React.FunctionComponent<IUserProps> = (props: IUserProps) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Container
      active={props.active}
      onClick={props.onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ContainerPadding>
        <Avatar
          size="medium"
          image={props.image}
          title={props.name}
        />

        <Content>
          <Name>{props.name}</Name>
          <Label>{props.label}</Label>
        </Content>

        <Flex />

        {hover &&
          <React.Fragment>
            {props.children}
          </React.Fragment>
        }
      </ContainerPadding>
    </Container>
  );
};
