import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
   imports: [MatButtonModule, MatIconModule, MatCheckboxModule],
   exports: [MatButtonModule, MatIconModule, MatCheckboxModule],
})

export class MaterialModule { }
