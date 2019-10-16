import * as React from "react";
interface IMembersProps {
    /** When a user presses enter or clicks */
    handleAccept: any;
    /** { user: { id: '5', name: 'Jon Doe', username: 'jondoe', image: 'https://usepanda.com/img/source-icons/theNextWeb.png' }} */
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
