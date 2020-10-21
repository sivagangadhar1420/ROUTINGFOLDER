import { Component, OnInit } from '@angular/core';
import {Fold} from '../../Model/fold';

@Component({
  selector: 'app-media-folder',
  templateUrl: './media-folder.component.html',
  styleUrls: ['./media-folder.component.css']
})
export class MediaFolderComponent implements OnInit {
  
  img1='assets/images/WhatsApp Image 2020-01-21 at 21.35.42.jpeg';
  
  // res1:Fold[]=[
  //               {id:1,title:"King",name:"Raj" },
  //               {id:1,title:"King",name:"Raj" },
  //               {id:1,title:"King",name:"Raj" }
  //             ];
  res1:Fold[]=[];


  constructor() { }

  ngOnInit() {
    // this.res1[0]={id:1, title:"King", name:"Raju"};
    // this.res1[1]={id:1, title:"King", name:"Raju"};
    // this.res1[2]={id:1, title:"King", name:"Raju"};

    this.res1= [
                {id:1, title:"King", name:"Raju", completed:true},
                {id:2, title:"Kinged", name:"Raju1", completed:false},
                {id:3, title:"Kings", name:"Raju2", completed:true}
              ];
    
    
  }
  
  
  img="";
  uploadImg(fm:any){
    fm.target.src='assets/images/WhatsApp Image 2020-01-21 at 21.35.42.jpeg';
    this.img=fm.target.src;
    // this.img='assets/images/WhatsApp Image 2020-01-21 at 21.35.42.jpeg';
  }
    



}
