import * as React from "react";
interface IAvatarProps {
    /** Additional CSS class to add to the element */
    className?: string;
    /** URI string */
    image?: string;
    /** True or false */
    dark?: boolean;
    /** Hex color value for the background & text */
    color?: string;
    /**
     * Possible values:
     * - "very-small"
     * - "small"
     * - "small-medium"
     * - "medium"
     * - "medium-large"
     * - "large"
     * - "x-large"
     * - "xx-large"
     * - "xxx-large"
     */
    size?: string;
    /** True or false */
    circle?: boolean;
    /** True or false - overrides heartbeat presences */
    badge?: boolean;
    /** React component */
    editIcon?: any;
    /** Function event callback for editing */
    onEditClick?: any;
    /** Function event callback for deleting */
    onDeleteClick?: any;
    /** React component */
    deleteIcon?: any;
    /** Hex color value */
    textColor?: string;
    /** Hex color value */
    outlineInnerColor?: string;
    /** Hex color value */
    outlineOuterColor?: string;
    /** Style object, { color: 'black' } */
    style?: object;
    /** React children */
    children?: any;
    /** Presence indicator */
    heartbeat?: Date;
    /**
     * Value to display, either empty (" ") or title text
     *
     * @default " "
     */
    title: string;
    /** Called when the component is clicked. */
    onClick?: any;
}
/**
 * Avatar component. Displays a circle or square container for users,
 * channels, or anything else
 */
export declare const AvatarComponent: React.FunctionComponent<IAvatarProps>;
export declare const Avatar: any;
export {};
