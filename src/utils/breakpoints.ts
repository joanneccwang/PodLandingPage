import facepaint from 'facepaint';

const breakpoints = [450, 768];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export { mq, breakpoints };
