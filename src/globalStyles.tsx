/* eslint-disable no-param-reassign */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = (input: string): string => {
  input += '';
  input = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    const first = input[0];
    const second = input[1];
    const last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return (
    `${parseInt(first, 16)
    }, ${
      parseInt(second, 16)
    }, ${
      parseInt(last, 16)}`
  );
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
};
const drawerWidth = 260;
const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5'];
const warningColor = ['#ff9800', '#ffa726', '#fb8c00', '#ffa21a'];
const dangerColor = ['#f44336', '#ef5350', '#e53935', '#f55a4e'];
const successColor = ['#4caf50', '#66bb6a', '#43a047', '#5cb860'];
const infoColor = ['#00acc1', '#26c6da', '#00acc1', '#00d3ee'];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573'];
const grayColor = [
  '#999',
  '#777',
  '#3C4858',
  '#AAAAAA',
  '#D2D2D2',
  '#DDD',
  '#b4b4b4',
  '#555555',
  '#333',
  '#a9afbb',
  '#eee',
  '#e7e7e7',
];
const blackColor = '#000';
const whiteColor = '#FFF';

const boxShadow = {
  boxShadow:
    `0 10px 30px -12px rgba(${
      hexToRgb(blackColor)
    }, 0.42), 0 4px 25px 0px rgba(${
      hexToRgb(blackColor)
    }, 0.12), 0 8px 10px -5px rgba(${
      hexToRgb(blackColor)
    }, 0.2)`,
};

const primaryBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(primaryColor[0])
    },.4)`,
};
const infoBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(infoColor[0])
    },.4)`,
};
const successBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(successColor[0])
    },.4)`,
};
const warningBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(warningColor[0])
    },.4)`,
};
const dangerBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(dangerColor[0])
    },.4)`,
};
const roseBoxShadow = {
  boxShadow:
    `0 4px 20px 0 rgba(${
      hexToRgb(blackColor)
    },.14), 0 7px 10px -5px rgba(${
      hexToRgb(roseColor[0])
    },.4)`,
};

const warningCardHeader = {
  background:
    `linear-gradient(60deg, ${warningColor[1]}, ${warningColor[2]})`,
  ...warningBoxShadow,
};
const successCardHeader = {
  background:
    `linear-gradient(60deg, ${successColor[1]}, ${successColor[2]})`,
  ...successBoxShadow,
};
const dangerCardHeader = {
  background:
    `linear-gradient(60deg, ${dangerColor[1]}, ${dangerColor[2]})`,
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background:
    `linear-gradient(60deg, ${infoColor[1]}, ${infoColor[2]})`,
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background:
    `linear-gradient(60deg, ${primaryColor[1]}, ${primaryColor[2]})`,
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background:
    `linear-gradient(60deg, ${roseColor[1]}, ${roseColor[2]})`,
  ...roseBoxShadow,
};
const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',

};

export
{
  hexToRgb,
  defaultFont,
  drawerWidth,
  successCardHeader,
  primaryCardHeader,
  roseCardHeader,
  infoCardHeader,
  warningCardHeader,
  dangerCardHeader,
  primaryColor,
  grayColor,
  whiteColor,
  blackColor,
  container,
  primaryBoxShadow,
};
