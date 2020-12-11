import { RuleType } from "../application/schedules/ruleType";

export const lightYellow = '#fdce04';
export const yellow = '#eabc04';
export const grayYellow = '#594900';
export const darkYellow = '#514201';

export const lightMagenta = '#f02d7d';
export const magenta = '#dd2b74';

export const lightBlue = '#4610c8';
export const blue = '#4110b9';

export const lightGreen = '#16d718';
export const green = '#1ec517';

export const lightLeague = '#e902b0';
export const league = '#af019e';

export const gray = '#191919';
export const darkGray = '#202020';

export const colorByRule = (rule: RuleType) => {
  switch (rule) {
    case 'tower_control':
      return {
        colorA: lightBlue,
        colorB: blue,
      }
    case 'splat_zones':
      return {
        colorA: lightGreen,
        colorB: green,
      }
    case 'rainmaker':
      return {
        colorA: lightYellow,
        colorB: yellow,
      }
  }
  return {
    colorA: lightMagenta,
    colorB: magenta,
  }
};

export const stripe = (colorA: string, colorB: string) => `background: repeating-linear-gradient(45deg, ${colorA}, ${colorA} 20px, ${colorB} 20px, ${colorB} calc(2 * 20px))`;
