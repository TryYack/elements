import * as React from "react";
interface IRoomProps {
    dark: boolean;
    active: boolean;
    unread: number;
    title: string;
    image: string;
    icon: string;
    label: string;
    excerpt: string;
    public: boolean;
    private: boolean;
    onClick: any;
}
export declare const Room: React.FunctionComponent<IRoomProps>;
export {};
