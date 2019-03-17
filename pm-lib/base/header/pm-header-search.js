import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from '../pm-component.js';

import '@polymer/polymer/lib/elements/dom-if.js';

class PmHeaderSearch extends PmComponent {
  static get template() {
    return html `
      ${super.template}

      <style>
        .btn-outline-pm {
          color: var(--pm-primary-color);
          border-color: var(--pm-primary-color);
        }

        .btn-outline-pm:hover {
          color: var(--pm-hover-color);
          border-color: var(--pm-hover-color);
          background: transparent;
        }
      </style>
      
      <template is="dom-if" if="{{enableSearching}}">
        <form class="form-inline my-2 my-lg-0" on-submit="search">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-pm my-2 my-sm-0" type="submit">[[button]]</button>
        </form>
      </template>
    `;
  }

  static get properties() {
    return {
      enableSearching: {
        type: Boolean
      },
    }
  }

  constructor() {
    super();
    this.button = 'Search';
  }

  search() {
    console.log('search');
  }
}

customElements.define('pm-header-search', PmHeaderSearch);
