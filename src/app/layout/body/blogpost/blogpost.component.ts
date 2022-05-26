import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() { }
  imageUrl1 = '../assets/post01/ASF-Infa01.drawio.png';
  imageUrl2 = '../assets/post01/aws-route53-01.png';
  imageUrl3 = '../assets/post01/aws-route53-02.png';
  imageUrl4 = '../assets/post01/aws-route53-03.png';

  ngOnInit(): void {
  }

}
