
/**
 * Example of a Feature Module.
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './settings.service';
import { ListErrorsComponent } from 'src/app/shared/components/list-errors.component';
import SettingsComponent from './settings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SettingsComponent },
  ];

@NgModule({
  declarations: [
    // SettingsComponent
  ],
  // exports: [SettingsComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ListErrorsComponent
  ],
  providers: [SettingsService]
})
export class SettingsModule { }

