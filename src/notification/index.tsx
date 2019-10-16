import * as React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@material-ui/icons";

const Container = styled.div`
  background-color: #05A6FF;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;

const Padding = styled.div`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
`;

const ActionText = styled.span`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 800;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: underline;
`;

const Icon = styled.span`
  margin-left: auto;
  height: 22px;
  width: 22px;
  cursor: pointer;
`;

const Text = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

interface INotificationProps {
  text: string;
  actionText?: string;
  onActionClick?: any;
  onDismissClick?: any;
}

export const Notification: React.FunctionComponent<INotificationProps> = (props: INotificationProps) => {
  return (
    <Container>
      <Padding>
        <Text>
          {props.text}
        </Text>
        {props.actionText &&
          <ActionText onClick={props.onActionClick}>
            {props.actionText}
          </ActionText>
        }
        {props.onDismissClick &&
          <Icon>
            <CloseOutlined
              htmlColor="white"
              fontSize="default"
              onClick={props.onDismissClick}
            />
          </Icon>
        }
      </Padding>
    </Container>
  );
};
