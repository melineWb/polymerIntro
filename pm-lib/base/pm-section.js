import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';
import { PmAccordion } from './pm-accordion.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';

class PmSection extends PmComponent {
  static get template() {
    return html `
      ${super.template}

      <section class="py-5 bg-white">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9 col-xl-8">
              <h2 class="text-dark font-weight-normal">[[title]]</h2>
              <p class="font-italic">[[description]]</p>
            </div>
          </div>
          <template is="dom-repeat" items="{{accordion}}">
            <pm-accordion horizontal data="[[item]]"></pm-accordion>
          </template>
        </div>
      </section>
    `;
  }

  constructor() {
    super();
    this.title = 'Info section';
    this.description = 'When we say that hosting your event at sparrow studios is an unforgettable moment for your company, brand or product, we mean it.';

    this.accordion = [
      'A unique opportunity to pair your brand with ours. Branded content opportunities with Sparrow studios offer your fans legendary experiences thorough candid performances, one-of-a-kind content & town hall events. Sparrow studios is a fully equipped video facility; we offer video capabilities, live streaming & webcasting for all our events.',

      'Events at Sparrow studios offer a truly unique, exclusive space with legendary appeal. Providing premiere event spaces and amenities for hosting formal parties, VIP red carpet events or artist showcases within the setting of the mid-century architecture of Sparrow studios. To hold an event here is to become a part of our legacy.'
    ]
  }
}

customElements.define('pm-section', PmSection);
