import * as React from "react";
interface ITextareaProps {
    label: string;
    value: string;
    onChange: any;
    placeholder: string;
    rows: number;
}
export declare const Textarea: React.FunctionComponent<ITextareaProps>;
export {};
