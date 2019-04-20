/**
 * @license MIT
 * @author Zainul Shaikh
 * @interface
 * 
 * @description
 * Interface is designed to represent operations related to logged user.
 */
export abstract class AuthUser {

    /**
     * @function
     * @description
     * Method should return expiry status of User account.
     *
     * @returns {boolean} 
     */
    abstract isAccountExpired(): boolean;

    /**
    * @function
    * @description
    * Method should return account status of User. Whether account is active
    * or not.
    *
    * @returns {boolean} 
    */
   abstract isAccountBlocked(): boolean;

    /**
     * @function
     * @description
     * Method should return array of role assigned to a user.
     * 
     * @returns {Set<string>}
     */
    abstract getRoles(): Set<string>;

    /**
     * @function
     * @description
     * Getter method for username field.
     * 
     * @returns {string}
     */
    abstract getUsername(): string;

    /**
     * @function
     * @description
     * Getter method for id field.
     * 
     * @returns {string}
     */
    abstract getId(): string;

    /**
     * @function
     * @description
     * Fetch user credentials received from backend server.
     * e.g JSON web token
     * 
     * @returns {any}
     */
    abstract getCredentials(): any;
}