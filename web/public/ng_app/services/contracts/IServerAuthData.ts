/**
 * Returned JSON on a login request.
 */
export interface IServerAuthData {
    success: boolean;
    username?: string;
    token?: string;
}
