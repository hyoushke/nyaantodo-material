import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DemoAddressformComponent } from './components/demo/demo-addressform/demo-addressform.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DemoNavigationComponent } from './components/demo/demo-navigation/demo-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DemoTableComponent } from './components/demo/demo-table/demo-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DemoDashboardComponent } from './components/demo/demo-dashboard/demo-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DemoTreeComponent } from './components/demo/demo-tree/demo-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DemoDragdropComponent } from './components/demo/demo-dragdrop/demo-dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentContainerComponent } from './components/layout/content-container/content-container.component';
import { ContentNavigationComponent } from './components/layout/content-navigation/content-navigation.component';
import { ContentContentComponent } from './components/layout/content-content/content-content.component';
import { DemoTypographyComponent } from './components/demo/demo-typography/demo-typography.component';
import { PostNavigationComponent } from './components/post/post-navigation/post-navigation.component';
import { PostContainerComponent } from './components/post/post-container/post-container.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostListItemComponent } from './components/post/post-list-item/post-list-item.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DemoAddressformComponent,
    DemoNavigationComponent,
    DemoTableComponent,
    DemoDashboardComponent,
    DemoTreeComponent,
    DemoDragdropComponent,
    HeaderComponent,
    FooterComponent,
    ContentContainerComponent,
    ContentNavigationComponent,
    ContentContentComponent,
    DemoTypographyComponent,
    PostNavigationComponent,
    PostContainerComponent,
    PostFormComponent,
    PostListComponent,
    PostListItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    routing,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
