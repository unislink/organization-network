import { colors } from './colors';
import {
name1,
name2,
name3,
name4,
name5,
name6,
name7,
name8,
name9,
name10,
name11,
name12,
name13,
name14,
name15,
name16,
name17,
name18,
name19,
name20,
name21,
name22,
name23,
name24,
name25,
name26,
name27,
} from './team_data.js';

export const nodes = [];
export const links = [];

let MAIN_NODE_SIZE = 50;
let CHILD_NODE_SIZE = 80;
// const LEAF_NODE_SIZE = 5;
const DEFAULT_DISTANCE = 20;
const MAIN_NODE_DISTANCE = 90;
// const LEAF_NODE_DISTANCE = 30;
export const MANY_BODY_STRENGTH = -20;
export const textoffset= 70; 
export const subtextOffset= 90; 
export const imageOffset= 1.9;

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



addMainNode(name1);
addMainNode(name2);
addMainNode(name3);
addMainNode(name4);
addMainNode(name5);
addMainNode(name6);
addMainNode(name7);
addMainNode(name8);
addMainNode(name9);
addMainNode(name10);
addMainNode(name11);
addMainNode(name12);
addMainNode(name13);
addMainNode(name14);
addMainNode(name15);
addMainNode(name16);
addMainNode(name17);
addMainNode(name18);
addMainNode(name19);
addMainNode(name20);
addMainNode(name21);
addMainNode(name22);
addMainNode(name23);
addMainNode(name24);
addMainNode(name25);


//connection with name 1 as source
connectMainNodes(name1, name2, "Went to the same College");
connectMainNodes(name1, name5, "Worked togther in the past");
connectMainNodes(name1, name9, "Worked togther in the past");
connectMainNodes(name1, name6, "Worked togther in the past");
connectMainNodes(name1, name3, "Worked togther in the past");
connectMainNodes(name1, name7, "Worked togther in the past");
connectMainNodes(name1, name10, "Worked togther in the past");
connectMainNodes(name1, name11, "Referred to join Unislink");
connectMainNodes(name1, name23, "HR Help for recruitment");



//connection with name2 as source
connectMainNodes(name2, name4, "Worked togther in the past");
connectMainNodes(name2, name12, "Referred to Join Unislink");
connectMainNodes(name2, name13, "Worked togther in the past");
connectMainNodes(name2, name14, "Referred to Join Unislink");
connectMainNodes(name2, name15, "Referred to Join Unislink");


 //connections with name3 as source
connectMainNodes(name3, name16, "Referred to Join Unislink");
connectMainNodes(name3, name6, "Worked togther in the past");
connectMainNodes(name3, name7, "Worked togther in the past");
connectMainNodes(name3, name10, "Worked togther in the past");


//connections with name4 as source
connectMainNodes(name4, name17, "Referred to Join Unislink");

//connections with  name5 as source
connectMainNodes(name5, name18, "Referred to Join Unislink");
connectMainNodes(name5, name9, "Worked togther in the past");
connectMainNodes(name5, name19, "Worked togther in the past");
connectMainNodes(name5, name20, "Referred to Join Unislink");
connectMainNodes(name5, name24, "Referred to Join Unislink");
connectMainNodes(name5, name25, "Referred to Join Unislink");

//connections with name6 as source
connectMainNodes(name6, name7, "Worked togther in the past");
connectMainNodes(name6, name10, "Worked togther in the past");

//connections with name7 as source
connectMainNodes(name7, name10, "Worked togther in the past");

//connections with name8 as source
connectMainNodes(name8, name7, "Worked togther in the past");
connectMainNodes(name8, name10, "Worked togther in the past");
connectMainNodes(name8, name6, "Worked togther in the past");

//connections with name23 as source
connectMainNodes(name23, name22, "Love at first sight");
connectMainNodes(name23, name21, "Love at first sight");


export const nodeSizes = {
	Name1:80,
  Name2:80,
  Name3:80,
  Name4:80,
  Name5:80,
  Name6:80,
  Name7:80,
  Name8:80,
  Name9:80,
  Name10:80,
  Name11:80,
  Name12:80,
  Name13:80,
  Name14:80,
  Name15:80,
  Name16:80,
  Name17:80,
  Name18:80,
  Name19:80,
  Name20:80,
  Name21:80,
  Name22:80,
  Name23:80,
  Name24:80,
  Name25:80,
  Name26:80,
  Name27:80,
};


export const defaultNodeSize = CHILD_NODE_SIZE;




// Name1	Gnana
// Name2	Saravana
// Name3	Pramesh
// Name4	Baskar
// Name5	Guru
// Name6	Srividhya
// Name7	Muthu
// Name8	Sujitha
// Name9	Geetha
// Name10	Hama
// Name11	Santhosh
// Name12	Kowsalya
// Name13	Venkatesh
// Name14	Krishna
// Name15	Ragul
// Name16	Dhanasekari
// Name17	Aishwarya
// Name18	Durga
// Name19	Pravin
// Name20	Dalton
// Name21	Selva
// Name22	Vignesh
// Name23	Jhansi
// Name24 Kaneesh
// Name25 Hari




// const artsWeb = { id: 'Arts Web' };
// addMainNode(artsWeb);
// assembleChildNode(artsWeb, 'Community Vision');
// assembleChildNode(artsWeb, 'Silicon Valley Creates');

