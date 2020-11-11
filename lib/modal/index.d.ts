import * as React from "react";
interface IModalProps {
    children?: any;
    title: string;
    width: string | number;
    height: string | number;
    onClose: any;
    footer?: any;
    position?: string;
    header?: boolean;
    frameless?: boolean;
}
export declare const Modal: React.FunctionComponent<IModalProps>;
export {};
