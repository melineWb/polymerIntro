import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

export class PmComponent extends PolymerElement {

  static get template () {
    return html`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
          :host {
            display: block;
          }
        </style>
      `;
  }
}

customElements.define('pm-component', PmComponent);
