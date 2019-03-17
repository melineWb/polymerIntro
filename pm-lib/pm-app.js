import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';

import { PmHeader } from './base/header/pm-header.js';
import { PmFooter } from './base/footer/pm-footer.js';
import { PmJumbotron } from './base/pm-jumbotron.js';
import { PmSection } from './base/pm-section.js';
import { PmCardsSection } from './base/pm-cards-section.js';
import { PmContentSection } from './base/pm-content-section.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class PmApp extends PolymerElement {
  static get template () {
    return html`
        <pm-header></pm-header>
        <pm-jumbotron></pm-jumbotron>
        <pm-content-section></pm-content-section>

        <pm-section></pm-section>

        <pm-cards-section></pm-cards-section>
        <pm-footer></pm-footer>
      `;
  }
}

window.customElements.define('pm-app', PmApp);
