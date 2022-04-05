import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './Pages/Conversations/conversations.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ConversationsRoutingModule,
  ],
  declarations: [
    ConversationsComponent
  ],
  exports:[
    ConversationsComponent
  ],
  providers: []
})

export class ConversationsModule {}
