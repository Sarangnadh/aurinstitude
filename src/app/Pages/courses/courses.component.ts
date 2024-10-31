import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses :any[]=[
    {
      id:1,
      courseName:"BSc Interior Design",
      Duration:"3 Years (6 Semesters)",
      Eligibility:" 10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:2,
      courseName:"Diploma in Interior Design and Space Management",
      Duration:"14 Months",
      Eligibility:"10+2 with a minimum 50% aggregate marks ",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:3,
      courseName:"B.Des Interior Design",
      Duration:" 4 Years",
      Eligibility:" 10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:4,
      courseName:"PG Diploma in Interior Designand Space Management",
      Duration:"18 Months",
      Eligibility:" A graduate degree in any discipline",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:5,
      courseName:"MDes Furniture and Interior Design",
      Duration:"2 Years(4 Semesters)",
      Eligibility:"Bachelor's Degree in Design / Fine Arts / Applied Arts / Architecture / Civil Engineering",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:6,
      courseName:"BSc Costume Design and Fashion",
      Duration:"3 Years",
      Eligibility:"10+2 with a minimum 50% aggregate marks ",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:7,
      courseName:"Advanced Diploma in Fashion Design and Boutique Management",
      Duration:"18 Months",
      Eligibility:"10+2 with a minimum 50% aggregate marks ",
      desaiif:"Value added programs from AIIF"
    },
    // {
    //   id:8,
    //   courseName:"",
    //   Duration:"",
    //   Eligibility:" ",
    //   desaiif:"Value added programs from AIIF"
    // },
   
  ]
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  enquireconfirm()
  {
    this.router.navigate([''])
    alert("Your Response is recorded.We will contact you very Soon")
  }

}
