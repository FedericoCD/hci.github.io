/**
 * Chart design inspired by Nicolas Rapp: https://nicolasrapp.com/studio/
 */

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv4", am4charts.RadarChart);

chart.data = [
  {
    word: "sexy",
    value1: 2.14,
    value2: 0.16
  },
  {
    word: "attractive",
    value1: 2.08,
    value2: 0.18
  },
  {
    word: "beautiful",
    value1: 1.95,
    value2: 0.30
  },
  {
    word: "pretty",
    value1: 1.92,
    value2: 0.27
  },
  {
    word: "adorable",
    value1: 1.84,
    value2: 0.24
  },
  {
    word: "red-haired",
    value1: 1.84,
    value2: 0.15
  },
  {
    word: "blond",
    value1: 1.63,
    value2: 0.41
  },
  {
    word: "nude",
    value1: 1.53,
    value2: 0.47
  },
  {
    word: "shopping",
    value1: 1.49,
    value2: 0.58
  },
  {
    word: "dishes",
    value1: 1.43,
    value2: 0.56
  },
  {
    word: "dinner",
    value1: 1.42,
    value2: 0.75
  },
  {
    word: "decorating",
    value1: 1.42,
    value2: 0.42
  },
  {
    word: "kitchen",
    value1: 1.21,
    value2: 0.70
  },
  {
    word: "crying",
    value1: 1.87,
    value2: 0.19
  },
  {
    word: "cute",
    value1: 1.38,
    value2: 0.57
  },
  {
    word: "sewing",
    value1: 1.82,
    value2: 0.17
  },
  {
    word: "professional",
    value1: 0.49,
    value2: 1.78
  },
  {
    word: "pilot",
    value1: 0.38,
    value2: 1.06
  },
  {
    word: "athele",
    value1: 0.24,
    value2: 1.16
  },
  {
    word: "engineer",
    value1: 0.14,
    value2: 1.19
  },
  {
    word: "president",
    value1: 0.09,
    value2: 1.19
  },
  {
    word: "football",
    value1: 0.31,
    value2: 1.12
  },
  {
    word: "baseball",
    value1: 0.12,
    value2: 1.15
  },
  {
    word: "soccer",
    value1: 0.63,
    value2: 1.89
  }

];


chart.padding(0, 0, 0, 0);
chart.radarContainer.dy = 100;
chart.innerRadius = am4core.percent(40);
chart.radius = am4core.percent(100);
chart.zoomOutButton.padding(20, 20, 20, 20);
chart.zoomOutButton.margin(0, 0, 0, 0);
chart.zoomOutButton.background.cornerRadius(40, 40, 40, 40);
chart.zoomOutButton.valign = "bottom";

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "word";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.interactionsEnabled = false;

var categoryAxisRenderer = categoryAxis.renderer;
categoryAxisRenderer.cellStartLocation = 0;
categoryAxisRenderer.tooltipLocation = 0.5;

categoryAxisRenderer.axisFills.template.fill = am4core.color("#ffffff");
categoryAxisRenderer.axisFills.template.fillOpacity = 0.2;
categoryAxisRenderer.axisFills.template.location = -0.5;
categoryAxisRenderer.axisFills.template.disabled = false;
categoryAxisRenderer.line.disabled = true;
categoryAxisRenderer.tooltip.disabled = true;
categoryAxisRenderer.grid.template.disabled = true;
categoryAxis.renderer.labels.template.disabled = true;

categoryAxis.adapter.add("maxZoomFactor", function (maxZoomFactor, target) {
  return target.dataItems.length / 5;
})

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.grid.template.disabled = true;
valueAxisRenderer.line.disabled = true;
valueAxis.min = 0;
valueAxis.renderer.tooltip.disabled = true;

var series1 = chart.series.push(new am4charts.RadarSeries());
series1.name = "MALE";
series1.dataFields.categoryX = "word";
series1.dataFields.valueY = "value2";
series1.stacked = true;
series1.fillOpacity = 0.5;
series1.fill = am4core.color("#2d4578");
series1.strokeOpacity = 0;
series1.dataItems.template.locations.categoryX = 0.5;
series1.sequencedInterpolation = true;
series1.sequencedInterpolationDelay = 50;

var series2 = chart.series.push(new am4charts.RadarSeries());
series2.name = "FEMALE";
series2.dataFields.categoryX = "word";
series2.dataFields.valueY = "value1";
series2.stacked = true;
series2.fillOpacity = 0.5;
series2.fill = am4core.color("#62b5ce");
series2.stacked = false;
series2.strokeOpacity = 0;
series2.dataItems.template.locations.categoryX = 0.5;
series2.sequencedInterpolation = true;
series2.sequencedInterpolationDelay = 50;
series2.tooltipText = "[bold]{categoryX}[/]\nFemale: {value1}\nMale: {value2}";
series2.tooltip.pointerOrientation = "vertical";
series2.tooltip.label.fill = am4core.color("#ffffff");
series2.tooltip.label.fontSize = "1em";
series2.tooltip.autoTextColor = false;

chart.seriesContainer.zIndex = -1;
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
chart.scrollbarY = new am4core.Scrollbar();

chart.padding(0, 0, 0, 0)

chart.scrollbarY.padding(20, 0, 20, 0);
chart.scrollbarX.padding(0, 20, 0, 80);

chart.scrollbarY.background.padding(20, 0, 20, 0);
chart.scrollbarX.background.padding(0, 20, 0, 80);


chart.cursor = new am4charts.RadarCursor();
chart.cursor.lineX.strokeOpacity = 1;
chart.cursor.lineY.strokeOpacity = 0;
chart.cursor.lineX.stroke = am4core.color("#62b5ce");
chart.cursor.innerRadius = am4core.percent(30);
chart.cursor.radius = am4core.percent(80);
chart.cursor.selection.fill = am4core.color("#62b5ce");

// var bullet = series2.bullets.create();
// bullet.fill = am4core.color("#000000");
// bullet.strokeOpacity = 0;
// bullet.locationX = 0.5;

var bullet = series1.bullets.create();
bullet.fill = am4core.color("#000000");
bullet.strokeOpacity = 0;
bullet.locationX = 0.5;

var line = bullet.createChild(am4core.Line);
line.x2 = -100;
line.x1 = 0;
line.y1 = 0;
line.y1 = 0;
line.strokeOpacity = 1;

line.stroke = am4core.color("#000000");
line.strokeDasharray = "2,3";
line.strokeOpacity = 0.4;


// var bulletValueLabel = bullet.createChild(am4core.Label);
// bulletValueLabel.text = "{valueY.total.formatNumber('$#.0')}";
// bulletValueLabel.verticalCenter = "middle";
// bulletValueLabel.horizontalCenter = "right";
// bulletValueLabel.dy = -3;

var label = bullet.createChild(am4core.Label);
label.text = "{categoryX}";
label.verticalCenter = "middle";
label.paddingLeft = 20;

valueAxis.calculateTotals = true;


chart.legend = new am4charts.Legend();
chart.legend.parent = chart.radarContainer;
chart.legend.width = 110;
chart.legend.horizontalCenter = "middle";
chart.legend.markers.template.width = 22;
chart.legend.markers.template.height = 18;
chart.legend.markers.template.dy = 2;
chart.legend.labels.template.fontSize = "0.9em";
chart.legend.dy = 20;
chart.legend.dx = -9;

chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
var itemHoverState = chart.legend.itemContainers.template.states.create("hover");
itemHoverState.properties.dx = 5;

var title = chart.radarContainer.createChild(am4core.Label);
title.text = "CAPTION WORDS"
title.fontSize = "1.4em";
title.verticalCenter = "bottom";
title.textAlign = "middle";
title.horizontalCenter = "middle";
title.fontWeight = "800";

chart.maskBullets = false;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 2;
var hoverState = circle.states.create("hover");

hoverState.properties.scale = 5;

bullet.events.on("positionchanged", function (event) {
  event.target.children.getIndex(0).invalidate();
  event.target.children.getIndex(1).invalidatePosition();
})


bullet.adapter.add("dx", function (dx, target) {
  var angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.cos(angle);
})

bullet.adapter.add("dy", function (dy, target) {
  var angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.sin(angle);
})

bullet.adapter.add("rotation", function (dy, target) {
  var angle = Math.min(chart.endAngle, Math.max(chart.startAngle, categoryAxis.getAngle(target.dataItem, "categoryX", 0.5)));
  return angle;
})


line.adapter.add("x2", function (x2, target) {
  var dataItem = target.dataItem;
  if (dataItem) {
    var position = valueAxis.valueToPosition(dataItem.values.valueY.value + dataItem.values.valueY.stack);
    return -(position * valueAxis.axisFullLength + 35);
  }
  return 0;
})


bulletValueLabel.adapter.add("dx", function (dx, target) {
  var dataItem = target.dataItem;

  if (dataItem) {
    var position = valueAxis.valueToPosition(dataItem.values.valueY.value + dataItem.values.valueY.stack);
    return -(position * valueAxis.axisFullLength + 40);
  }
  return 0;
})


chart.seriesContainer.zIndex = 10;
categoryAxis.zIndex = 11;
valueAxis.zIndex = 12;

chart.radarContainer.zIndex = 20;


var previousBullets = [];
series2.events.on("tooltipshownat", function (event) {
  var dataItem = event.dataItem;

  for (var i = 0; i < previousBullets.length; i++) {
    previousBullets[i].isHover = false;
  }

  previousBullets = [];

  var itemBullet = dataItem.bullets.getKey(bullet.uid);

  for (var i = 0; i < itemBullet.children.length; i++) {
    var sprite = itemBullet.children.getIndex(i);
    sprite.isHover = true;
    previousBullets.push(sprite);
  }
})

series2.tooltip.events.on("visibilitychanged", function () {
  if (!series2.tooltip.visible) {
    for (var i = 0; i < previousBullets.length; i++) {
      previousBullets[i].isHover = false;
    }
  }
})

chart.events.on("maxsizechanged", function () {
  if (chart.pixelInnerRadius < 200) {
    title.disabled = true;
    chart.legend.verticalCenter = "middle";
    chart.legend.dy = 0;
  }
  else {
    title.disabled = false;
    chart.legend.verticalCenter = "top";
    chart.legend.dy = 20;
  }
})