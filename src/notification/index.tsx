import * as React from "react";
import styled from "styled-components";
import { X } from "react-feather";

const Container = styled.div`
  background-color: #e3f5ff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  height: 30px;
`;

const Padding = styled.div`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  text-align: center;
`;

const ActionText = styled.span`
  color: #05A6FF;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
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
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.span`
  color: #05A6FF;
  font-size: 12px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

interface INotificationProps {
  text: string;

  /** Text next to main text */
  actionText?: string;

  /** When user click on text next to main text */
  onActionClick?: any;
  onDismissIconClick?: any;
  onDismiss?: any;
}

export const Notification: React.FunctionComponent<INotificationProps> = (props: INotificationProps) => {
  let [notificationMessage, setNotificationMessage] = React.useState("");

  React.useEffect(() => {
    if (props.text != notificationMessage) {
      // update our error message
      setNotificationMessage(props.text)
    }
  }, [props.text])

  return (
    <Container>
      <Padding>
        <Text onClick={() => props.onDismiss ? props.onDismiss() : null}>
          {notificationMessage}
        </Text>
        {props.actionText &&
          <ActionText onClick={props.onActionClick}>
            {props.actionText}
          </ActionText>
        }
      </Padding>
      {props.onDismissIconClick &&
        <Icon onClick={props.onDismissIconClick}>
          <X
            color="#05A6FF"
            size="20"
            thickness="1.5"
          />
        </Icon>
      }
    </Container>
  );
};
