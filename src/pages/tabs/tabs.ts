import { Component } from '@angular/core';

import { PublikasiPage } from '../publikasi/publikasi';
import { BrsPage } from '../brs/brs';
import { BerandaPage } from '../beranda/beranda';
import { LainnyaPage } from '../lainnya/lainnya';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BerandaPage;
  tab2Root = BrsPage;
  tab3Root = PublikasiPage;
  tab4Root = LainnyaPage;

  constructor() {

  }
}
