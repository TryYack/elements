import * as React from "react";
interface IPopupProps {
    visible: boolean;
    handleDismiss: any;
    containerClassName?: string;
    children: any;
    direction: string;
    width: number;
    content: any;
}
interface IPopupState {
    visible: boolean;
}
export declare class Popup extends React.Component<IPopupProps, IPopupState> {
    static getDerivedStateFromProps(props: IPopupProps, state: IPopupState): {
        visible: boolean;
    };
    wrapperRef: any;
    rootRef: any;
    constructor(props: IPopupProps);
    hidePopup(): void;
    handleClickOutside(event: any): void;
    handleKeyPress(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
