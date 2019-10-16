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
    /** Uri location of source file */
    uri: string;
    /** File name */
    name: string;
    /** File mime type */
    mime: string;
    onDeleteClick?: any;
}
export declare const Attachment: React.FunctionComponent<IAttachmentProps>;
export {};
