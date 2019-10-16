import * as React from "react";
interface IMembersProps {
    handleAccept: any;
    members: any[];
}
interface IMembersState {
    index: number;
    members: any[];
}
export declare class Members extends React.Component<IMembersProps, IMembersState> {
    static getDerivedStateFromProps(props: IMembersProps, state: IMembersState): {
        members: any[];
    };
    constructor(props: IMembersProps);
    handleKeyPress(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
