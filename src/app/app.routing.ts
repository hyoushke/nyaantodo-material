import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PostContainerComponent} from './components/post/post-container/post-container.component';
import {LoginComponent} from './components/login/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const appRoutes: Routes = [

        {path: 'post', component: PostContainerComponent  },
        {path: 'login', component: LoginComponent  },
        {path: 'register', component: RegisterComponent  },

]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
