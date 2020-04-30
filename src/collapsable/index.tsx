import * as React from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "react-feather";

const CollapsableContainer = styled.div`
  width: 100%;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  &.open {
    max-height: 500px;
    overflow: visible;
    transition: max-height 0.25s ease-in;
  }
`;

const Container = styled.div`
  width: 100%;
`;

interface ICollapsableProps {
  /** Text title */
  title: string;

  /** Any React children */
  children: any;

  /** Opetional className */
  className?: string;
}

export const Collapsable: React.FunctionComponent<ICollapsableProps> = (props: ICollapsableProps) => {
  const [open, setOpen] = React.useState(false);
  const containerClasses = props.className ? props.className + " row w-100" : "row w-100";

  return (
    <Container>
      <div className={containerClasses}>
        <div className="p regular color-d2 flexer">{props.title}</div>

        {open &&
          <ChevronUp
            color="#acb5bd"
            size="16"
            thickness="3"
            className="button"
            onClick={() => setOpen(!open)}
          />
        }

        {!open &&
          <ChevronDown
            color="#acb5bd"
            size="16"
            thickness="3"
            className="button"
            onClick={() => setOpen(!open)}
          />
        }
      </div>
      <CollapsableContainer className={open ? "open" : ""}>
        {props.children}
      </CollapsableContainer>
    </Container>
  );
};

Collapsable.defaultProps = {
  className: "",
};
