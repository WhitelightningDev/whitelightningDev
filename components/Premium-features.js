class Premium_features extends HTMLElement {
  constructor() {
      super();

      // Create a shadow root
      this.attachShadow({ mode: 'open' });

      // Define the HTML content
      this.shadowRoot.innerHTML = `
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

          <style>
          /* Your custom styles here */
          /* Ensure proper class naming and specificity */
          .Premium-card {
            /* Example styles */
            margin-top:100px;
            margin-left: 30px;
            margin-right: 30px;
            border: 1px solid #ccc; /* Add a thin border */
            border-radius: 20px;
            padding: 10px;
            /* Add more custom styles as needed */
          }
          .Premium_button{
            width: 120px;
            height: 50px;
            border-radius: 15px;
            border: 1px solid;
            background-color: lightblue;
            color: white;
        }

          h1{
            text-align:center;
          }
          
        
  
          /* Include Bootstrap or other framework-specific styles */
          /* These styles might override some of your custom styles */
          /* Ensure proper specificity or use !important if necessary */
        </style>
  
          <div class="Premium-card">

          <h1>Premium Features</h1>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Custom Design and Branding</h3>
                <p>Tailored, unique designs that reflect the client's brand identity, including custom layouts, color schemes, typography, and visual elements.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Responsive Design</h3>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">High-Quality Visuals</h3>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#home"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Advanced Functionality</h3>
                <p>Incorporation of advanced functionalities such as interactive elements, animations, parallax scrolling, and dynamic content to engage visitors.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#speedometer2"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">E-commerce Integration</h3>
                <p> If required, integration of sophisticated e-commerce functionalities for online stores, including secure payment gateways, inventory management, and product showcasing.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#toggles2"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Search Engine Optimization (SEO)</h3>
                <p> Implementation of SEO best practices to optimize the website's visibility in search engines, including keyword optimization, meta tags, and site structure.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#geo-fill"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Performance Optimization</h3>
                <p>Optimizing the website for speed and performance, including efficient coding, caching mechanisms, and minimizing load times.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"/></svg>
              <div>
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Analytics and Tracking</h3>
                <p>Integration of analytics tools like Google Analytics to track website performance, user behavior, and metrics for continuous improvement.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
            <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"/></svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Custom Development</h3>
              <p>Custom functionalities, plugins, or modules tailored to specific client requirements, providing unique and specialized features.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
          <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#tools"/></svg>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Support and Maintenance</h3>
            <p>Ongoing technical support, maintenance, and updates to ensure the website remains functional, secure, and up-to-date with the latest standards.</p>
          </div>
          
        </div>
        
          </div>
          <button href="features.html" class="Premium_button" type="button">Contact us</button>
        </div>
        
        </div>
      `;
  }
}

customElements.define('premium-feature-component', Premium_features);
