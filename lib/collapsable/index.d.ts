import * as React from "react";
interface ICollapsableProps {
    /** Text title */
    title: string;
    /** Any React children */
    children: any;
    /** Opetional className */
    className?: string;
}
export declare const Collapsable: React.FunctionComponent<ICollapsableProps>;
export {};
