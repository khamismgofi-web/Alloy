import {SW} from '../data/sw.js';
const PAT=[[/^I'm (.+?), (.+) in (.+)$/,m=>"Mimi ni "+m[1]+", "+tt(m[2])+" katika "+tt(m[3])],[/^Visits: (.+)$/,m=>"Ziara: "+tt(m[1])],[/^\((.+)\) wants (.+) on (.+)$/,m=>"("+m[1]+") anaomba "+tt(m[2])+" tarehe "+m[3]],[/^Portrait of (.+)$/,m=>"Picha ya "+m[1]]];
export function tt(s){if(Object.prototype.hasOwnProperty.call(SW,s))return SW[s];for(const [r,g] of PAT){const m=s.match(r);if(m)return g(m)}return s}
