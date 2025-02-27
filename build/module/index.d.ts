import React from "react";
declare type Tags = string[];
export interface ReactTagInputProps {
    tags: Tags;
    onChange: (tags: Tags) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    maxTags?: number;
    validator?: (val: string) => boolean;
    editable?: boolean;
    readOnly?: boolean;
    removeOnBackspace?: boolean;
    useAnotherCharEnter?: string;
    clearInputOnInvalid?: boolean;
    containerProps?: object;
    inputProps?: object;
}
interface State {
    input: string;
}
export default class ReactTagInput extends React.Component<ReactTagInputProps, State> {
    state: {
        input: string;
    };
    inputRef: React.RefObject<HTMLInputElement>;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    validAddTag: () => void;
    addTag: (value: string) => void;
    removeTag: (i: number) => void;
    updateTag: (i: number, value: string) => void;
    render(): JSX.Element;
}
export {};
