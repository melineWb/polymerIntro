import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from './pm-component.js';

class PmCard extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <style>
        .card-poster{
          width: 100%;
          height: 350px;
          background-size: cover;
        }

        .card-body {
          z-index: 1;
        }

      </style>

      <div class="card card-poster gradient-overlay mb-4 mb-lg-0 overflow-hidden"
        style="background: url({{card.img}}); background-size: cover">
        <div class="card-body overlay-content">
          <h6 class="card-title text-shadow text-uppercase text-white font-weight-bold">{{card.title}}</h6>
          <p class="card-text text-sm text-white font-weight-normal">{{card.text}}</p>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      card: {
        type: Object
      },
    }
  }
}

customElements.define('pm-card', PmCard);
