// Array of character classes, used to contain fields to be filtered by the app
const characterClasses = [
  {
    name: 'Fighter',
    bab: 1,
    goodFort: true,
    goodRef: false,
    goodWill: false,
    skillPoints: 2,
    spellLevels: 0,
    castingStat: 'None',
    castingSource: 'None',
    castingType: 'None',
    weaponProf: 'Martial',
    armorProf: 'Heavy',
    shieldProf: 'All',
    category: 'Core',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Fighter',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/core-classes/fighter',
  },
  {
    name: 'Cleric',
    bab: 3 / 4,
    goodFort: true,
    goodRef: false,
    goodWill: true,
    skillPoints: 2,
    spellLevels: 9,
    castingStat: 'Wisdom',
    castingSource: 'Divine',
    castingType: 'Prepared',
    weaponProf: 'Simple and deity\'s favored weapon',
    armorProf: 'Medium',
    shieldProf: 'All except tower shields',
    category: 'Core',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Cleric',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/core-classes/cleric',
  },
  {
    name: 'Rogue',
    bab: 3 / 4,
    goodFort: false,
    goodRef: true,
    goodWill: false,
    skillPoints: 8,
    spellLevels: 0,
    castingStat: 'None',
    castingSource: 'None',
    castingType: 'None',
    weaponProf: 'Simple and some martial',
    armorProf: 'Light',
    shieldProf: 'None',
    category: 'Core',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Rogue',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/core-classes/rogue',
  },
  {
    name: 'Wizard',
    bab: 1 / 2,
    goodFort: false,
    goodRef: false,
    goodWill: true,
    skillPoints: 2,
    spellLevels: 9,
    castingStat: 'Intelligence',
    castingSource: 'Arcane',
    castingType: 'Prepared',
    weaponProf: 'Some simple',
    armorProf: 'None',
    shieldProf: 'None',
    category: 'Core',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Wizard',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/core-classes/wizard',
  },
];

// quick function to compare fields of 2 objects while sorting out unfiltered fields
const compareFields = (filterField, classField) => {
  if (filterField === 'Any' || filterField === classField) {
    return true;
  }
  return false;
};

// a bunch of calls to compareFields(), so I only have to have one instance of this block of text
const filtersMatch = (filterObj, comparedClass) => {
  if (!compareFields(compareFields(filterObj.bab, comparedClass.bab))) {
    return false;
  } if (!compareFields(compareFields(filterObj.goodFort, comparedClass.goodFort))) {
    return false;
  } if (!compareFields(compareFields(filterObj.goodRef, comparedClass.goodRef))) {
    return false;
  } if (!compareFields(compareFields(filterObj.goodWill, comparedClass.goodWill))) {
    return false;
  } if (!compareFields(compareFields(filterObj.skillPoints, comparedClass.skillPoints))) {
    return false;
  } if (!compareFields(compareFields(filterObj.spellLevels, comparedClass.spellLevels))) {
    return false;
  } if (!compareFields(compareFields(filterObj.castingStat, comparedClass.castingStat))) {
    return false;
  } if (!compareFields(compareFields(filterObj.castingSource, comparedClass.castingSource))) {
    return false;
  } if (!compareFields(compareFields(filterObj.castingType, comparedClass.castingType))) {
    return false;
  } if (!compareFields(compareFields(filterObj.weaponProf, comparedClass.weaponProf))) {
    return false;
  } if (!compareFields(compareFields(filterObj.armorProf, comparedClass.armorProf))) {
    return false;
  } if (!compareFields(compareFields(filterObj.shieldProf, comparedClass.shieldProf))) {
    return false;
  } if (!compareFields(compareFields(filterObj.category, comparedClass.category))) {
    return false;
  }
  return true;
};

// receives an object with properties based on what the user submits
const returnFilteredClasses = (filterParams) => {
  const arrayToReturn = [];
  for (let i = 0; i < characterClasses; i += 1) {
    if (filtersMatch(filterParams, characterClasses[i])) {
      arrayToReturn.push(characterClasses[i]);
    }
  }
  return arrayToReturn;
};

const getClassBrowserClientResponse = (request, response, params, acceptedTypes, httpMethod) => {
  const responseObj = returnFilteredClasses(params);
  if (acceptedTypes.includes('text/xml')) {
    // responseXML will do things in a later version
    const responseXML = '';
    if (httpMethod === 'HEAD') {
      response.writeHead(200, { 'Content-Type': 'text/xml', 'Content.length': Buffer.byteLength(responseXML) });
      response.end();
    } else {
      // will do things once I implement XML
    }
  } else if (httpMethod === 'HEAD') {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(responseObj) });
    response.end();
  } else {
    const responseJSON = JSON.stringify(responseObj);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(responseJSON);
    response.end();
  }
};

// will be used when I implement saved classes
const getSavedClassesResponse = () => {

};

module.exports.getClassBrowserClientResponse = getClassBrowserClientResponse;
module.exports.getSavedClassesResponse = getSavedClassesResponse;
