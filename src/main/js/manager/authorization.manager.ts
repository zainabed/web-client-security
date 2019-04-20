
/**
 * @license MIT
 * @author Zainul Shaikh
 * @interface
 * 
 * @description
 * Interface used to authorized users.
 * 
 * This is a security interface design to facilitate User's authorization operations.
 * Authenticated user details can be captured from `AuthenticationManager` interface.
 * Implementation can store this interface as field variable and used it to authorize user.
 *  
 * NOTE: `AuthenticationManager` interface hold instance of `AuthUser` interface and 
 * `AuthUser` interface represent current logged user. 
 * 
 * Implementer of this interface should define its methods and provide authorization mechanism.
 * Authorization can be achieved by validating user's roles. 
 * 
 * Authorization can be applied on application methods, services, routing or inside HTML template.
 */
export abstract class AuthorizationManager {

 

    /**
     * @function
     * @description
     * Verify is current User is logged or not.
     * Method should use `AuthenticationManager` interface to verify presence of `AuthUser` instance.
     * If instance is empty then method should return false otherwise true.
     * 
     * @returns {boolean} 
     */
    abstract isLogged(): boolean;

    /**
     * @function
     * @description
     * Verify if given role is assigned to current User or not.
     * Implementation should compare given parameter with `AuthUser` assigned role.
     */
    abstract hasRole(role: string): boolean;

    /**
     * @function
     * @description
     * Verify if all given roles are assigned to current User or not.
     * Implementation should compare all given roles with `AuthUser` assigned roles.
     * if single role failed to match then method should return false.
     *
     * @returns {boolean}
     */
    abstract hasRoles(roles: Set<string>): boolean;


    /**
     * @function
     * @description
     * Verify if any of given roles is assigned to current User or not.
     * Implementation should compare any given roles with `AuthUser` assigned roles.
     * if found one of them then method should return true.
     * 
     * @returns {boolean}
     */
    abstract hasAnyRoles(roles: Set<string>): boolean;
}