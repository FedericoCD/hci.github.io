var chart = am4core.create("chartdiv2", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    {
        category: "African American",
        value1: 1124,
        value2: 2040,
        value3: 532
    },
    {
        category: "Caucasian",
        value1: 421,
        value2: 1911,
        value3: 122
    },
    {
        category: "Asian",
        value1: 27,
        value2: 4,
        value3: 1
    },
    {
        category: "Native American",
        value1: 10,
        value2: 5,
        value3: 3
    },
    {
        category: "Hispanic",
        value1: 476,
        value2: 123,
        value3: 38
    },
    {
        category: "Other",
        value1: 297,
        value2: 62,
        value3: 18
    }
];

chart.colors.step = 2;
chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;
valueAxis.renderer.minWidth = 50;


var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText =
    "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series1.name = "Low";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText =
    "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series2.name = "Medium";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;
series2.tooltip.pointerOrientation = "vertical";

var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
bullet2.interactionsEnabled = false;
bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet2.locationY = 0.5;
bullet2.label.fill = am4core.color("#ffffff");

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText =
    "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series3.name = "High";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.dataFields.valueYShow = "totalPercent";
series3.dataItems.template.locations.categoryX = 0.5;
series3.stacked = true;
series3.tooltip.pointerOrientation = "vertical";

var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
bullet3.interactionsEnabled = false;
bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet3.locationY = 0.5;
bullet3.label.fill = am4core.color("#ffffff");

chart.scrollbarX = new am4core.Scrollbar();


