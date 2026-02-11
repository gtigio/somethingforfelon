let noCount = 0;

function goToPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById("page" + page).classList.add("active");
}

function yesClicked() {
  const page = document.getElementById("page3");
  page.innerHTML = `
    <h1 style="color:#ff2f6d;">YESSSS</h1>
    <img src="yes.png" class="center-image">
  `;
}

function noClicked() {
  noCount++;
  const noBtn = document.getElementById("noBtn");

  if (noCount >= 1) {
    const page = document.getElementById("page3");
    page.innerHTML = `
      <h2 style="color:#ff2f6d;">the heck</h2>
      <img src="no.png" class="center-image">
    `;
    return;
  }

  // Move NO button randomly near center
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = (Math.random() - 0.5) * 200;
  const offsetY = (Math.random() - 0.5) * 150;

  noBtn.style.left = centerX + offsetX + "px";
  noBtn.style.top = centerY + offsetY + "px";
}
