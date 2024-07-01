const options = {
  container: document.getElementById("myChart"),
  data: getData(),
  title: {
    text: "Revenue by Product Category",
  },
  subtitle: {
    text: "Millions USD",
  },
  series: [
    {
      type: "radial-column",
      angleKey: "quarter",
      radiusKey: "software",
      radiusName: "Software",
      fillOpacity: 0.6,
      stacked: true,
    },
    {
      type: "radial-column",
      angleKey: "quarter",
      radiusKey: "hardware",
      radiusName: "Hardware",
      fillOpacity: 0.4,
      stacked: true,
    },
    {
      type: "radial-column",
      angleKey: "quarter",
      radiusKey: "services",
      radiusName: "Services",
      fillOpacity: 0.2,
      stacked: true,
    },
  ],
  axes: [
    {
      type: "radius-number",
      innerRadiusRatio: 0.4,
      reverse: true,
      label: {
        enabled: false,
      },
    },
    {
      type: "angle-category",
      paddingInner: 0.2,
    },
  ],
};

agCharts.AgCharts.create(options);
