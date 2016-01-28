/**
 * Provides an interface for editor auto saver.
 */
export interface IAutoSaver {
    /**
     * Mechanism for calculating/determining when a save should be performed.
     */
    saveWatcher(): void;

    /**
     * Save mechanism that provides extra time for UI reaction/update.
     */
    uiFriendlySave(): void;
}
