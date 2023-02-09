// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var SubDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "Basic";
var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  console.log(subType);
  updateMonthlySubscriptionDiv();
});

SubDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  console.log(subDuration);
  updateMonthlySubscriptionDiv();
});
var updateMonthlySubscriptionDiv = function () {
  var monthlyCost = Number(5);
  if (subType === "standard") {
    monthlyCost = Number(7);
  } else if (subType === "premium") {
    monthlyCost = Number(10);
  }
  var total = monthlyCost * subDuration;
  result.innerText = `You have chosen a ${subDuration} month(s) ${subType} plan for $${total} .`;
};
