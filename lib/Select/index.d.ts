import * as React from "react";
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
export declare class Select extends React.Component<ISelectProps, ISelectState> {
    static getDerivedStateFromProps(props: ISelectProps, state: ISelectState): {
        list: any[];
    };
    constructor(props: ISelectProps);
    handleKeyPress(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
