# AngularLexicon

## Data transfer between components
### parent to child

## routing
content: how to set up basic routing
* for enable routing add  `<router-outlet>` to  [app.component.html](src\app\app.component.html) 

* to add a navbar to enable switch to different components add a 
 [header component](src\app\app.component.html) on top
    * the [header](src\app\components\header\header.component.html) contains
    a property called `routerLink="/addComp"` add the specific Component to route to them 
    * to enable routing to the comp it needs to be added to [app-routing.module](src\app\app-routing.module.ts)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

