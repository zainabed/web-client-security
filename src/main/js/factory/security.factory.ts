import { AuthorizationManager } from "../manager/authorization.manager";
import { AuthenticationManager } from "../manager/authentication.manager";

/**
 * @license MIT
 * @author Zainul Shaikh
 * @interface
 * 
 * @description
 * Interface is designed to provide instances of security managers `AuthorizationManager`
 *  and `AuthenticationManager` using respective factory methods.
 */
export abstract class SecurityFactory {


    /**
     * @function
     * 
     * @description
     * Method should return instance of `AuthorizationManager` interface.
     * if instance is empty then it should throw and `Error`
     * 
     * @returns {AuthorizationManager} object of `AuthorizationManager`
     */
    abstract getAuthorizationManager(): AuthorizationManager;

    /**
     * @function
     * 
     * @description
     * Method should return instance of `AuthenticationManager` interface.
     * if instance is empty then it should throw and `Error`
     * 
     * @returns {AuthenticationManager} object of `AuthenticationManager`
     */
    abstract getAuthenticationManager(): AuthenticationManager;
}