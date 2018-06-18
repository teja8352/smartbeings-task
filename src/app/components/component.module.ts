import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { UsersComponent } from '../components/users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { ActivityComponent } from './activity/activity.component';
import { MembersComponent } from './members/members.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    ActivityComponent,
    MembersComponent
  ],
  exports: [
    HeaderComponent,
    UsersComponent,
    TasksComponent,
    ActivityComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentRoutingModule
  ],
  providers: []
})
export class ComponentModule {}
