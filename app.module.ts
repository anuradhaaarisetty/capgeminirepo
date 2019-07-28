import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ShowComponent} from './app.showcomponent';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './app.addcomponent';
import { DeleteEmployeeComponent } from "./app.deletecomponent";
import { SearchEmployeeComponent } from "./app.searchcomponent";
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule        
    ],
    declarations: [
        AppComponent,
        ShowComponent,
        AddEmployeeComponent,
        DeleteEmployeeComponent,
        SearchEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }