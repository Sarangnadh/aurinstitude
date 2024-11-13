import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
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
  enquiryform!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with validation rules
    this.enquiryform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], 
      course: ['', Validators.required]
    });
  }
  

  enquireconfirm() {
    if (this.enquiryform.valid) {
      const enquiry = {
        name: this.enquiryform.value.name,
        email: this.enquiryform.value.email,
        mobno: this.enquiryform.value.mobno,
        course: this.enquiryform.value.course
      };

      // Save to local storage
      localStorage.setItem('enquiry', JSON.stringify(enquiry));

      alert("Your response is recorded. We will contact you very soon.");
      this.router.navigate(['']);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
}
