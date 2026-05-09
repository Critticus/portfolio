fetch('https://www.githubstatus.com/api/v2/summary.json')
  .then(response => response.json())
  .then(data => {
    const monitoring = document.getElementById('monitoring');

    monitoring.innerHTML = `
      <article class="col-12 col-md-6 col-lg-4">
        <section class="border rounded-4 p-4 bg-light h-100">
          <h3 class="fs-5">GitHub Status</h3>
          <p><strong>Status:</strong> ${data.status.description}</p>
          <p><strong>Indicator:</strong> ${data.status.indicator}</p>
        </section>
      </article>
    `;
  });