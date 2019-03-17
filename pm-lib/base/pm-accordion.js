import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';

import '@polymer/iron-collapse/iron-collapse.js';

class PmAccordion extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <div class="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button id="trigger"
                on-click="toggle"
                class="btn btn-link"
                aria-expanded\$="[[opened]]"
                aria-controls="collapse">
                [[_getText(opened)]]
              </button>
            </h2>
          </div>
          <iron-collapse id="collapse" opened="{{opened}}" class="collapse show" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0">
            <div class="card-body">
              [[data]]
            </div>
          </iron-collapse>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      data: {
        type: String,
        value () {
          return 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
        }
      }
    }
  }

  constructor() {
    super();
  }

  toggle() {
    this.$.collapse.toggle();
  }

  _getText(opened) {
    return opened ? 'Collapse' : 'Expand';
  }

}

customElements.define('pm-accordion', PmAccordion);
