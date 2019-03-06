import { css } from 'styled-components';
import formatDistance from 'date-fns/formatDistance';

export const styling = props => props.css && css`${props.css}`;

export const deriveOlderDays = (date) => formatDistance(new Date(date), new Date());

export const viewport = breakpoint => (...args) => css`
    @media (min-width: ${breakpoint}px) {
      ${css(...args)}
    }
  `;
