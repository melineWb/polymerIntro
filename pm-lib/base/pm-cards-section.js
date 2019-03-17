import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';
import { PmCard } from './pm-card.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';


class PmCardsSection extends PmComponent {
  static get template() {
    return html `
      ${super.template}

      <section class="py-5 bg-white">
        <div class="container">
          <div class="mb-4">
            <h2 class="text-dark font-weight-normal">[[title]]</h2>
          </div>

          <div class="row">
            <template is="dom-repeat" items="{{cards}}">
              <div class="col-lg mb-5 mb-lg-0">
                <pm-card card="[[item]]"></pm-card>
              </div>
            </template>
          </div>
        </div>
      </section>
    `;
  }

  constructor() {
    super();
    this.title = 'Locations';
    this.cards = [
      {
        title: 'New York',
        img: 'https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/new-york.jpg',
        text: 'The big apple'
      },
      {
        title: 'Paris',
        img: 'https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/paris.jpg',
        text: 'Artist capital of Europe'
      },
      {
        title: 'Prague',
        img: 'https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/prague.jpg',
        text: 'City of hundred towers'
      },
      {
        title: 'Barcelona',
        img: 'https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/barcelona.jpg',
        text: 'Dalí, Gaudí, Barrio Gotico'
      },
    ]
  }
}

customElements.define('pm-cards-section', PmCardsSection);
