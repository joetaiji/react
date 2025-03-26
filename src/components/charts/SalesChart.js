import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const SalesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create root element
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(am5xy.XYChart.new(root, {
      paddingTop: 40,
      paddingBottom: 0,
      layout: root.verticalLayout
    }));

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p100,
      x: am5.p100,
      dx: 50,
      y: 0
    }));

    const data = [
      { "month": "1월", "sales": 1200000000, "income": 600000000 },
      { "month": "2월", "sales": 2400000000, "income": 1200000000 },
      { "month": "3월", "sales": 800000000, "income": 400000000 },
      { "month": "4월", "sales": 1600000000, "income": 1200000000 },
      { "month": "5월", "sales": 400000000, "income": 100000000 },
      { "month": "6월", "sales": 200000000, "income": 50000000 },
      { "month": "7월", "sales": 1200000000, "income": 700000000 },
      { "month": "8월", "sales": 2800000000, "income": 2000000000 },
      { "month": "9월", "sales": 1300000000, "income": 500000000 },
      { "month": "10월", "sales": 700000000, "income": 400000000 },
      { "month": "11월", "sales": 2800000000, "income": 2000000000, "planned": true },
      { "month": "12월", "sales": 1300000000, "income": 500000000, "planned": true }
    ];

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30, minorGridEnabled: false });
    const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "month",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({ location: 1, stroke: am5.color(0xFFFFFF) });
    xRenderer.labels.template.setAll({ fontSize: 15, fill: "#777", paddingTop: 10 });
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 })
    }));

    const yRenderer = yAxis.get("renderer");
    yRenderer.labels.template.setAll({ fontSize: 15, fill: "#777" });
    yRenderer.grid.template.setAll({ stroke: am5.color(0xAAAAAA) });

    // Add series
    function makeSeries(name, fieldName, color, plannedColor) {
      const series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "month",
        fill: color,
      }));

      series.columns.template.setAll({
        tooltipText: "[fontSize:14px]{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        cornerRadiusTL: 4,
        cornerRadiusTR: 4,
        cornerRadiusBL: 4,
        cornerRadiusBR: 4,
        stroke: am5.color(0xFFFFFF),
        strokeWidth: 1,
        fillOpacity: 1
      });

      series.columns.template.adapters.add("fill", function (fill, target) {
        if (target.dataItem.dataContext.planned) {
          return am5.color(0xFFFFFF);
        }
        return fill;
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        if (target.dataItem.dataContext.planned) {
          return plannedColor;
        }
        return stroke;
      });

      series.columns.template.adapters.add("strokeDasharray", function (dasharray, target) {
        if (target.dataItem.dataContext.planned) {
          return [4, 4];
        }
        return dasharray;
      });

      series.data.setAll(data);
      series.appear();
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
      legend.data.push(series);
      legend.labels.template.setAll({ fontSize: 14, fill: "#777" });
    }

    makeSeries("매출", "sales", am5.color(0x304C6F), am5.color(0x304C6F));
    makeSeries("이익", "income", am5.color(0x04B87F), am5.color(0x04B87F));

    // Make stuff animate on load
    chart.appear(1000, 100);

    // Cleanup
    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} className="chart-container" />;
};

export default SalesChart; 