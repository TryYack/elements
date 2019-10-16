import * as React from "react";
interface INotificationProps {
    text: string;
    actionText?: string;
    onActionClick?: any;
    onDismissClick?: any;
}
export declare const Notification: React.FunctionComponent<INotificationProps>;
export {};
