import * as React from "react";
import styled from "styled-components";
import { Popup } from "../popup";
import { ChevronDown } from "react-feather";

const Label = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #8895a7;
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const ListContainer = styled.div<{
  height: number,
  size: string | undefined,
}>`
  width: 100%;
  background: white;
  position: relative;
  height: ${props => {
    switch (props.size) {
      case "large": return props.height * 41;
      default: return props.height * 31;
    }
  }}px;
  max-height: ${props => {
    switch (props.size) {
      case "large": return 5 * 41;
      default: return 5 * 31;
    }
  }}px;
  overflow: scroll;
`;

const Item = styled.div<{
  active: boolean,
  size: string | undefined,
}>`
  padding-left: 10px;
  padding-right: 10px;
  height: ${props => {
    switch (props.size) {
      case "large": return "40px";
      default: return "30px";
    }
  }};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  border-top: 1px solid #edf0f2;
  border: 4px solid #f1f3f5;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.02);
  opacity: 1;
  transition: background 0.25s;
  background: ${props => (props.active ? "#f8f9fa" : "transparent")};

  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 3px #cfd4da;
  }
  
  &:hover {
    background: #f8f9fa;
  }
`;

const ItemText = styled.div<{
  size: string | undefined,
}>`
  color: #8895a7;
  font-size: ${props => {
    switch (props.size) {
      case "large": return "23px";
      default: return "13px";
    }
  }};
  font-weight: 400;
`;

const InnerContainer = styled.div<{ size: string | undefined }>`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
  height: ${props => {
    switch (props.size) {
      case "large": return "40px";
      default: return "30px";
    }
  }};
`;

const Text = styled.div<{ size: string | undefined }>`
  color: #343a40;
  font-size: ${props => {
    switch (props.size) {
      case "large": return "23px";
      default: return "13px";
    }
  }};
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.75;
  }
`;

const Button = styled.div`
  cursor: pointer;
  padding-left: 5px;
  padding-right: 15px;
  height: 20px;
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.5;
  }
`;

const Container = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  border: 1px solid #edf0f2;
  border-radius: 5px;
  position: relative;
`;


interface ISelectProps {
  /** When a user presses enter or clicks */
  onSelect: any;

  /** The selected item in the options array */
  selected: number;

  /** The options item: { option: 'Visited', value: true } */
  size?: string | undefined;

  /** The options item: { option: 'Visited', value: true } */
  options: any[];
  label?: string;
}

interface ISelectState {
  index: number;
  visible: boolean;
}

export class Select extends React.Component<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);

    this.state = { index: 0, visible: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  public handleKeyPress(e: any) {
    // Move up
    if (e.keyCode == 38) this.setState({ index: this.state.index - 1 < 0 ? this.props.options.length - 1 : this.state.index - 1 });

    // Move down
    if (e.keyCode == 40) this.setState({ index: this.state.index + 1 == this.props.options.length ? 0 : this.state.index + 1 });

    // Press enter
    if (e.keyCode == 13) {
      if (this.props.options.length > 0) this.props.onSelect(this.state.index);
    }
  }

  public componentDidMount() {
    document.addEventListener("keyup", this.handleKeyPress);
  }

  public componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyPress);
  }

  // prettier-ignore
  public render() {
    return (
      <React.Fragment>
        {this.props.label &&
          <Label>{this.props.label}</Label>
        }

        <Container>
          <Popup
            visible={this.state.visible}
            handleDismiss={() => this.setState({ visible: false })}
            direction="left-bottom"
            width="100%"
            content={
              <ListContainer
                size={this.props.size}
                height={this.props.options.length}>
                {this.props.options.map((item, index) => {
                  return (
                    <Item
                      size={this.props.size}
                      active={index == this.state.index}
                      key={index}
                      onClick={() => {
                        this.setState({ visible: false });
                        this.props.onSelect(index);
                      }}>
                      <ItemText size={this.props.size}>
                        {item.option}
                      </ItemText>
                    </Item>
                  );
                })}
              </ListContainer>
            }>
            <InnerContainer size={this.props.size} >
              <Text
                size={this.props.size}
                onClick={() => this.setState({ visible: true })}>
                {this.props.options[this.props.selected].option}
              </Text>
              <Button onClick={() => this.setState({ visible: true })}>
                <ChevronDown
                  color="#343a40"
                  size="20"
                  thickness="1.5"
                />
              </Button>
            </InnerContainer>
          </Popup>
        </Container>
      </React.Fragment>
    );
  }
}
