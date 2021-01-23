const freelancers = ["1 Users", "Downloads Per Month", "Raster Files"];
const agencies = [
  "3 Users",
  "Unlimited Downloads",
  "Fully-Editable Files",
  "200+ Custom Packs",
];

const listFreelancers = document.querySelector(".list-freelancers");
const listAgencies = document.querySelector(".list-agencies");

listFreelancers.innerHTML = freelancers
  .map((item) => {
    return `<li class="feature-list">
    <i class="fa fa-check-circle" aria-hidden="true"></i> ${item}
    </li>`;
  })
  .join("");

listAgencies.innerHTML = agencies
  .map((item) => {
    return `<li class="feature-list">
    <i class="fa fa-check-circle" aria-hidden="true"></i> ${item}
    </li>`;
  })
  .join("");
