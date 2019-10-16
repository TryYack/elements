import * as React from "react";
import styled from "styled-components";

const PanelContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const PanelTitles = styled.div`
  border-right: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;
  min-height: 200px;
`;

const Panels = styled.div<{
  current: number;
}>`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  transform: translateX(${props => props.current * -100}%);
`;

const PanelsContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  overflow: hidden;
`;

const PanelTabButton = styled.div`
  padding: 10px 20px 10px 20px;
  color: #dcd8db;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;

  &.active {
    color: #00a8ff;
  }
`;

const Panel = styled.div<{
  index: number;
}>`
  position: absolute;
  background: white;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  transform: translateX(${props => props.index * 100}%);
`;

interface ITabbedProps {
  start: number;
  panels: any;
}

export const Tabbed: React.FunctionComponent<ITabbedProps> = (props: ITabbedProps) => {
  const [current, setCurrent] = React.useState(props.start);

  return (
    <PanelContainer>
      <PanelTitles>
        {props.panels.map((panel: any, index: number) => {
          if (!panel.show) return null;

          return (
            <PanelTabButton
              key={index}
              className={current == index ? "active" : ""}
              onClick={() => setCurrent(index)}>
              {panel.title}
            </PanelTabButton>
          );
        })}
      </PanelTitles>
        
      <PanelsContainer>
        <Panels current={current}>
          {props.panels.map((panel: any, index: number) => {
            if (!panel.show) return null;

            return (
              <Panel key={index} index={index}>
                {panel.content}
              </Panel>
            );
          })}
        </Panels>
      </PanelsContainer>
    </PanelContainer>
  );
};
