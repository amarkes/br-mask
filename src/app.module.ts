import { CommonModule } from "@angular/common";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
} from "@angular/core";

import { BrMaskDirective } from "./directives/br-mask";

@NgModule({
  declarations: [BrMaskDirective],
  exports: [BrMaskDirective],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrMaskerModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: BrMaskDirective,
    };
  }
}
