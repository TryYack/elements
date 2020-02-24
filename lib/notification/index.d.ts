import * as React from "react";
interface INotificationProps {
    text: string;
    /** Text next to main text */
    actionText?: string;
    /** When user click on text next to main text */
    onActionClick?: any;
    onDismissIconClick?: any;
    onDismiss?: any;
    theme?: string;
}
export declare const Notification: React.FunctionComponent<INotificationProps>;
export {};
