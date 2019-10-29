import * as React from "react";
interface IRoomProps {
    dark?: boolean;
    active: boolean;
    muted?: boolean;
    unread: number;
    title: string;
    image: string;
    icon?: string;
    label?: string;
    excerpt: string;
    public: boolean;
    private: boolean;
    heartbeat?: Date;
    onClick?: any;
    onMutedClick?: any;
    onArchivedClick?: any;
}
export declare const Room: React.FunctionComponent<IRoomProps>;
export {};
