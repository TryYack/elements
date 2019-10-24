import * as React from "react";
interface IAttachmentProps {
    /**
     * Possible values:
     * - "message"
     * - "compose"
     */
    layout: string;
    /** Size in bytes */
    size: number;
    /** Preview uri location of file */
    preview?: string;
    /** Uri location of source file */
    uri: string;
    /** File name */
    name: string;
    /** File mime type */
    mime: string;
    /** Callback to parent component */
    onPreviewClick?: any;
    /** Callback to parent component */
    onDeleteClick?: any;
}
export declare const Attachment: React.FunctionComponent<IAttachmentProps>;
export {};
