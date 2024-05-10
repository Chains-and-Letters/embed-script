"use strict";

(function () {
  document.addEventListener("readystatechange", (event) => {
    if (document.readyState !== "complete") return;
    const container = document.querySelector("div#cal-newsletter-container");
    const apiKey = document
      .querySelector("script#cal-script")
      .getAttribute("data-api-key");

    container.innerHTML = `
      <form class="cal-form" method="post" action="https://www.chainsandletters.com/api/v1/subscribe/${apiKey}">
        <div class="cal-form-field">
          <label for="newsletter-name">Name</label>
          <input name="name" type="text" id="newsletter-name" placeholder="Enter your name" required>
        </div>
        <div class="cal-form-field">
          <label for="newsletter-email">Email Address</label>
          <input name="email" type="email" id="newsletter-email" placeholder="Enter your email address" required>
        </div>
        <input class="cal-form-valid-key" type="text" name="validKey" value="">
        <button class="cal-form-button" type="submit">Subscribe</button>
        <p style="display:block;text-align:center;font-size:10px;color:#3d3d3d;">Powered by <a href="https://chains-and-letters.com" target="_blank">Chains and Letters</a></p>
      </form>
    `;
  });
})();
