import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Avatar } from "../avatar";
import { Popup } from "../popup";
import { Menu } from "../menu";
import { BellOff } from "react-feather";
import { EyeOff } from "react-feather";
import { MoreHorizontal } from "react-feather";

const Container = styled.div<{
  active: boolean;
  unread: number;
  onClick: any;
}>`
  background: ${props => props.active ? "#111" : "transparent" };
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
`;

const ContainerPadding = styled.div`
  flex: 1;
  padding: 3px 25px 3px 25px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
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
  margin-left: 5px;
`;

const Title = styled.div<{
  active: boolean,
}>`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.active ? "white" : "#626d7a" };
  white-space: wrap;
  max-width: 140px;
  /*letter-spacing: -0.5px;*/
  margin-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Excerpt = styled.div`
  flex: 1;
  margin-top: 1px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
`;

const ExcerptText = styled.span<{
  active: boolean,
}>`
  font-size: 13px;
  color: #626d7a;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  max-width: 200px;
`;

const Contents = styled.div`
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

const MoreIcon = styled.span`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s;
  display: inline-block;
  z-index: 5;
  right: 0px;
  top: 0px;
  display: flex;
  margin-left: 5px;
  margin-right: 4px;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  &:hover {
    opacity: 0.75;
  }
`;

const Flex = styled.div`
  flex: 1;
`;

interface IChannelProps {
  dark?: boolean;
  active: boolean;
  muted?: boolean;
  archived?: boolean;
  unread: number;
  title: string;
  image: string;
  icon?: string;
  label?: string;
  excerpt: string;
  public: boolean;
  private: boolean;
  presence?: string;
  onClick?: any;
  onMutedClick?: any;
  onArchivedClick?: any;
}

export const Channel: React.FunctionComponent<IChannelProps> = (props: IChannelProps) => {
  const [over, setOver] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Container
      onClick={props.onClick ? props.onClick : null}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => {
        setOver(false);
        setMenu(false);
      }}
      unread={props.unread}
      active={props.active}>
      <ContainerPadding>
        <Avatar
          dark
          presence={props.presence}
          size="medium"
          image={props.image}
          title={props.title}
        />

        <Contents>
          <InnerContents>
            <Title active={props.active || (props.unread != 0)}>
              {props.title}
            </Title>

            {props.muted &&
              <BellOff
                color="#626d7a"
                size="15"
                thickness="1.5"
                style={{ marginRight: 5 }}
              />
            }

            {!props.public && !props.private &&
              <EyeOff
                color="#626d7a"
                size="15"
                thickness="1.5"
              />
            }

            <Flex />

            {over && props.onMutedClick && props.onArchivedClick &&
              <Popup
                handleDismiss={() => setMenu(false)}
                visible={menu}
                width={200}
                direction="right-bottom"
                content={
                  <Menu
                    items={[
                      { text: props.archived ? "Unarchive" : "Archive", onClick: (e: any) => {
                        props.onArchivedClick();
                      } },
                      { text: props.muted ? "Unmute" : "Mute", onClick: (e: any) => {
                        props.onMutedClick();
                      } },
                    ]}
                  />
                }>
                <MoreIcon
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setMenu(true);
                  }}>
                  <MoreHorizontal
                    color="#626d7a"
                    size="15"
                    thickness="1.5"
                  />
                </MoreIcon>
              </Popup>
            }

            {!over && props.unread > 0 &&
              <Badge>{props.unread}</Badge>
            }
          </InnerContents>

          {props.excerpt &&
            <Excerpt>
              <ExcerptText active={props.active || (props.unread != 0)}>{props.excerpt}</ExcerptText>
            </Excerpt>
          }
        </Contents>
      </ContainerPadding>
    </Container>
  );
};
