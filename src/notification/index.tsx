import * as React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@material-ui/icons";

const Container = styled.div`
  background-color: #05A6FF;
  width: 100%;
`;

const Padding = styled.div`
  flex: 1;
  padding: 5px;
`;

const ActionText = styled.span`
  color: white;
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
`;

const Text = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

interface INotificationProps {
  text: string;
  actionText: string;
  onActionClick: any;
  onDismissClick: any;
}

export const Notification: React.FunctionComponent<INotificationProps> = (props: INotificationProps) => {
  return (
    <Container className="row">
      <Padding className="row">
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
              className="button"
              onClick={props.onDismissClick}
            />
          </Icon>
        }
      </Padding>
    </Container>
  );
};
