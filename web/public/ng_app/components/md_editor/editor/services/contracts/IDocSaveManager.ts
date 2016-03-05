/**
 * Provides an interface for editor auto saver.
 */
export interface IDocSaveManager {
    /**
     * Initializes all events/background processes needed for the saver.
     */
    initializeEvents(): void;

    /**
     * Mechanism for calculating/determining when a save should be performed.
     */
    saveWatcher(): void;

    /**
     * Save mechanism that provides extra time for UI reaction/update.
     */
    uiFriendlySave(): void;

    /**
     * Clears the document and saves.
     */
    clearDocument(): void;
}
