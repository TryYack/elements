import * as React from "react";
interface IAttachmentProps {
    layout: string;
    size: number;
    uri: string;
    name: string;
    mime: string;
    onDeleteClick?: any;
    onDownloadClick?: any;
}
export declare const Attachment: React.FunctionComponent<IAttachmentProps>;
export {};
