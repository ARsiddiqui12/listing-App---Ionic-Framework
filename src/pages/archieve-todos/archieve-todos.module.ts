import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchieveTodosPage } from './archieve-todos';

@NgModule({
  declarations: [
    ArchieveTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchieveTodosPage),
  ],
})
export class ArchieveTodosPageModule {}
