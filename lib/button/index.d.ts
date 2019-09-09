import * as React from "react";
interface IButtonProps {
    /**
     * Type of button for form
     *
     * @default null
     */
    disabled?: boolean;
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
    text: string;
    /**
     * Colour theme for button
     *
     * @default " " (blue)
     */
    theme?: string;
    /**
     * Possible values are true/false
     *
     * @default false
     */
    outline?: boolean;
    /**
     * Possible values are true/false
     *
     * @default false
     */
    jumbo?: boolean;
    /** Called when an empty cell is clicked. */
    onClick?: any;
}
/**
 * Button component.
 */
export declare const Button: React.FunctionComponent<IButtonProps>;
export {};
