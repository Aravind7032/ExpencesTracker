import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const Piechart = () => {
  useEffect(() => {
   
    am4core.useTheme(am4themes_animated);

    
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; 

    
    chart.data = [
      {
        country: "Food&Shopping",
        value: 350
      },
      {
        country: "Entertirenment",
        value: 300
      },
      {
        country: "Travel",
        value: 200
      },
      {
        country: "savings",
        value: 165
      },
      {
        country: "other Allowances",
        value: 139
      },
      
    ];

    
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  


    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

   
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;


    chart.legend = new am4charts.Legend();

 
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []); 

  return (
    <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default Piechart;