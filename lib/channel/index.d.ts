import * as React from "react";
interface IChannelProps {
    dark?: boolean;
    active: boolean;
    muted?: boolean;
    archived?: boolean;
    unread: number;
    title: string;
    image: string;
    icon?: string;
    label?: string;
    excerpt: string;
    public: boolean;
    private: boolean;
    presence?: string;
    onClick?: any;
    onMutedClick?: any;
    onArchivedClick?: any;
}
export declare const Channel: React.FunctionComponent<IChannelProps>;
export {};
