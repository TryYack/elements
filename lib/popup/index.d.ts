import * as React from "react";
interface IPopupProps {
    visible: boolean;
    handleDismiss: any;
    containerClassName?: string;
    children: any;
    /**
     * Possible values:
     * - "left-top"
     * - "right-top"
     * - "left-bottom"
     * - "right-bottom"
     */
    direction: string;
    width: number | string;
    maxHeight?: number | string;
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
