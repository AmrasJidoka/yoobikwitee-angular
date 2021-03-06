import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../services/registration.service';
import {Jidokan} from '../../models/jidokan';

@Component({
  selector: 'app-jidokan-presence-overview',
  templateUrl: './jidokan-presence-overview.component.html',
  styleUrls: ['./jidokan-presence-overview.component.scss']
})
export class JidokanPresenceOverviewComponent implements OnInit {
  presentJidokans: Jidokan[];

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.presentJidokans = [
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
      }
    ];
  }

  startScanning = () => {
    this.findPresentJidokans();
    setInterval(() => {
      this.findPresentJidokans();
    }, 5000);
  };

  findPresentJidokans = () => {
    this.registrationService.findAllPresentJidokans().subscribe(this.setPresentJidokans);
  };

  setPresentJidokans = (jidokans: Jidokan[]) => {
    this.presentJidokans = jidokans;
  };
}
