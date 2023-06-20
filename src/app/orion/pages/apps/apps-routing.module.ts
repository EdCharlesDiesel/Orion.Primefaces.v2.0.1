import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
    {
      path: 'calendar',
      loadChildren: () => import('./calendar/calendar-routing.module').then(m => m.CalendarRoutingModule)
    },
    {path: 'reports', loadChildren: () => import('./reports/reports-routing.module').then(m => m.ReportsRoutingModule)},
    {path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule)},
    {path: 'mail', loadChildren: () => import('./mail/mail-routing.module').then(m => m.MailRoutingModule)},
    {path: 'task-list', loadChildren: () => import('./task-list/task-list.module').then(m => m.TaskListModule)},

    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule {
}
