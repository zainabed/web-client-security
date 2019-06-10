

# @zainabed/security 

Authorization specifications for single page application. 

It provides APIs to validate user permissions against the secure area of application without consulting with server APIs.  
These validation can be performed on application routing or on REST API calls. 

![@zainabed/security](https://github.com/zainabed/web-client-security/blob/master/zainabed-typescript-security.png)



>  **Note:** It is just specifications, not an implementation.
to use it in your application please see its dependents on https://www.npmjs.com.

## Concept

Single page application requires authentication & authorization system to guard application and its components from unauthorized user.

Authentication validates user by verifying its identify and allow user to access secure area of application.
If verification fails then it rejects access to those secure area.
As authentication is concern of Server side script, on client side we need to maintain the reference of authenticated user object (Access Token).

On other hand authorization take action when user is authenticated and has granted permission to secure area of application.
Application can be divided into different areas according to different privileges like some area could be open to everyone and some could be secure for ADMIN user only. 
Authorization validates users permission against permission assign to different area of application.

Library provide two fundamental security interfaces, authentication & authorization managers.
And these interfaces can be obtain from `SecurityFactory` class.


```JavaScript

import { Security, SecurityFactory, AuthenticationManager, AuthorizationManager} from  "@zainabed/security";

let  secuirtyFactor: SecurityFactory = Security.getSecurityFactory();
let  authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
let  authorizationManager: AuthorizationManager = securityFactory.getAuthorizationManager();

```

Implementer should implements all these interfaces and register their security library as

```JavaScript

// SecurityFactoryImpl is implementation class for SecurityFactory

let securityFactory: SecurityFactory = new SecurityFactoryImpl();
Security.registerSecurityFactory(securityFactory);

```


## Installation

Run following command to install security inside your application.

```

npm install @zainabed/security

```


## Authentication

User authentication should happen at server side ( not inside client side ) and at client side you should capture the authenticated user object which you receive from server APIs. This authenticated object should contain user's assigned roles or permissions. 

Role of `AuthenticationManager` interface of `@zainabed/security` is to maintain the reference of authenticated user object.
It can be done by creating a class which implements `AuthUser` interface.

```JavaScript

import { AuthUser } from "@zainabed/security";

class User implements AuthUser {

  // implements abstract methods.

  // create a constructor to access authentication response and set
  // username, credentials, authorization roles and account validity factors. 
}

```
when authenticated user object is received from server API ( as JWT token ) convert it into `AuthUser` object.

```JavaScript
// sample authentication api success call

onSuccessfulAuthentication( response : any ) {
    let user: AuthUser = new User(response);

    // store this user inside authentication manager.
    let  secuirtyFactor: SecurityFactory = Security.getSecurityFactory();
    let  authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
    authenticationManager.set(user);
}

```  

>  **Note:** `AuthUser` help us to fetch useful information about authenticated user like its username, credentials, authorization roles/permissions and account validity factors.

Once you set `AuthUser` inside authentication manager, you can access it from any part of you application.

```JavaScript

    let user: AuthUser = authenticationManager.get();

```

and call `reset` method to remove authenticated user reference from authentication manager. 
usually you would do it when you perform logout operation.

```JavaScript
    authenticationManager.reset();
```


## Authorization

Authorization is primary feature of this library. once user is authenticated then library guards application component using user credentials & roles.

first get instance of `AuthorizationManager` as

```JavaScript
    let  secuirtyFactor: SecurityFactory = Security.getSecurityFactory();
    let  authorizationManager: AuthorizationManager = securityFactory.getAuthorizationManager();
```

Then format set of authorization operations as

**1.** User logged in or not

```JavaScript
    if( authorizationManager.isLogged() ) {
        // do stuff
    } else {
        // notify user 
    }
```

**2.** If user as has single role as `USER` verify it as

```JavaScript
    if( authorizationManager.hasRole('USER') ) {
        // do stuff
    } else {
        // notify user 
    }
```
>  **Note:** **`AuthorizationManager` interface access these roles from `AuthUser` class using `getRoles` method. 
make sure that you need to set user roles when you instantiate `AuthUser` class.**


**3.** If user as has set of roles as `USER` & `ADMIN` verify it as

```JavaScript
    let roles : Set<string> = new Set(['USER', 'ADMIN']);

    if( authorizationManager.hasRoles(roles) ) {
        // do stuff
    } else {
        // notify user 
    }
```

**4.** If user as has any of given roles as `USER` & `ADMIN` verify it as

```JavaScript
    let roles : Set<string> = new Set(['USER', 'ADMIN']);

    if( authorizationManager.hasAnyRoles(roles) ) {
        // do stuff
    } else {
        // notify user 
    }
```
>  **Note:** Role names are case sensitive, `USER` will not match with `user` or `User`.

