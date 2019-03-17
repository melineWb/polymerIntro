import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';
import { PmCard } from './pm-card.js';

import '@polymer/polymer/lib/elements/dom-repeat.js';


class PmContentSection extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <style>
        .title-hr{
          width: 6rem;
          height: 3px;
          background: var(--pm-primary-color);
          margin: 1.5em 0;
          border-radius: 0.25em;
        }
      </style>

      <section class="py-5 bg-white">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9 col-xl-8">
              <h2 class="text-dark font-weight-normal">[[title]]</h2>
              <p class="font-italic">[[description]]</p>
            </div>
          </div>

          <div class="row">
            <template is="dom-repeat" items="{{items}}">
              <div class="col-lg mb-5 mb-lg-0">
                <h3 class="mt-4 mb-2">[[item.title]]</h3>
                <hr class="title-hr" />

                <p class="text-justify">[[item.description]]</p>

                <ul class="mt-4 pl-4">
                  <template is="dom-repeat" items="{{item.opportunities}}">
                    <li>[[item]]</li>
                  </template>
                <ul>
              </div>
            </template>
          </div>
        </div>
      </section>
    `;
  }

  constructor() {
    super();
    this.title = 'Make your mark';
    this.description = 'When we say that hosting your event at sparrow studios is an unforgettable moment for your company, brand or product, we mean it.';
    this.items = [
      {
        title: 'partnership',
        description: 'We will collaborate with you in producing media-facing content, copy, interviews, trade show appearances and advertising. We facilitate exclusive access to our studios and unique experiences throughout the year to showcase your product to your current and potential clients in premier spaces.',
        opportunities: [
          'Strategy Pairing',
          'Academy Awards',
          'Contesting',
          'Licensing'
        ]
      },
      {
        title: 'content opportunities',
        description: 'A unique opportunity to pair your brand with ours. Branded content opportunities with Sparrow studios offer your fans legendary experiences thorough candid performances, one-of-a-kind content & town hall events. Sparrow studios is a fully equipped video facility; we offer video capabilities, live streaming & webcasting for all our events.',
        opportunities: [
          'Sponsored Content',
          'Interviews',
          'Artist Performances',
          'Showcases',
          'Town Halls',
        ]
      },
      {
        title: 'experiential',
        description: 'Events at Sparrow studios offer a truly unique, exclusive space with legendary appeal. Providing premiere event spaces and amenities for hosting formal parties, VIP red carpet events or artist showcases within the setting of the mid-century architecture of Sparrow studios. To hold an event here is to become a part of our legacy.',
        opportunities: [
          'Product Launches',
          'Press Events',
          'Seminars & Demos',
        ]
      },
    ]
  }
}

customElements.define('pm-content-section', PmContentSection);
