var data = [];
var value1 = 100;
var value2 = 200;
var value3 = 400;

var names = ["sexy",
  "attractive",
  "beautiful",
  "pretty",
  "adorable",
  "nude",
  "red-haired",
  "blond",
  "shopping",
  "dishes",
  "dinner",
  "decorating",
  "kitchen",
  "crying",
  "cute",
  "sewing",
  "professional",
  "pilot",
  "athele",
  "engineer",
  "president",
  "football",
  "baseball",
  "soccer"
];


// for (var i = 0; i < names.length; i++) {
//   // value1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//   // value2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//   // value3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//   data.push({ category: names[i], value1: value1, value2:value2, value3:value3 });
// }

data.push({ category: "sexy" , value1: 2.14 , value2: 0, value3: 0.16 });
data.push({ category: "attractive" , value1: 2.08 , value2: 0, value3: 0.18 });
data.push({ category: "beautiful", value1: 1.95 , value2: 0, value3: 0.30 });
data.push({ category: "pretty" , value1: 1.92 , value2: 0, value3: 0.27 });
data.push({ category: "adorable" , value1: 1.84 , value2: 0, value3: 0.24 });
data.push({ category: "nude" , value1: 1.53 , value2: 0, value3: 0.47 });
data.push({ category: "red-haired" , value1: 1.84 , value2: 0, value3: 0.15 });
data.push({ category: "blond" , value1: 1.63 , value2: 0, value3: 0.41 });
data.push({ category: "dishes" , value1: 1.43 , value2: 0, value3: 0.56 });
data.push({ category: "dinner" , value1: 1.42 , value2: 0, value3: 0.75 });
data.push({ category: "decorating" , value1: 1.42 , value2: 0, value3: 0.42 });
data.push({ category: "kitchen" , value1: 1.21 , value2: 0, value3: 0.70 });
data.push({ category: "crying" , value1: 1.87 , value2: 0, value3: 0.19 });
data.push({ category: "cute" , value1: 1.38 , value2: 0, value3: 0.57 });
data.push({ category: "sewing" , value1: 1.82 , value2: 0, value3: 0.17 });
data.push({ category: "professional" , value1: 0.49 , value2: 0, value3: 1.78 });
data.push({ category: "pilot" , value1: 0.38 , value2: 0, value3: 1.06 });
data.push({ category: "athele" , value1: 0.24 , value2: 0, value3: 1.16 });
data.push({ category: "engineer" , value1: 0.14 , value2: 0, value3: 1.19 });
data.push({ category: "president" , value1: 0.09 , value2: 0, value3: 1.19 });
data.push({ category: "football" , value1: 0.31 , value2: 0, value3: 1.12 });
data.push({ category: "baseball" , value1: 0.12 , value2: 0, value3: 1.15 });
data.push({ category: "soccer" , value1: 0.63 , value2: 0, value3: 1.89 });

am4core.useTheme(am4themes_animated);

var interfaceColors = new am4core.InterfaceColorSet();

var chart = am4core.create("chartdiv1", am4charts.XYChart);

chart.data = data;
// the following line makes value axes to be arranged vertically.
chart.bottomAxesContainer.layout = "horizontal";
chart.bottomAxesContainer.reverseOrder = true;
chart.arrangeTooltips = false;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.stroke = interfaceColors.getFor("background");
categoryAxis.renderer.grid.template.strokeOpacity = 1;
categoryAxis.renderer.grid.template.location = 1;
categoryAxis.renderer.minGridDistance = 20;

var valueAxis1 = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis1.tooltip.disabled = true;
valueAxis1.renderer.baseGrid.disabled = true;
valueAxis1.marginRight = 30;
valueAxis1.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
valueAxis1.renderer.gridContainer.background.fillOpacity = 0.05;
valueAxis1.renderer.grid.template.stroke = interfaceColors.getFor("background");
valueAxis1.renderer.grid.template.strokeOpacity = 1;
valueAxis1.title.text = "Female";

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.categoryY = "category";
series1.dataFields.valueX = "value1";
series1.tooltipText = "{valueX.value}";
series1.xAxis = valueAxis1;
series1.name = "Series 1";
series1.bullets.push(new am4charts.CircleBullet());

// var valueAxis2 = chart.xAxes.push(new am4charts.ValueAxis());
// valueAxis2.tooltip.disabled = true;
// valueAxis2.renderer.baseGrid.disabled = true;
// valueAxis2.marginRight = 30;
// valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
// valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
// valueAxis2.renderer.grid.template.stroke = interfaceColors.getFor("background");
// valueAxis2.renderer.grid.template.strokeOpacity = 1;
// valueAxis2.title.text = "Axis 2";

// var series2 = chart.series.push(new am4charts.ColumnSeries());
// series2.dataFields.categoryY = "category";
// series2.dataFields.valueX = "value2";
// series2.tooltipText = "{valueX.value}";
// series2.xAxis = valueAxis2;
// series2.name = "Series 2";

var valueAxis3 = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis3.tooltip.disabled = true;
valueAxis3.renderer.baseGrid.disabled = true;
valueAxis3.renderer.gridContainer.background.fill = interfaceColors.getFor("alternativeBackground");
valueAxis3.renderer.gridContainer.background.fillOpacity = 0.05;
valueAxis3.renderer.grid.template.stroke = interfaceColors.getFor("background");
valueAxis3.renderer.grid.template.strokeOpacity = 1;
valueAxis3.title.text = "Male";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.categoryY = "category";
series3.dataFields.valueX = "value3";
series3.tooltipText = "{valueX.value}";
series3.xAxis = valueAxis3;
series3.name = "Series 3";
series3.bullets.push(new am4charts.CircleBullet());

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

var scrollbarY = new am4core.Scrollbar();
chart.scrollbarY = scrollbarY;