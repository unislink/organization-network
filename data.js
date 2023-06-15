import { colors } from './colors';
import {prakash,gnana,pramesh} from './team_data.js';

export const nodes = [];
export const links = [];

let MAIN_NODE_SIZE = 50;
let CHILD_NODE_SIZE = 25;
// const LEAF_NODE_SIZE = 5;
const DEFAULT_DISTANCE = 20;
const MAIN_NODE_DISTANCE = 90;
// const LEAF_NODE_DISTANCE = 30;
export const MANY_BODY_STRENGTH = -20;

let i =0;

const addMainNode = (node, size= MAIN_NODE_SIZE) => {
  node.size = MAIN_NODE_SIZE;
  node.color = colors[i++][1];

  nodes.push(node);
};

const addChildNode = (
  parentNode,
  childNode,
  size = CHILD_NODE_SIZE,
  distance = DEFAULT_DISTANCE,
 
) => {
  childNode.size = size;
  childNode.color = parentNode.color;
  nodes.push(childNode);

  links.push({
    source: parentNode,
    target: childNode,
    distance,
    color: parentNode.color,
  });
};

const assembleChildNode = (parentNode, id) => {
  const childNode = { id, image };
  addChildNode(parentNode, childNode);
};

const connectMainNodes = (source, target, relationshipText,thickness = 1) => {
  links.push({
    source,
    target,
    distance: MAIN_NODE_DISTANCE,
    color: source.color,
    relationship: relationshipText,
    thickness,
  });
};



addMainNode(prakash);

addMainNode(gnana);


addMainNode(pramesh);




// let relationshipText = `${prakash.id} - ${gnana.id}`;
connectMainNodes(prakash, gnana, 'Worked togther in the past', 3 );
connectMainNodes(prakash, pramesh, 'Worked' );
connectMainNodes(pramesh, gnana, "heiii");


export const nodeSizes = {
	Name1:80,
  Name2:80*1.2,
  name3:80*1.7
};


export const defaultNodeSize = CHILD_NODE_SIZE;







// const artsWeb = { id: 'Arts Web' };
// addMainNode(artsWeb);
// assembleChildNode(artsWeb, 'Community Vision');
// assembleChildNode(artsWeb, 'Silicon Valley Creates');

// const socialImpactCommons = { id: 'Social Impact Commons' };
// addMainNode(socialImpactCommons);
// assembleChildNode(socialImpactCommons, 'Theatre Bay Area');
// assembleChildNode(socialImpactCommons, 'EastSide Arts Alliance');
// assembleChildNode(socialImpactCommons, 'Local Color');

// const cast = { id: 'Community Arts Stabilization Trust' };
// addMainNode(cast);
// assembleChildNode(cast, 'CounterPulse');
// assembleChildNode(cast, 'Luggage Store Gallery');
// assembleChildNode(cast, 'Performing Arts Workshop');
// assembleChildNode(cast, '447 Minna St.', 5);
// assembleChildNode(cast, 'Keeping Space Oakland');

// const ambitioUS = { id: 'AmbitioUS' };
// addMainNode(ambitioUS);
// assembleChildNode(ambitioUS, 'EBPREC');
// assembleChildNode(ambitioUS, 'SELC', 3);
// assembleChildNode(ambitioUS, 'The Runway Project', 3);
// assembleChildNode(ambitioUS, 'Common Future', 3);
// assembleChildNode(ambitioUS, 'Freelancers Union', 3);
// assembleChildNode(ambitioUS, 'US Federation of Worker Cooperatives', 3);

// connectMainNodes(artsWeb, socialImpactCommons);
// connectMainNodes(artsWeb, cast);
// connectMainNodes(socialImpactCommons, cast);
// connectMainNodes(ambitioUS, cast);
// connectMainNodes(ambitioUS, socialImpactCommons);
// connectMainNodes(ambitioUS, artsWeb);
