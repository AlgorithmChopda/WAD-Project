import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

interface IHotel {
  name: string;
  location: string;
  address: string;
  description: string;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent {
  dest: any = '';
  hotelData: IHotel[] = [];
  sourceImage: string =
    'https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/02/One-day-in-Mumbai-Itinerary.jpg?w=800&ssl=1';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.dest = params.get('data');
      if (this.dest === 'Nashik') {
        this.sourceImage =
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/0e/61/radisson-blu-hotel-spa.jpg?w=1200&h=-1&s=1';
      }
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

  searchPage() {
    this.router.navigate(['/search']);
  }

  getImage() {
    let src =
      'https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/02/One-day-in-Mumbai-Itinerary.jpg?w=800&ssl=1';
    return src;
  }
}
