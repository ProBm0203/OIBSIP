const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function() {
  const tempInput = document.getElementById("tempInput").value;
  const tempUnit = document.getElementById("tempUnit").value;
  let convertedTemp = 0;

  if (!tempInput || isNaN(tempInput)) {
    alert("Please enter a valid temperature.");
    return;
  }

  if (tempUnit === "celsius") {
    convertedTemp = (tempInput * 9/5) + 32;
    document.getElementById("result").innerHTML = convertedTemp + " °F";
  } else {
    convertedTemp = (tempInput - 32) * 5/9;
    document.getElementById("result").innerHTML = convertedTemp + " °C";
  }
});
