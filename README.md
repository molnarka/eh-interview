# Angular advanced developer techniques guide
## Run it in vscode devcontainer
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/cZalyun/angular-advanced-sample)
## Creating a Monorepo with NX and Angular

```
npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo
```

## List NX generators
```
npx nx list @nx/angular
```
# The Domain Driven Design


# Generate root store & feature store
https://ng-journal.com/blog/2023-08-09-nx-and-ngrx/

# Adding NGRX store to this workspace
## The main goal
The main goal is to use ngrx store for every domain and handle with their corresponding domain.
To achieve this, create a new library, in the domain folder, for example in the libs/users folder
As we are building this store as a separate lib, need to generate module for this too, which can be imported into our standalone components
'standalone = false' ==> module file will be generated

Next step is to genearate the ngrx store into this new lib
For configuration, only need to set up the name of this state -> ususally this should be the name of the domain and the parent property which is the path to the module file.
In our case this is the following regarding the users domain:
```
--name=users
--parent=libs/users/src/lib/users-store.module.ts
```

For the models used in our domain, create a new lib, called models. In this case use modules, because this is not a standalone component, just the interfaces, classes, stuff like that
If you only have interfaces in your model lib, I dont really see the reason why you need modules files, so in this case you can generate this lib with standalone mode

## Using state in the app
1. DO NOT EVER PUT STOREMODULE.FORFEATURE(...) into the state.module.ts file pls
2. app.config.ts
```
export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
  ],
};
```
3. provide the state to the appropriate route for the standalone component you want to use in
```
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/facade',
    pathMatch: 'full'
  },
  {
    path: 'solid',
    component: SolidSampleComponent
  },
  {
    path: 'signal',
    component: SignalSampleComponent
  },
  {
    path: 'facade',
    component: FacadeSampleComponent,
    providers: [
      provideState('users', fromUsers.usersReducer),
      provideEffects(UsersEffects)
    ]
  },
  {
    path: 'chat',
    component: WsChatRxjsComponent
  }
];
```
