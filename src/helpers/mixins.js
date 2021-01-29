import { css } from 'styled-components'

const breakpoints = {
    sm: '576px',
    md: '768px',
	lg: '992px',
	lgBreak: '991px',
    xl: '1200px'
}

export const minWidth = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const maxWidth = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});