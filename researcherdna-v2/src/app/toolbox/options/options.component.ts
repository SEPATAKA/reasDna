import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  options:any;
  constructor(private optionsService: OptionsService) { }
  ngOnInit(): void {
    console.log(this.optionsService.guidelines(1).subscribe((res)=>{
      console.log(res.guidelines);
      this.options = res.guidelines;
    }) )
  }

  option2 = [ {id:"1", description:"INTRODUCTION"},

  {id:"2", description:"BACKGROUND AND MOTIVATION/CONTEXTUALISATION"},

  {id:"3", description:"PROBLEM STATEMENT"},

  {id:"4", description:"RESEARCH QUESTIONS, AIM AND OBJECTIVES OF THE STUDY"},

  {id:"5", description:"RESEARCH METHODOLOGY (could include discussion on measuring instruments)"},

  {id:"6", description:"ETHICS"},

  {id:"7", description:"TIME SCHEDULE"},

  {id:"8", description:"BUDGET"},

  {id:"9", description:"UPPORT STAFF"},

  {id:"10", description:"Target PUBLICATIONS"},

  {id:"11", description:"CHAPTER OUTLINE"},

  {id:"12", description:"REFERENCES"}]

}
