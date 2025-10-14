import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../../service/settings.service';
import SettingsComponent from './settings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SettingsComponent },
  ];

@NgModule({
    declarations: [],
    exports: [SettingsComponent],
    imports: [RouterModule.forChild(routes), ReactiveFormsModule, SettingsComponent],
    providers: [SettingsService]
})
export class SettingsModule {}

