import { SecurityFactory } from "./factory/security.factory";

/**
 * @license MIT
 * @author Zainul Shaikh
 * @class
 * 
 * @description
 * Class is designed to provide instance of security provider factory.
 * Implementer should use this class to register their implementation of 
 * `SecurityFactory` interface.
 * 
 * Client uses this security class to fetch instance of `SecurityFactory` and
 * executes security operations of application. 
 */
export class Security {

    private static securityFactory: SecurityFactory = null;

    /**
     * @function
     * @static
     * 
     * @description
     * Method returns instance of `SecurityFactory` registered by provider.
     * If method does not found any one implementation then it throws `Error`.
     *  
     * @returns {SecurityFactory} object of `SecurityFactory` interface.
     */
    public static getSecurityFactory(): SecurityFactory {
        if (!this.securityFactory) {
            throw new Error("No security manager factory found");
        }
        return this.securityFactory;
    }

    /**
     * @function
     * @static
     * 
     * @description
     * Method allows provider to register their implementation of `SecurityFactory` interface.
     * 
     * @param SecurityFactory {SecurityFactory} object
     */
    public static registerSecurityFactory(SecurityFactory: SecurityFactory) {
        this.securityFactory = SecurityFactory;
    }
}