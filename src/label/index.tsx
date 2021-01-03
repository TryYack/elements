import * as React from "react";
import styled from "styled-components";

const LabelText = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #CFD4D9;
  text-transform: uppercase;
`;


interface ILabelProps {
  children: any;
  style?: any;
}

export const Label: React.FunctionComponent<ILabelProps> = (props: ILabelProps) => {
  const styles: any = props.style ? props.style : {};
  return (
    <LabelText style={styles}>
      {props.children}
    </LabelText>
  );
};
