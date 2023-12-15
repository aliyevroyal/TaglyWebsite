document.getElementById("oneTime").onclick = subscribeMonthly;
function subscribeMonthly() {
  document.getElementById("oneTime").style.backgroundColor = "#ff3034";
  document.getElementById("oneTime").style.color = "#ffffff";
  document.getElementById("monthly").style.backgroundColor = "#fff6f7";
  document.getElementById("monthly").style.color = "#ff3034";

  $("#monthlySubscriptionPlan").css({ display: "none" });
  $("#oneTimeSubscriptionPlan").css({ display: "flex" });
}

document.getElementById("monthly").onclick = subscribeYearly;
function subscribeYearly() {
  document.getElementById("monthly").style.backgroundColor = "#ff3034";
  document.getElementById("monthly").style.color = "#ffffff";
  document.getElementById("oneTime").style.backgroundColor = "#fff6f7";
  document.getElementById("oneTime").style.color = "#ff3034";

  $("#oneTimeSubscriptionPlan").css({ display: "none" });
  $("#monthlySubscriptionPlan").css({ display: "flex" });
}
