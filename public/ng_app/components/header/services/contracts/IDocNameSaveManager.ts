/**
 * Describes the basic document name save manager functionality.
 */
export interface IDocNameSaveManager {
    /**
     * Initializes all processed needed for saving event.
     * @param inputRef - Reference to the input element
     */
    init(inputRef): void;

    /**
     * Resets the document name to its default value.
     */
    resetName(): void;
}
