# AngularLexicon

## Data transfer between components
### parent to child
* how to pass data from parent component to display it in child comp
    * the [child component](src\app\components\data-transfer-between-components\parent-to-child\child-getting-data-from-parent\child-getting-data-from-parent.component.html) contains property `parentInputData` via `@Input` data from
    [parent comp](src\app\components\data-transfer-between-components\parent-to-child\parent-passing-data-to-child\parent-passing-data-to-child.component.ts) can be inserted to the child
    * adding the child comp to parent html template and using `[parentInputData]="data"` to input the data into [child component](src\app\components\data-transfer-between-components\parent-to-child\parent-passing-data-to-child\parent-passing-data-to-child.component.html) the data gets passed -- `data` is the property name from the parent

### child to parent
* how to pass data from child to parent comp
    * this can be done via `@Output` inside the [child component](src\app\components\data-transfer-between-components\child-to-parent\child-passing-data-to-parent\child-passing-data-to-parent.component.ts) 
        * `@Output() emitData = new EventEmitter<string>();` --> creates a new EventEmitter `emitData` 
            * this Emitter can be transmitted to the parent which caries a string value
                * logic here is when a click event in the child comp [happens](src\app\components\data-transfer-between-components\child-to-parent\child-passing-data-to-parent\child-passing-data-to-parent.component.html) a value is transmitted to the parent  
                    
    * to receave the Event to the parent the EventEmitter `(emitData)` gets connected to a parent method [getChildData](src\app\components\data-transfer-between-components\child-to-parent\parent-getting-data-from-child\parent-getting-data-from-child.component.ts) 
      *  to set this in the template add this  `(emitData)="getChildData($event)"` when setting up the [child comp](src\app\components\data-transfer-between-components\child-to-parent\parent-getting-data-from-child\parent-getting-data-from-child.component.html)  
     
### bi-directional

* data provided to child component via `@Input` can be changed by child comp and send back to parent comp via `@Output`
    * the `@Output` EventTransmiter receaved by the [parent method](src\app\components\data-transfer-between-components\bi-directional\parent-bi-directional\parent-bi-directional.component.ts) carries a value, the value is then set to the parent initial propery value

* ` [(ngModel)]=""` is used to directly bind the input value to a [property](src\app\components\data-transfer-between-components\bi-directional\child-bi-directional\child-bi-directional.component.html)
    * to use ` [(ngModel)]=""`-->  `FormsModule` needs to be added to [app.module](src\app\app.module.ts) imports



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

