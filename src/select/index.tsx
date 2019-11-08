import * as React from "react";
import styled from "styled-components";
import { Popup } from "../popup";
import { ChevronDown } from "react-feather";

const ListContainer = styled.div<{ size: number }>`
  width: 100%;
  background: white;
  position: relative;
  height: ${props => props.size * 31}px;
  max-height: ${5 * 31}px;
  overflow: scroll;
`;

const Item = styled.div<{ active: boolean }>`
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  border-top: 1px solid #edf0f2;
  opacity: 1;
  transition: background 0.25s;
  background: ${props => (props.active ? "#f8f9fa" : "transparent")};

  &:hover {
    background: #f8f9fa;
  }
`;

const ItemText = styled.div`
  color: #858e96;
  font-size: 14px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
`;

const InnerContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  border-radius: 5px;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 3px;
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

const Text = styled.div`
  color: #495057;
  font-size: 14px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans",
  "Droid Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
  flex: 1;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.75;
  }
`;


interface ISelectProps {
  /** When a user presses enter or clicks */
  onSelect: any;

  /** The selected item in the list array */
  selected: number;

  /** The list item: { text: 'Visited', value: true } */
  list: any[];
}

interface ISelectState {
  index: number;
  visible: boolean;
  list: any[];
}

export class Select extends React.Component<ISelectProps, ISelectState> {
  public static getDerivedStateFromProps(props: ISelectProps, state: ISelectState) {
    return {
      list: props.list.filter((item: any, index) => (index <= 5 ? true : false)),
    };
  }

  constructor(props: ISelectProps) {
    super(props);

    this.state = { index: 0, list: [], visible: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  public handleKeyPress(e: any) {
    // Move up
    if (e.keyCode == 38) this.setState({ index: this.state.index - 1 < 0 ? this.state.list.length - 1 : this.state.index - 1 });

    // Move down
    if (e.keyCode == 40) this.setState({ index: this.state.index + 1 == this.state.list.length ? 0 : this.state.index + 1 });

    // Press enter
    if (e.keyCode == 13) {
      if (this.state.list.length > 0) this.props.onSelect(this.state.list[this.state.index]);
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
      <Container>
        <Popup
          visible={this.state.visible}
          handleDismiss={() => this.setState({ visible: false })}
          direction="left-bottom"
          width="100%"
          content={
            <ListContainer size={this.state.list.length}>
              {this.state.list.map((item, index) => {
                return (
                  <Item
                    active={index == this.state.index}
                    key={index}
                    onClick={() => {
                      this.setState({ visible: false })
                      this.props.onSelect(item)
                    }}>
                    <ItemText>
                      {item.text}
                    </ItemText>
                  </Item>
                );
              })}
            </ListContainer>
          }>
          <InnerContainer>
            <Text onClick={() => this.setState({ visible: true })}>
              {this.props.list[this.props.selected].text}
            </Text>
            <Button onClick={() => this.setState({ visible: true })}>
              <ChevronDown
                color="#495057"
                size="20"
                thickness="1.5"
              />
            </Button>
          </InnerContainer>
        </Popup>
      </Container>
    );
  }
}
