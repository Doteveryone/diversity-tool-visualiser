import { assign } from 'underscore';

// Colors
const colors = [
  "#BC4A35",
  "#D2781D",
  "#E5D219",
  "#A5C61B",
  "#55BF7E",
  "#41A9C5",
  "#416EC5",
  "#8A56BB",
  "#BB569D"
];

const charcoal = "#1A190C";
const gold = '#D2AF1D';

// Typography
const sansSerif = "'Soleil', Helvetica, Segoe UI, sans-serif";
const letterSpacing = "normal";
const fontSize = 14;

// Layout
const baseProps = {
  width: 750,
  height: 500,
  padding: 50,
  colorScale: colors
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Create the theme
const theme = {
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0,
        strokeLinecap,
        strokeLinejoin,
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 20
      }),
      grid: {
        fill: "transparent",
        stroke: "transparent"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        padding: 0,
        fill: gold,
        stroke: "transparent",
        strokeWidth: 0,
        width: 20
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  chart: baseProps,
};

export default theme;
