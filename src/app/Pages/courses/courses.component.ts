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
    {
      id:8,
      courseName:"B.Des Fashion Design",
      Duration:"4 Years",
      Eligibility:"10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:9,
      courseName:"Diploma in Fashion Design",
      Duration:"1 Year",
      Eligibility:"10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:10,
      courseName:"M.Des Fashion Technology",
      Duration:"2 Years (4 Semesters)",
      Eligibility:"Bachelor's Degree in Design / Fine Arts / Applied Arts",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:11,
      courseName:"Certificate in Fashion Styling",
      Duration:"6 Months",
      Eligibility:"10+2 or equivalent",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:12,
      courseName:"PG Diploma in Fashion Merchandising and Retail Management",
      Duration:"1 Year",
      Eligibility:"A graduate degree in any discipline",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:13,
      courseName:"BSc Apparel and Fashion Design",
      Duration:"3 Years",
      Eligibility:"10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    },
    {
      id:14,
      courseName:"Diploma in Textile Design",
      Duration:"1 Year",
      Eligibility:"10+2 with a minimum 50% aggregate marks",
      desaiif:"Value added programs from AIIF"
    }
    
   
  ]
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  enquireconfirm() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const mobno = (document.getElementById('mobno') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const course = (document.getElementById('course') as HTMLSelectElement).value;

    const enquiry = {
      name: name,
      mobile: mobno,
      email: email,
      course: course
    };

    localStorage.setItem('enquiry', JSON.stringify(enquiry));

    alert("Your response is recorded. We will contact you very soon.");
    this.router.navigate(['']);
  }

}
