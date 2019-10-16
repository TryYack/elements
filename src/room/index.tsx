import React, { useState } from 'react'
import { Avatar } from '../avatar'
import styled from 'styled-components'
import { LockOutlined } from '@material-ui/icons'

const Container = styled.div<{ 
  active: boolean;
  unread: number;
  onClick: any;
}>`
  background: ${props => props.active ? "#0c1828" : "transparent" };
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
`

const Badge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #007af5;
`

const Icon = styled.div`
  padding-left: 0px;
  padding-right: 0px;
`

const Title = styled.div<{ 
  active: boolean 
}>`
  overflow: hidden;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? "white" : "#475669" };
  white-space: nowrap;
  width: max-content;
`

const Excerpt = styled.div`
  font-size: 11px;
  color: #475669;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  margin-top: 4px;
`

const Contents = styled.div`
  overflow: hidden;
  align-items: stretch;
  margin-right: 25px;
`

interface IRoomProps {
  dark: boolean;
  active: boolean;
  unread: number;
  title: string;
  image: string;
  icon: string;
  label: string;
  excerpt: string
  public: boolean;
  private: boolean;
  onClick: any;
}

export const Room: React.FunctionComponent<IRoomProps> = (props: IRoomProps) => {
  const [over, setOver] = useState(false)

  // prettier-ignore
  return (
    <Container
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onClick={props.onClick ? props.onClick : null}
      unread={props.unread}
      active={props.active}>
        <Avatar
          dark
          size="medium"
          image={props.image}
          title={props.title}
          className="mr-10 ml-25"
          style={{ opacity: props.active || props.unread ? 1 : 0.5 }}
        />

        <Contents className="column flexer">
          <div className="row flexer">
            <Title active={props.active || props.unread}>
              {props.title}
            </Title>

            {!props.public && !props.private &&
              <LockOutlined
                htmlColor="#475669"
                fontSize="small"
                className="ml-5"
              />
            }

            <div className="flexer"></div>

            {props.unread && <Badge />}
          </div>

          {props.excerpt &&
            <Excerpt>
              {props.excerpt}
            </Excerpt>
          }
        </Contents>
      </Container>
  )
}
