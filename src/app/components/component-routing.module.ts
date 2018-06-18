import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { ActivityComponent } from './activity/activity.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
