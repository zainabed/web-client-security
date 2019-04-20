import { AuthUser } from "../model/auth.user";


/**
 * @license MIT
 * @author Zainul Shaikh
 * @interface
 * 
 * @description
 * Interface act as service for `AuthUser` interface.
 * 
 * NOTE: `AuthUser` interface gives information about current logged user.
 * 
 * It has three abstract method that implementer should implement to expose
 * `AuthUser` related operations. 
 */
export abstract class AuthenticationManager {


    /**
     * @function
     * @description
     * Setter method of `AuthUser` interface.
     * When user is authenticated via HTTP then response should be transformed 
     * into `AuthUser` object.
     * 
     * @param {AuthUser} AuthUser object
     */
    abstract set(authUser: AuthUser): void;

    /**
     * @function
     * @description
     * Getter method of `AuthUser` interface.
     * 
     * @returns {AuthUser} object.
     */
    abstract get(): AuthUser;

    
    /**
     * @function
     * @description
     * Method is designed to reset the `AuthUser` object. 
     */
    abstract reset(): void;

}