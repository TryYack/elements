import * as React from "react";
interface ITextareaProps {
    label: string;
    value: string;
    onChange: any;
    placeholder: string;
    rows: number;
    textareaSize?: string;
    className?: string;
}
export declare const Textarea: React.FunctionComponent<ITextareaProps>;
export {};
