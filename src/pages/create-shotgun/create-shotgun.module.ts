import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { CreateShotgunPage } from './create-shotgun';

@NgModule({
  declarations: [
    CreateShotgunPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateShotgunPage),
    TranslateModule.forChild()
  ],
  exports: [
    CreateShotgunPage
  ]
})
export class CreateShotgunPageModule {}
