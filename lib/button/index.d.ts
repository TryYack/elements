import * as React from "react";
interface IButtonProps {
    /**
     * Icon to display next to text,
     *
     * @default null
     */
    icon?: any;
    /**
     * Value to display, either empty (" ") or string value
     *
     * @default " "
     */
    text?: string;
    /**
     * Colour theme for button
     *
     * @default " " (blue)
     */
    theme?: string;
    /**
     * Button disabled value
     *
     * @default null
     */
    disabled?: boolean;
    /**
     * Possible values are true/false
     *
     * @default false
     */
    jumbo?: boolean;
    /**
     * React classname property
     *
     * @default null
     */
    className?: string;
    /** Called when an empty cell is clicked. */
    onClick?: any;
}
/**
 * Button component.
 */
export declare const Button: React.FunctionComponent<IButtonProps>;
export {};
