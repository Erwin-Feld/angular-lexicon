# AngularLexicon

## Data transfer between components
### parent to child

### routing
content: how to set up basic routing
* [app.component.html](src\app\app.component.html) contains `<router-outlet>` for enable routing
<br>
the [header component](src\app\app.component.html) on top
    acts as a navigation bar to switch to different components
    * with [routerLink="/"](src\app\components\header\header.component.html) the specific component can be added to switch to 
    * to route to a specific component it needs to be added to the [app-routing.module](src\app\app-routing.module.ts)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

