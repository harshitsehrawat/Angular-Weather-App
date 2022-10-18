import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
selector: 'app-show-api',
templateUrl: './show-api.component.html',
styleUrls: ['./show-api.component.css']
})
export class ShowApiComponent implements OnInit {

li:any;
lis=[];
constructor(private http : HttpClient){
	
}

ngOnInit(): void {
	this.http.get('https://countriesnow.space/api/v0.1/countries')
	.subscribe(Response => {

	// If response comes hideloader() function is called
	// to hide that loader
	if(Response){
		hideloader();
	}
	console.log(Response)
	this.li=Response;
	this.lis=this.li.list;
	});
	function hideloader(){
	// document.getElementById('loading').style.display = 'none';}
}}
// The url of api is passed to get() and then subscribed and
// stored the response to li element data array list[] is created
// using JSON element property

// export class AppComponent {
//   title = 'my-app';
// }
