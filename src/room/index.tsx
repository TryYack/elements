import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Avatar } from "../avatar";
import { Popup } from "../popup";
import { Menu } from "../menu";

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
  cursor: pointer;
`;

const ContainerPadding = styled.div`
  flex: 1;
  padding: 4px 25px 4px 25px;
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
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? "white" : "#475669" };
  white-space: wrap;
  max-width: 140px;
  letter-spacing: -0.5px;
  margin-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Excerpt = styled.div`
  flex: 1;
  margin-top: 4px;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
`;

const ExcerptText = styled.span`
  font-size: 11px;
  color: #475669;
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

interface IRoomProps {
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

export const Room: React.FunctionComponent<IRoomProps> = (props: IRoomProps) => {
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
          style={{ opacity: props.active || props.unread ? 1 : 0.5 }}
        />

        <Contents>
          <InnerContents>
            <Title active={props.active || (props.unread != 0)}>
              {props.title}
            </Title>

            {props.muted &&
              <svg
                width="20"
                height="20"
                style={{ marginRight: 5 }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="lock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512">
                <path fill="#475669" d="M320 480c-17.7 0-32-14.4-32-32h-32c0 35.3 28.7 64 64 64s64-28.7 64-64h-32c0 17.6-14.3 32-32 32zm0-416c70.8 0 128 54.5 128 121.9 0 63.2 9.4 101.6 25 129.5l70.7 55.7c.7-13.4-4.2-26.6-14.4-36.3-28-26.6-49.3-54.5-49.3-148.9 0-79.6-63.4-144.5-144-152.3V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v17.6c-43.9 4.2-84.2 26.2-111.5 60.9l24.7 19.4C240.4 83.8 277.7 64 320 64zm317 421.2L23 1.8C19.6-1 14.5-.5 11.8 3l-10 12.5C-1 19-.4 24 3 26.7l614 483.5c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.3-8.5-1.2-11.3zM144 384c-14.2 0-21.3-16.5-11.3-26 31.2-29.7 53.9-63 58.3-142.4L159.8 191c-.8 90-21.8 117.7-49.2 143.8-14 13.3-18.4 33.4-11.2 51.2 7.3 18.2 24.8 30 44.6 30h301.6L405 384z"></path>
              </svg>
            }

            {!props.public && !props.private &&
              <svg
                width="15"
                height="15"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="lock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  fill="#475669"
                  d="M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z">
                </path>
              </svg>
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
                  <svg
                    width="15"
                    height="15"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="lock"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      fill="#475669"
                      d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z">
                    </path>
                  </svg>
                </MoreIcon>
              </Popup>
            }

            {!over && props.unread > 0 &&
              <Badge>{props.unread}</Badge>
            }
          </InnerContents>

          {props.excerpt &&
            <Excerpt>
              <ExcerptText>{props.excerpt}</ExcerptText>
            </Excerpt>
          }
        </Contents>
      </ContainerPadding>
    </Container>
  );
};
