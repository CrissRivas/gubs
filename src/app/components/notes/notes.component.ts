import { Component, OnInit } from '@angular/core';
 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/scss';
 import 'swiper/scss/navigation';
 import 'swiper/scss/pagination';
 import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit(): void {

  }




}
