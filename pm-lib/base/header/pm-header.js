import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from '../pm-component.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';

import { PmHeaderSearch } from './pm-header-search.js';

class PmHeader extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">[[title]]</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <template is="dom-repeat" items="{{menuItems}}">
              <li class="nav-item">
                <a class="nav-link" href="[[item.url]]" >[[item.name]]</a>
              </li>
            </template>
          </ul>
          <pm-header-search enable-searching></pm-header-search>
        </div>
      </nav>
    `;
  }
  static get properties() {
    return {
      menuItems: {
        type: Array,
        value () {
          return [
            {name: 'Demo', url: '/'},
            {name: 'Sources', family: '/'},
          ];
        }
      }
    }
  }

  constructor() {
    super();
    this.title = 'Polymer';
  }
}

customElements.define('pm-header', PmHeader);
