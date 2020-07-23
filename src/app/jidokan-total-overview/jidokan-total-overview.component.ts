import {Component, OnInit} from '@angular/core';
import {Jidokan} from '../../models/jidokan';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-jidokan-total-overview',
  templateUrl: './jidokan-total-overview.component.html',
  styleUrls: ['./jidokan-total-overview.component.scss']
})
export class JidokanTotalOverviewComponent implements OnInit {
  allJidokans: Jidokan[];

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.allJidokans = [
      {
        id: '1',
        firstName: 'Maarten',
        lastName: 'Knapen',
        beaconAddress: '123456',
        present: true,
        lastSeen: '12-01-2020, 14:21',
        loginByVoice: false,
      },
      {
        id: '2',
        firstName: 'Sander',
        lastName: 'Steinbusch',
        beaconAddress: '456789',
        present: true,
        lastSeen: '12-01-2020, 14:39',
        loginByVoice: true,
      },
      {
        id: '3',
        firstName: 'Nele',
        lastName: 'Custers',
        beaconAddress: '987654',
        present: false,
        lastSeen: '10-01-2020, 12:34',
        loginByVoice: false,
      }
    ];
  }

  startScanning = () => {
    this.findPresentJidokans();
    setInterval(() => {
      this.findPresentJidokans();
    }, 50000);
  };

  findPresentJidokans = () => {
    this.registrationService.findAllJidokans().subscribe(this.setPresentJidokans);
  };

  setPresentJidokans = (jidokans: Jidokan[]) => {
    this.allJidokans = jidokans;
  };

}
