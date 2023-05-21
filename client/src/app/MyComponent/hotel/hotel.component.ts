import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent {
  dest: any = '';
  hotelData: any = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.dest = params.get('data');
      this.getHotelData();
    });
  }

  getHotelData() {
    const data: any = {
      dest: this.dest,
    };
    this.authService.getHotel(data).subscribe(
      (result: any) => {
        this.hotelData = result.data;
        console.log(this.hotelData);
      },
      (err) => console.log(err),
    );
  }
}
