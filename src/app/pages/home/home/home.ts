import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HomeService } from '../../../utils/services/home/home';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  stepsTexts = '';
  infos: any = {}; 

  @ViewChild('stepElem') stepElem!: ElementRef;
  @ViewChild('stepNumber') stepNumber!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;
  @ViewChild('card2') card2!: ElementRef;
  @ViewChild('card3') card3!: ElementRef;
  @ViewChild('card4') card4!: ElementRef;
  @ViewChild('card5') card5!: ElementRef;
  @ViewChild('img2') img2!: ElementRef;
  @ViewChild('img3') img3!: ElementRef;
  @ViewChild('img4') img4!: ElementRef;
  @ViewChild('img5') img5!: ElementRef;

  constructor(
    private router: Router,
    private homeService: HomeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getInfos();
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getInfos(): void {
    this.homeService.getInfos().subscribe({
      next: res => {
        this.infos = res;
        console.log('Infos utilisateur:', this.infos);

        if(this.currentStep == 1){
        this.stepsTexts = `${this.currentStep} étape validée sur 5`;
        } else {
        this.stepsTexts = `${this.currentStep} étapes validées sur 5`;
        }
       
        this.updateProgression();
      },
      error: err => {
        console.error('Erreur récupération infos:', err);
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  get currentStep(): number {
    if (!this.infos) return 0;
    return this.infos.step ? this.infos.step : 0;
  }

  get initials(): string {
    if (!this.infos) return '';
    const first = this.infos.firstName ? this.infos.firstName.charAt(0) : '';
    const last = this.infos.lastName ? this.infos.lastName.charAt(0) : '';
    return (first + last).toUpperCase();
  }


  private updateProgression(): void {
    if (!this.circle) return; 
    const current = this.currentStep;
    if (current > 5) return;

    const r = 130;
    const perimeter = 2 * Math.PI * r;
    this.circle.nativeElement.setAttribute('stroke-dasharray', perimeter);

    const percent = current / 5;
    const offset = perimeter * (1 - percent);
    this.circle.nativeElement.setAttribute('stroke-dashoffset', offset);

    switch (current) {
      case 2:
        this.card2.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card2.nativeElement.style.color = 'black';
        this.img2.nativeElement.src = "assets/validation.png";
        break;
      case 3:
        this.card2.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card2.nativeElement.style.color = 'black';
        this.img2.nativeElement.src = "assets/validation.png";
        this.card3.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card3.nativeElement.style.color = 'black';
        this.img3.nativeElement.src = "assets/validation.png";
        break;
      case 4:
        this.card2.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card2.nativeElement.style.color = 'black';
        this.img2.nativeElement.src = "assets/validation.png";
        this.card3.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card3.nativeElement.style.color = 'black';
        this.img3.nativeElement.src = "assets/validation.png";
        this.card4.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card4.nativeElement.style.color = 'black';
        this.img4.nativeElement.src = "assets/validation.png";
        break;
      case 5:
        this.card2.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card2.nativeElement.style.color = 'black';
        this.img2.nativeElement.src = "assets/validation.png";
        this.card3.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card3.nativeElement.style.color = 'black';
        this.img3.nativeElement.src = "assets/validation.png";
        this.card4.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card4.nativeElement.style.color = 'black';
        this.img4.nativeElement.src = "assets/validation.png";
        this.card5.nativeElement.style.backgroundColor = '#FFFFFF';
        this.card5.nativeElement.style.color = 'black';
        this.img5.nativeElement.src = "assets/validation.png";
        break;
    }
  }


  ngAfterViewInit() {}
}
