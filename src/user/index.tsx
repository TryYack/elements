import { Avatar } from '../avatar'
import React, { useState } from 'react'
import styled from 'styled-components'

const Name = styled.div`
  color: #483545;
  font-size: 14px;
  font-weight: 500;
`

const Label = styled.div`
  color: #858e96;
  font-size: 12px;
  font-weight: 500;
`

const Container = styled.div<{
  active: boolean;
}>`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background: ${props => (props.active ? '#f8f9fa' : 'transparent')};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #edf0f2;
`

interface IUserProps {
  image: string;
  name: string;
  label: string;
  children: any;
  onClick: any;
  active: boolean;
}

export const User: React.FunctionComponent<IUserProps> = (props: IUserProps) => {
  const [hover, setHover] = useState(false)

  // prettier-ignore
  return (
    <Container
      active={props.active}
      onClick={props.onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Avatar
        className="small"
        image={props.image}
        title={props.name}
      />

      <div className="pl-10 column">
        <Name>{props.name}</Name>
        <Label>{props.label}</Label>
      </div>

      <div className="flexer"></div>

      {hover &&
        <React.Fragment>
          {props.children}
        </React.Fragment>
      }
    </Container>
  )
}
