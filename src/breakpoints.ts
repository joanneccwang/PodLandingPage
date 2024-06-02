import facepaint from 'facepaint';

const breakpoints = [400, 768];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
