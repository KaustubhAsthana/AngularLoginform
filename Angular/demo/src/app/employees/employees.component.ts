import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  headers = ["EmailID", "Name", "Number"];

  rows=[
    {
      "EmailID" : "kaustubhasthana2@gmail.com",
      "Name" :" Kaustubh Asthana ",
      "Number" : "8188998464"
    },
    {
      "EmailID" : "kaustubhasthana23@gmail.com",
      "Name" :" Chitransh Asthana ",
      "Number" : "8188998463"
    },
    {
      "EmailID" : "kaustubhasthana33@gmail.com",
      "Name" :" Rohan Gavaskar ",
      "Number" : "8449525994"
    },
    {
      "EmailID" : "kaustubhasthana43@gmail.com",
      "Name" :" Sachin Tendulkar ",
      "Number" : "8994372593"
    }
  ]


}
