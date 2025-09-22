import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewProductRoutingModule} from './new-product-routing.module';
import {ProgressBarModule} from 'primeng/progressbar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TagModule} from 'primeng/tag';
import {ChipModule} from 'primeng/chip';
import {SkeletonModule} from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ScrollTopModule} from 'primeng/scrolltop';
import {InputSwitchModule} from "primeng/inputswitch";
import {EditorModule} from "primeng/editor";
import {FileUploadModule} from "primeng/fileupload";
import {MessagesModule} from "primeng/messages";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {NewProductComponent} from "./new-product.component";
import {MessageModule} from 'primeng/message';
import {RippleModule} from "primeng/ripple";

@NgModule({
  imports: [
    CommonModule,
    NewProductRoutingModule,
    ProgressBarModule,
    BadgeModule,
    AvatarModule,
    ScrollPanelModule,
    TagModule,
    ChipModule,
    ButtonModule,
    SkeletonModule,
    AvatarGroupModule,
    ScrollTopModule,
    InputSwitchModule,
    EditorModule,
    FileUploadModule,
    MessagesModule,
    ChipsModule,
    DropdownModule,
    OverlayPanelModule,
    MessageModule,
    RippleModule,

  ],
  declarations: [NewProductComponent]
})
export class NewProductModule {
}
