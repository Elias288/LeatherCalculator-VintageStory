const hideTypes = [
  ["---", "---"],
  ["Small hide", "small_hide"],
  ["Medium hide", "medium_hide"],
  ["Huge hide", "huge_hide"],
  ["Large hide", "large_hide"],
];

const cants = {
  small_hide: {
    cantLiquidPerHide: 2,
    cantLeather: 1,
    maxHidePerBarrel: 25,
  },
  medium_hide: {
    cantLiquidPerHide: 4,
    cantLeather: 2,
    maxHidePerBarrel: 12,
  },
  huge_hide: {
    cantLiquidPerHide: 6,
    cantLeather: 3,
    maxHidePerBarrel: 8,
  },
  large_hide: {
    cantLiquidPerHide: 10,
    cantLeather: 5,
    maxHidePerBarrel: 5,
  },
};

const select = document.querySelector("#selectHide"),
  calc = document.querySelector(".calc"),
  inputRangeHide = document.querySelector("#inputRangeHide"),
  inputRangeLeather = document.querySelector("#inputRangeLeather"),
  maxHideSpan = document.querySelector("#maxHideSpan"),
  maxLeatherSpan = document.querySelector("#maxLeatherSpan");

const cantSelectedHideSpan = document.querySelectorAll(".cantSelectedHideSpan"),
  cantSelectedLeatherSpan = document.querySelectorAll(
    ".cantSelectedLeatherSpan"
  ),
  cantLogsSpan = document.querySelectorAll(".cantLogsSpan"),
  cantLiquidSpan = document.querySelectorAll(".cantLiquidSpan"),
  cantTotalLogsSpan = document.querySelectorAll(".cantTotalLogsSpan"),
  cantTotalLiquidSpan = document.querySelectorAll(".cantTotalLiquidSpan"),
  cantLimeSpan = document.querySelectorAll(".cantLimeSpan"),
  cantBoraxSpan = document.querySelectorAll(".cantBoraxSpan"),
  cantPoweredBoraxSpan = document.querySelectorAll(".cantPoweredBoraxSpan");

const minWaterPerBarrel = 10,
  maxWaterPerBarrel = 50;

let selectedHide = "---",
  cantSelectedHide = 1,
  cantSelectedLeather = 1,
  leatherPerHide = 1,
  maxHide = 0,
  maxLeather = 0,
  liquidPerHide = 0;

for (var i = 0; i < hideTypes.length; i++) {
  var opcion = document.createElement("option");
  opcion.text = hideTypes[i][0];
  opcion.value = hideTypes[i][1];
  select.add(opcion);
}

calc.style = "display: none";

// HIDE TYPE SELECTOR
select.addEventListener("change", (e) => {
  const value = e.target.value;
  resetValues();

  if (value === "---") {
    calc.style = "display: none";
    return;
  }

  selectedHide = value;
  calc.style = "display: flex";

  document.getElementById("hideImage").title = e.target.value;

  init();
  calculate();
});

// INPUT RANGE HIDE
inputRangeHide.addEventListener("input", (e) => {
  cantSelectedHide = e.target.value;
  cantSelectedHideSpan.forEach((e) => {
    e.textContent = cantSelectedHide;
  });

  cantSelectedLeather = cantSelectedHide * leatherPerHide;
  cantSelectedLeatherSpan.forEach((e) => {
    e.textContent = cantSelectedLeather;
  });
  inputRangeLeather.value = cantSelectedHide * leatherPerHide;
  calculate();
});

// INPUT RANGE LEATHER
inputRangeLeather.addEventListener("input", (e) => {
  cantSelectedLeather = e.target.value;
  cantSelectedLeatherSpan.forEach((e) => {
    e.textContent = cantSelectedLeather;
  });

  cantSelectedHide = cantSelectedLeather / leatherPerHide;
  cantSelectedHideSpan.forEach((e) => {
    e.textContent = cantSelectedHide;
  });
  inputRangeHide.value = cantSelectedLeather / leatherPerHide;
  calculate();
});

function init() {
  const val = cants[selectedHide];
  // console.log(val);

  // HIDE
  maxHide = val.maxHidePerBarrel;
  cantSelectedHideSpan.forEach((e) => {
    e.textContent = 1;
  });
  inputRangeHide.max = maxHide;
  maxHideSpan.textContent = maxHide;

  // LEATHER
  leatherPerHide = val.cantLeather;
  liquidPerHide = val.cantLiquidPerHide;
  maxLeather = val.maxHidePerBarrel * leatherPerHide;
  maxLeatherSpan.textContent = maxLeather;
  minLeatherSpan.textContent = leatherPerHide;

  cantSelectedLeatherSpan.forEach((e) => {
    e.textContent = leatherPerHide;
  });
  inputRangeLeather.step = leatherPerHide;
  inputRangeLeather.max = maxLeather;
  inputRangeLeather.min = leatherPerHide;
  inputRangeLeather.value = 1;
}

function calculate() {
  cantLimeSpan.forEach((e) => {
    e.textContent = cantSelectedHide * liquidPerHide;
  });
  cantBoraxSpan.forEach((e) => {
    const cantBorax = Math.ceil((cantSelectedHide * liquidPerHide) / 5) * 5;
    e.textContent = cantBorax;
  });
  cantPoweredBoraxSpan.forEach((e) => {
    e.textContent = Math.ceil((cantSelectedHide * liquidPerHide) / 5) * 2;
  });
  cantLiquidSpan.forEach((e) => {
    e.textContent = Math.ceil((cantSelectedHide * liquidPerHide) / 10) * 10;
  });
  cantTotalLiquidSpan.forEach((e) => {
    const taninWater =
      Math.ceil((cantSelectedHide * liquidPerHide) / 10) * 10 * 2;
    e.textContent = Number(cantSelectedHide) + taninWater;
  });

  cantLogsSpan.forEach((e) => {
    e.textContent = Math.ceil((cantSelectedHide * liquidPerHide) / 10);
  });

  cantTotalLogsSpan.forEach((e) => {
    e.textContent = Math.ceil((cantSelectedHide * liquidPerHide) / 10) * 3;
  });
}

function resetValues() {
  selectedHide = "---";
  leatherPerHide = 1;
  liquidPerHide = 0;
  maxHide = 0;
  maxLeather = 0;
  inputRangeHide.value = 1;
  cantSelectedHide = 1;
}
