import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const MemberChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create root element
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(am5xy.XYChart.new(root, {
      paddingTop: 40,
      paddingLeft: 0,
      layout: root.verticalLayout,
      fontSize: 12
    }));

    const data = [
      { "month": "1월", "total": 48, "new": 9, "out": 8 },
      { "month": "2월", "total": 50, "new": 11, "out": 9 },
      { "month": "3월", "total": 60, "new": 20, "out": 10 },
      { "month": "4월", "total": 60, "new": 8, "out": 6 },
      { "month": "5월", "total": 50, "new": 11, "out": 10 },
      { "month": "6월", "total": 55, "new": 10, "out": 6 },
      { "month": "7월", "total": 52, "new": 8, "out": 7 },
      { "month": "8월", "total": 60, "new": 11, "out": 8 },
      { "month": "9월", "total": 62, "new": 7, "out": 7 },
      { "month": "10월", "total": 58, "new": 20, "out": 7 },
      { "month": "11월", "total": 66, "new": 15, "out": 8, "planned": true },
      { "month": "12월", "total": 70, "new": 17, "out": 12, "planned": true }
    ];

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30, minorGridEnabled: false });
    const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "month",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({ location: 1, stroke: am5.color(0xFFFFFF) });
    xRenderer.labels.template.setAll({ fontSize: 15, paddingTop: 10, fill: "#777" });
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 })
    }));

    const yRenderer = yAxis.get("renderer");
    yRenderer.labels.template.setAll({ fontSize: 15, fill: "#777" });
    yRenderer.grid.template.setAll({ stroke: am5.color(0xAAAAAA) });

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p100,
      x: am5.percent(100),
      dx: 50,
      y: 0
    }));

    // Add series
    function makeSeries(name, fieldName, color, plannedColor) {
      const series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "month",
        fill: color
      }));

      series.columns.template.setAll({
        tooltipText: "[fontSize:14px]{name}, {categoryX}: {valueY}",
        width: am5.percent(50),
        tooltipY: am5.percent(10),
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
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fontSize: 12,
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.unshift(series);
      legend.labels.template.setAll({ fontSize: 14, fill: "#777" });
    }

    makeSeries("퇴사", "out", am5.color(0xF2B8AB), am5.color(0xF2B8AB));
    makeSeries("신규 입사", "new", am5.color(0x134D95), am5.color(0x134D95));
    makeSeries("부서 정원", "total", am5.color(0xDDDDDD), am5.color(0xDDDDDD));

    chart.appear(1000, 100);

    // Cleanup
    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} className="chart-container" />;
};

export default MemberChart; 