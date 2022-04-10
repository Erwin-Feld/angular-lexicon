# AngularLexicon

## Data transfer between components
### parent to child
* how to pass data from parent component to display it in child comp
    * the [child component](src\app\components\data-transfer-between-components\parent-to-child\child-getting-data-from-parent\child-getting-data-from-parent.component.html) contains property `parentInputData` its Value is set with 
    [parent comp](src\app\components\data-transfer-between-components\parent-to-child\parent-passing-data-to-child\parent-passing-data-to-child.component.ts) propery `data` by using `@Input()`
    * this enables `[parentInputData]="data"` into the [child component](src\app\components\data-transfer-between-components\parent-to-child\parent-passing-data-to-child\parent-passing-data-to-child.component.html) html template

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

