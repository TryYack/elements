import * as React from "react";
import styled from "styled-components";
import { Avatar } from "../avatar";
import { Text } from "../text";

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
          <Text weight="500" color="xxd">{props.name}</Text>
          <Text color="xd">{props.label}</Text>
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
