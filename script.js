document.getElementById("15Cups").onclick = subscribeMonthly;
function subscribeMonthly() {
  document.getElementById("15Cups").style.backgroundColor = "#14cc60";
  document.getElementById("15Cups").style.color = "#f5f5f5";
  document.getElementById("30Cups").style.backgroundColor = "#f5f5f5";
  document.getElementById("30Cups").style.color = "#0a2e36";

  $("#30CupsSubscription").css({ display: "none" });
  $("#15CupsSubscription").css({ display: "flex" });
}

document.getElementById("30Cups").onclick = subscribeYearly;
function subscribeYearly() {
  document.getElementById("30Cups").style.backgroundColor = "#14cc60";
  document.getElementById("30Cups").style.color = "#f5f5f5";
  document.getElementById("15Cups").style.backgroundColor = "#f5f5f5";
  document.getElementById("15Cups").style.color = "#0a2e36";

  $("#15CupsSubscription").css({ display: "none" });
  $("#30CupsSubscription").css({ display: "flex" });
}
