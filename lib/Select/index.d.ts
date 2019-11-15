import * as React from "react";
interface ISelectProps {
    /** When a user presses enter or clicks */
    onSelect: any;
    /** The selected item in the options array */
    selected: number;
    /** The options item: { option: 'Visited', value: true } */
    size?: string | undefined;
    /** The options item: { option: 'Visited', value: true } */
    options: any[];
}
interface ISelectState {
    index: number;
    visible: boolean;
}
export declare class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: ISelectProps);
    handleKeyPress(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
