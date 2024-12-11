import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const BentoBoxContainer: ({ children, className, rows, cols, gap, }: {
    children: React.ReactNode;
    className?: string;
    rows: number;
    cols: number;
    gap?: "sm" | "md" | "lg" | "xl";
}) => react_jsx_runtime.JSX.Element;

declare const BentoBoxItem: ({ children, className, start, size, shadow, shadowColor, }: {
    children: React.ReactNode;
    className?: string;
    start: number[];
    size: number[];
    shadow?: boolean;
    shadowColor?: string;
}) => react_jsx_runtime.JSX.Element;

declare const CornerButton: ({ onClick, children, className, backgroundColor, color, size, }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    color?: string;
    size?: "sm" | "md" | "lg";
}) => react_jsx_runtime.JSX.Element;

export { BentoBoxContainer, BentoBoxItem, CornerButton };
