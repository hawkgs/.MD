/**
 * Defines the structure of a file object.
 */
export interface IFileData {
    /**
     * The name and the extension of the file.
     */
    fileName: string;

    /**
     * The contents of the file (probably in base64).
     */
    data: string;
}
