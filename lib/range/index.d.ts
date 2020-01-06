import * as React from "react";
interface IRangeProps {
    min: number;
    max: number;
    value: number;
    onChange: any;
}
export declare const Range: React.FunctionComponent<IRangeProps>;
export {};
