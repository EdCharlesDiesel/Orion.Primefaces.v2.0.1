import { Injectable } from "@angular/core";
import { SettingsForm } from "../features/components/settings/settings.component";

@Injectable({ providedIn: "root" })
export class SettingsService {
  constructor() {}

  logForm(settingsForm: SettingsForm) {
    console.log("Settings form: ", settingsForm);
  }
}

