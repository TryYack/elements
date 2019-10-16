import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  width: 30px;
  position: relative;
  height: 17px;
  border: 1px solid #F1F3F5;
  box-shadow: 0px 0px 16px -9px rgba(0,0,0,0.75);
  cursor: pointer;
  overflow: hidden;
  border-radius: 100px;
`;

const Circle = styled.div<{
  on: boolean;
}>`
  position: absolute;
  top: 0px;
  left: ${props => props.on ? "13px" : "0px"};
  background-color: ${props => props.on ? "#007af5" : "#e8ecee"};
  border-radius: 50%;
  transition: left 0.5s, background-color 0.5s;
  width: 15px;
  height: 15px;
`;

interface IToggleProps {
  on: boolean;
  onChange: any;
}

export const Toggle: React.FunctionComponent<IToggleProps> = (props: IToggleProps) => {
  const [on, setOn] = React.useState(props.on);

  React.useEffect(() => setOn(props.on), [props.on]);

  return (
    <Container onClick={() => {
      props.onChange(!on);
      setOn(!on);
    }}>
      <Circle on={on} />
    </Container>
  );
};
