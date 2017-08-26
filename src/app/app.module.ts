import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http"
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ChildComponent} from './component/child.component';
import {BookComponent} from "./component/book.component"
import {BoardComponent} from "./component/board.component"
import {UserComponent} from "./component/user.component"

import BookService from "./service/book.service";
import BoardService from "./service/board.service"
import UserService from "./service/user.service";

const appRoutes: Routes = [
    {path: '', component: ChildComponent},
    {path: 'board', component: BoardComponent},
    {path: 'book', component: BookComponent},
    {path: 'user', component: UserComponent}
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, ChildComponent, BookComponent, BoardComponent, UserComponent],
    providers: [{provide: "bookService", useClass: BookService},
        {provide: "boardService", useClass: BoardService}, {provide: "userService", useClass: UserService}],
    bootstrap: [AppComponent]
})
export class AppModule {
}