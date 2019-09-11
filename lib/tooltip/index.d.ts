import * as React from "react";
interface ITooltipProps {
    /**
     * Possible values:
     * - "left"
     * - "right"
     * - "top"
     * - "bottom"
     */
    direction: string;
    /**
     * Styles to apply to the container elements
     *
     * @default null
     */
    containerClassName?: string;
    /** Delay in milliseconds */
    text: string;
    /** React children */
    children?: any;
}
/**
 * Button component.
 */
export declare const Tooltip: React.FunctionComponent<ITooltipProps>;
export {};
