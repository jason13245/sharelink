import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AddLinkComponent }   from './add-link/add-link.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path: 'addLink', component: AddLinkComponent},
    {path: 'search' , component: SearchComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [AddLinkComponent, SearchComponent]