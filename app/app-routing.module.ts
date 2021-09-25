import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent,
  children: [{path:"event-creation" ,component: EventCreationComponent}]
},
  {path:"user",component:UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
