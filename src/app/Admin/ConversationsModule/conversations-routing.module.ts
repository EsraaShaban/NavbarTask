import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationsComponent } from './Pages/Conversations/conversations.component';

const routes: Routes = [

  { path: '', component: ConversationsComponent },
  { path: 'conversations', component: ConversationsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ConversationsRoutingModule { }
