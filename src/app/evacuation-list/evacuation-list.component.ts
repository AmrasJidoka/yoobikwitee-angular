import {Component, Input, OnInit} from '@angular/core';
import {Jidokan} from '../../models/jidokan';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-evacuation-list',
  templateUrl: './evacuation-list.component.html',
  styleUrls: ['./evacuation-list.component.scss']
})
export class EvacuationListComponent implements OnInit {
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

  findPresentJidokans = () => {
    this.registrationService.findAllPresentJidokans().subscribe(this.setPresentJidokans);
  };

  setPresentJidokans = (jidokans: Jidokan[]) => {
    this.presentJidokans = jidokans;
  };

}
