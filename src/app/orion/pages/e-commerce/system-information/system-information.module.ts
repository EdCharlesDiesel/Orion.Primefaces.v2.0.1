import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemInformationComponent } from './system-information.component';
import { SystemInformationRoutingModule } from './system-information-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
	imports: [
		CommonModule,
		SystemInformationRoutingModule,
		ProgressBarModule,
		BadgeModule,
		AvatarModule,
		ScrollPanelModule,
		TagModule,
		ChipModule,
		ButtonModule,
		SkeletonModule,
		AvatarGroupModule,
		ScrollTopModule
	],
	declarations: [SystemInformationComponent]
})
export class SystemInformationModule { }
