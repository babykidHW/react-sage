import * as React from 'react';
export declare namespace UseFilePicker {
    interface ImageDims {
        minImageWidth?: number;
        maxImageWidth?: number;
        minImageHeight?: number;
        maxImageHeight?: number;
    }
    interface Options extends ImageDims {
        minFileSize?: number;
        maxFileSize?: number;
        resizeImage?: boolean;
        imageQuality?: number;
    }
    interface Errors {
        hasInvalidFileSize?: boolean;
        hasInvalidImage?: boolean;
    }
    interface FileInputProps {
        accept?: string;
        multiple?: boolean;
        capture?: 'user' | 'environment';
    }
}
export declare const useFilePicker: (options?: UseFilePicker.Options) => {
    files: File[] | null;
    /**
     * A dictionary of errors based on the FileInputProps passed in.
     */
    errors: UseFilePicker.Errors;
    /**
     * A click handler to pass to any element that needs to trigger the
     * native file picker.
     */
    onClick(): void;
    /**
     * A hidden file input element that must be rendered somewhere on the same page
     * as where the hook is used. This hidden file input is used to toggle open the
     * native file picker. However, it remains hidden otherwise in order to avoid the
     * native file picker input UI, which is generally undesirable and not easily
     * customizable. However, you may still pass any native file input props to this
     * hidden one in order to fine-tune your file picking needs.
     */
    HiddenFileInput({ multiple, accept, capture }: UseFilePicker.FileInputProps): React.ReactElement;
};
