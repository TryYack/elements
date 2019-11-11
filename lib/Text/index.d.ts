import * as React from "react";
interface ITextProps {
    /**
     * The usual font weights 100 - 900
     */
    weight?: string | undefined;
    /**
     * Possible values:
     * - xxd
     * - xd
     * - d
     * - m
     * - l
     * - xl
     * - xxl
     * - highlight
     * - Danger
     */
    color: string;
    /**
     * Possible values:
     * - h1
     * - h2
     * - h3
     * - h4
     * - h5
     * - p
     * - a
     * - small
     */
    display?: string | undefined;
    onClick?: any;
    style?: any;
    children: any;
}
export declare const Text: React.FunctionComponent<ITextProps>;
export {};
