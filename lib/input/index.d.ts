import * as React from "react";
interface IInputProps {
    /** Label above field */
    label?: string;
    value: string;
    onChange: any;
    placeholder: string;
    /** size props is taken already */
    inputSize?: string;
    className?: string;
}
export declare const Input: React.FunctionComponent<IInputProps>;
export {};
