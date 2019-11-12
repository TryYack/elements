import * as React from "react";
interface IModalProps {
    children?: any;
    title: string;
    width: number;
    height: any;
    onClose: any;
    footer?: any;
    frameless?: boolean;
}
export declare const Modal: React.FunctionComponent<IModalProps>;
export {};
