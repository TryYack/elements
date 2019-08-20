import * as React from "react";
interface IButtonProps {
    /**
     * Value to display, either empty (" ") or string value
     *
     * @default " "
     */
    text: string;
    /**
     * Possible string values:
     * - "small"
     * - "medium"
     * - "large"
     */
    size?: any;
    /** Called when an empty cell is clicked. */
    onClick?: any;
}
/**
 * Button component.
 */
export declare const Button: React.FunctionComponent<IButtonProps>;
export {};
