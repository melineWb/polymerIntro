import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PmComponent } from '../pm-component.js';

class PmFooter extends PmComponent {
  static get template() {
    return html `
      ${super.template}
      <footer class="position-relative z-index-10 shadow-sm">
        <div class="pt-5 pb-2 bg-light text-muted">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mb-5 mb-lg-0">
                <div class="font-weight-bold text-uppercase text-dark mb-3">[[title]]</div>
                <p>[[description]]</p>
                <a href="[[article.url]]" class="text-decoration-none">[[article.name]]</p>
              </div>
              <div class="col">
                <div class="font-weight-bold text-uppercase text-dark mb-3">Navigation links</div>

                <template is="dom-repeat" items="{{links}}">
                  <div>
                    <a href="[[item.url]]" class="text-decoration-none" >[[item.name]]</a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
  static get properties() {
    return {
      links: {
        type: Array,
        value () {
          return [
            {
              name: 'Blog',
              url: 'meline.lviv.ua'
            },
            {
              name: 'YouTube',
              url: 'meline.lviv.ua'
            },
          ];
        }
      }
    }
  }

  constructor() {
    super();
    this.title = 'Polymer Demo';
    this.description = 'Demo проект с Polymer';
    this.article = {name: 'Article Link: Polymer v3 Intro', url: 'meline.lviv.ua'};
  }
}

customElements.define('pm-footer', PmFooter);
