import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http"

import {AppComponent} from './app.component';
import {ChildComponent} from './component/child.component';
import {BookComponent} from "./component/book.component"
import {BoardComponent} from "./component/board.component"
import {UserComponent} from "./component/user.component"

import {HttpBookService} from "./service/http-book.service";
import {HttpBoardService} from "./service/http-board.service"
import {HttpUserService} from "./service/http-user.service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, ChildComponent, BookComponent, BoardComponent, UserComponent],
    providers: [HttpBookService, HttpBoardService, HttpUserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}