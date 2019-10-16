import * as React from "react";
interface IUserProps {
    image: string;
    name: string;
    label: string;
    children?: any;
    onClick: any;
    active: boolean;
}
export declare const User: React.FunctionComponent<IUserProps>;
export {};
