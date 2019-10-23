import * as React from "react";
import styled from "styled-components";
import { Avatar } from "../avatar";
import { LockOutlined } from "@material-ui/icons";

const Container = styled.div<{
  active: boolean;
  unread: number;
  onClick: any;
}>`
  background: ${props => props.active ? "#0c1828" : "transparent" };
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;

const ContainerPadding = styled.div`
  flex: 1;
  padding: 4px 25px 4px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;

const Badge = styled.div`
  padding: 3px 7px 3px 7px;
  border-radius: 10px;
  background-color: #007af5;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 8px;
  color: white;
  font-weight: 700;
`;

const Title = styled.div<{
  active: boolean,
}>`
  overflow: hidden;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? "white" : "#475669" };
  white-space: nowrap;
  width: max-content;
  margin-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Excerpt = styled.div`
  font-size: 11px;
  color: #475669;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  margin-top: 4px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Contents = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
  flex: 1;
  padding-left: 10px;
`;

const InnerContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
`;

const Flex = styled.div`
  flex: 1;
`;

interface IRoomProps {
  dark?: boolean;
  active: boolean;
  unread: number;
  title: string;
  image: string;
  icon?: string;
  label?: string;
  excerpt: string;
  public: boolean;
  private: boolean;
  heartbeat?: Date;
  onClick?: any;
}

export const Room: React.FunctionComponent<IRoomProps> = (props: IRoomProps) => {
  return (
    <Container
      onClick={props.onClick ? props.onClick : null}
      unread={props.unread}
      active={props.active}>
      <ContainerPadding>
        <Avatar
          dark
          heartbeat={props.heartbeat}
          size="medium"
          image={props.image}
          title={props.title}
          style={{ opacity: props.active || props.unread ? 1 : 0.5 }}
        />

        <Contents>
          <InnerContents>
            <Title active={props.active || (props.unread != 0)}>
              {props.title}
            </Title>

            {!props.public && !props.private &&
              <LockOutlined
                htmlColor="#475669"
                fontSize="small"
              />
            }

            <Flex />

            {props.unread > 0 &&
              <Badge>{props.unread}</Badge>
            }
          </InnerContents>

          {props.excerpt &&
            <Excerpt>
              {props.excerpt}
            </Excerpt>
          }
        </Contents>
      </ContainerPadding>
    </Container>
  );
};
