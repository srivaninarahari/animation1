import { Component } from '@angular/core';
import{Meta} from '@angular/platform-browser/'
import {FormControl} from '@angular/forms'
import { User} from './user.model'
import {// Animation members
  trigger, state, animate, transition, style
  } from '@angular/animations';
   import { keyframes } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('userState',[
      state('inactive',style({
      backgroundColor:'red',
      color:'white',
      transform:'scale(1)'
    })),
    state('active',style({
      backgroundColor:'orange',
      color:'white',
      transform:'scale(1)'
    })),
  transition('inactive => active',animate('5000s ease-in')),
  transition('active => inactive',animate('5000s ease-out')),
  transition('void => inactive',[style({
    
    transform:' translateX(-100%) scale(1) '
  }),animate(100)]),

  transition('void => active',[style({
    
    transform:' translateX(-100%) scale(1) '
  }),animate(200)]),
    transition('active => void',[style({
      
      transform:' translateX(-100%) scale(1) '
    }),animate(200)]),
    transition('inactive => void',[style({
      
      transform:' translateX(-100%) scale(1) '
    }),animate(200)]),
    transition('inactive => void',[style({
      
      transform:' translateX(-100%) scale(1) '
    }),animate(200)]),
  ]
  
  
  
  ),
  
  ]
  
})


export class AppComponent {
  title = 'app';
  show=true;
  allUsers1: User[]=[];
  constructor(private meta:Meta){
    this.meta.addTag({name:'angular4', author:' sree'})
  }
  ngOnInit(){
setTimeout(()=>{
this.options=[
  {id:'1', label:'sree'},
  {id:'2', label:'sree2'},
  {id:'3', label:'sree3'},
  {id:'4', label:'sree4'}
]
},2000)

let user = new User();
user.userName="sree";
user.userState='active';
this.allUsers1.push(user); 
user = new User();
user.userName="sreevani";
user.userState='inactive';
this.allUsers1.push(user); 

user = new User();
user.userName="sreenarahari";
user.userState='active';
this.allUsers1.push(user); 


  }
  toggleState(user:User){
  if(user.userState =='inactive'){
    user.userState='active'
  }
  else{
    user.userState='inactive'
  }
user.isVisible= !user.isVisible;
  }
  toggleshow() {
    this.show= !this.show
  }
  allUsers = ['a', 'b','c','d','e']

  options= [
    {id:'1', label:'sree'},
    {id:'2', label:'sree2'},
    {id:'3', label:'sree3'}
  ]
  control = new FormControl(this.options[1]); 


addinactive(){
  let usercount = this.allUsers1.length + 1;
  let user = new User();
  user.userName="sreenarahari" + usercount;
  user.userState='inactive';
  this.allUsers1.push(user); 

}
addactive(){
  let usercount = this.allUsers1.length + 1;
  let user = new User();
  user.userName="sreenarahari" + usercount;
  user.userState='active';
  this.allUsers1.push(user); 

}
}
