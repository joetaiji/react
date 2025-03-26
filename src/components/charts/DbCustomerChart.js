import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const CustomerChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create root element
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    const zoomableContainer = root.container.children.push(
      am5.ZoomableContainer.new(root, {
        width: am5.p100,
        height: am5.p100,
        wheelable: false,
        pinchZoom: false
      })
    );

    // Create series
    const series = zoomableContainer.contents.children.push(am5hierarchy.Pack.new(root, {
      maskContent: false,
      topDepth: 1,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      fillField: "fill",
    }));

    // Generate and set data
    const data = {
      children: [{
        name: "대전 테크노파크",
        value: 121300000,
        fill: am5.color(0xDAEEE7),
        nodeSettings: {
          fill: am5.color(0x099367)
        }
      }, {
        name: "식품의약품안전처",
        value: 61300000,
        fill: am5.color(0xECF5FF),
        nodeSettings: {
          fill: am5.color(0x134D95)
        }
      }, {
        name: "바이오인 연구기관",
        value: 31300000,
        fill: am5.color(0xFFF1F1),
        nodeSettings: {
          fill: am5.color(0xFF5555)
        }
      }, {
        name: "문학광장",
        value: 13000000,
        fill: am5.color(0xFFF8F1),
        nodeSettings: {
          fill: am5.color(0xE88019)
        }
      }, {
        name: "한국원자력연구원",
        value: 3000000,
        fill: am5.color(0xF8F8FA),
        nodeSettings: {
          fill: am5.color(0x111111)
        }
      }]
    };

    series.labels.template.setAll({
      templateField: "nodeSettings"
    });
    series.nodes.template.set("tooltipText", "[fontSize:14px]{name}: [bold]{sum}[/]");
    series.data.setAll([data]);

    // Make stuff animate on load
    series.appear(1000, 100);

    // Cleanup
    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} className="chart-container" />;
};

export default CustomerChart; 