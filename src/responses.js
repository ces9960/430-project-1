// Array of character classes, used to contain fields to be filtered by the app
const characterClasses = [
  {
    name:'Alchemist',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Intelligence',
    castingSource:'Alchemical',
    castingType:'Prepared',
    weaponProf:'Simple',
    armorProf:'Light',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Alchemist',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/alchemist'
  },  
  {
    name:'Antipaladin',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'4',
    castingStat:'Charisma',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'All except tower shields',
    category:'Alternate',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Antipaladin',
    pfsrdLink:'https://www.d20pfsrd.com/classes/alternate-classes/antipaladin'
  },
  {
    name:'Arcanist',
    bab:'1/2',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'9',
    castingStat:'Intelligence',
    castingSource:'Arcane',
    castingType:'Hybrid',
    weaponProf:'Simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Arcanist',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/arcanist'
  },
  {
    name: 'Barbarian',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Barbarian',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/barbarian'
  },
  {
    name: 'Barbarian (Unchained)',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Unchained',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Barbarian%20(Unchained)',
    pfsrdLink:'https://www.d20pfsrd.com/classes/unchained-classes/barbarian-unchained'
  },
  {
    name:'Bard',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Good',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'All except tower shields',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Bard',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/bard'
  },
  {
    name:'Bloodrager',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'4',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Bloodrager',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager'
  },
  {
    name:'Brawler',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Brawler',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/brawler'
  },
  {
    name:'Cavailer',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'All except tower shields',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Cavalier',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/cavalier'
  },
  {
    name: 'Cleric',
    bab: '3/4',
    fortSave: 'Good',
    refSave: 'Bad',
    willSave: 'Good',
    skillPoints: '2',
    spellLevels: '9',
    castingStat: 'Wisdom',
    castingSource: 'Divine',
    castingType: 'Prepared',
    weaponProf: 'Simple and Favored Weapon',
    armorProf: 'Medium',
    shieldProf: 'All except tower shields',
    category: 'Core',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Cleric',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/core-classes/cleric',
  },
  {
    name:'Druid',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'9',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Some simple',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Druid',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/druid'
  },
  {
    name: 'Fighter',
    bab: '1',
    fortSave: 'Good',
    refSave: 'Bad',
    willSave: 'Bad',
    skillPoints: '2',
    spellLevels: '0',
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
    name:'Gunslinger',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Light',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Gunslinger',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/gunslinger'
  },
  {
    name:'Hunter',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Spontaneous',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Hunter',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/hunter'
  },
  {
    name:'Inquisitor',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Spontaneous',
    weaponProf:'Simple and some martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Inquisitor',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/inquisitor'
  },
  {
    name:'Investigator',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Good',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Intelligence',
    castingSource:'Alchemical',
    castingType:'Prepared',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'None',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Investigator',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/investigator'
  },
  {
    name:'Kineticist',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Simple',
    armorProf:'Light',
    shieldProf:'None',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Kineticist',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/kineticist'
  },
  {
    name:'Magus',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'6',
    castingStat:'Intelligence',
    castingSource:'Arcane',
    castingType:'Prepared',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Magus',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/magus'
  },
  {
    name:'Medium',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'4',
    castingStat:'Charisma',
    castingSource:'Psychic',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'Medium',
    shieldProf:'None',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Medium',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/medium'
  },
  {
    name:'Mesmerist',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Good',
    skillPoints:'6',
    spellLevels:'6',
    castingStat:'Charisma',
    castingSource:'Psychic',
    castingType:'Spontaneous',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'None',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Mesmerist',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/mesmerist'
  },
  {
    name:'Monk',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Some simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Monk',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/monk'
  },
  {
    name:'Monk (Unchained)',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Some simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Unchained',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Monk%20(Unchained)',
    pfsrdLink:'https://www.d20pfsrd.com/classes/unchained-classes/monk-unchained'
  },
  {
    name:'Ninja',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'8',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'None',
    category:'Alternate',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Ninja',
    pfsrdLink:'https://www.d20pfsrd.com/classes/alternate-classes/ninja'
  },
  {
    name:'Occultist',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'5',
    spellLevels:'6',
    castingStat:'Intelligence',
    castingSource:'Psychic',
    castingType:'Spontaneous',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Occultist',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/occultist'
  },
  {
    name:'Oracle',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'9',
    castingStat:'Charisma',
    castingSource:'Divine',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Oracle',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/oracle'
  },
  {
    name:'Paladin',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'4',
    castingStat:'Charisma',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'All except tower shields',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Paladin',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/paladin'
  },
  {
    name:'Psychic',
    bab:'1/2',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'9',
    castingStat:'Intelligence',
    castingSource:'Psychic',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Psychic',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/psychic'
  },
  {
    name:'Ranger',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'6',
    spellLevels:'4',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Ranger',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/ranger'
  },
  {
    name: 'Rogue',
    bab: '3/4',
    fortSave: 'Bad',
    refSave: 'Good',
    willSave: 'Bad',
    skillPoints: '8',
    spellLevels: '0',
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
    name: 'Rogue (Unchained)',
    bab: '3/4',
    fortSave: 'Bad',
    refSave: 'Good',
    willSave: 'Bad',
    skillPoints: '8',
    spellLevels: '0',
    castingStat: 'None',
    castingSource: 'None',
    castingType: 'None',
    weaponProf: 'Simple and some martial',
    armorProf: 'Light',
    shieldProf: 'None',
    category: 'Unchained',
    archivesLink: 'https://aonprd.com/ClassDisplay.aspx?ItemName=Rogue%20(Unchained)',
    pfsrdLink: 'https://www.d20pfsrd.com/classes/unchained-classes/rogue-unchained',
  },
  {
    name:'Samurai',
    bab:'1',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'All except tower shields',
    category:'Alternate',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Samurai',
    pfsrdLink:'https://www.d20pfsrd.com/classes/alternate-classes/samurai'
  },
  {
    name:'Shaman',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'9',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Simple',
    armorProf:'Medium',
    shieldProf:'None',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Shaman',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/shaman'
  },
  {
    name:'Shifter',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Some simple',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Shifter',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/shifter'
  },
  {
    name:'Skald',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'6',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Skald',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/skald'
  },
  {
    name:'Slayer',
    bab:'1',
    fortSave:'Good',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'6',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Slayer',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/slayer'
  },
  {
    name:'Sorcerer',
    bab:'1/2',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'9',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Core',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Sorcerer',
    pfsrdLink:'https://www.d20pfsrd.com/classes/core-classes/sorcerer'
  },
  {
    name:'Spiritualist',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'4',
    spellLevels:'6',
    castingStat:'Wisdom',
    castingSource:'Psychic',
    castingType:'Spontaneous',
    weaponProf:'Simple and some martial',
    armorProf:'Light',
    shieldProf:'None',
    category:'Occult',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Spiritualist',
    pfsrdLink:'https://www.d20pfsrd.com/occult-adventures/occult-classes/spiritualist'
  },
  {
    name:'Summoner',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'6',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'Light',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Summoner',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/summoner'
  },
  {
    name:'Summoner (Unchained)',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'6',
    castingStat:'Charisma',
    castingSource:'Arcane',
    castingType:'Spontaneous',
    weaponProf:'Simple',
    armorProf:'Light',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Summoner%20(Unchained)',
    pfsrdLink:'https://www.d20pfsrd.com/classes/unchained-classes/summoner-unchained'
  },
  {
    name:'Swashbuckler',
    bab:'1',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Bad',
    skillPoints:'4',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Light',
    shieldProf:'Buckler',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Swashbuckler',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/swashbuckler'
  },
  {
    name:'Vigilante',
    bab:'3/4',
    fortSave:'Bad',
    refSave:'Good',
    willSave:'Good',
    skillPoints:'6',
    spellLevels:'0',
    castingStat:'None',
    castingSource:'None',
    castingType:'None',
    weaponProf:'Martial',
    armorProf:'Medium',
    shieldProf:'All except tower shields',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Vigilante',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/vigilante'
  },
  {
    name:'Warpriest',
    bab:'3/4',
    fortSave:'Good',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'6',
    castingStat:'Wisdom',
    castingSource:'Divine',
    castingType:'Prepared',
    weaponProf:'Martial',
    armorProf:'Heavy',
    shieldProf:'All except tower shields',
    category:'Hybrid',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Warpriest',
    pfsrdLink:'https://www.d20pfsrd.com/classes/hybrid-classes/warpriest'
  },
  {
    name:'Witch',
    bab:'1/2',
    fortSave:'Bad',
    refSave:'Bad',
    willSave:'Good',
    skillPoints:'2',
    spellLevels:'9',
    castingStat:'Intelligence',
    castingSource:'Arcane',
    castingType:'Prepared',
    weaponProf:'Simple',
    armorProf:'None',
    shieldProf:'None',
    category:'Base',
    archivesLink:'https://aonprd.com/ClassDisplay.aspx?ItemName=Witch',
    pfsrdLink:'https://www.d20pfsrd.com/classes/base-classes/witch'
  },
  {
    name: 'Wizard',
    bab: '1/2',
    fortSave: 'Bad',
    refSave: 'Bad',
    willSave: 'Good',
    skillPoints: '2',
    spellLevels: '9',
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
  return (filterField === 'Any' || filterField === classField || !filterField);
};

// a bunch of calls to compareFields(), so I only have to have one instance of this block of text
const filtersMatch = (filterObj, comparedClass) => {
  
  if (!compareFields(filterObj.bab, comparedClass.bab)) {
    return false;
  } if (!compareFields(filterObj.fortSave, comparedClass.fortSave)) {
    return false;
  } if (!compareFields(filterObj.refSave, comparedClass.refSave)) {
    return false;
  } if (!compareFields(filterObj.willSave, comparedClass.willSave)) {
    return false;
  } if (!compareFields(filterObj.skillPoints, comparedClass.skillPoints)) {
    return false;
  } if (!compareFields(filterObj.spellLevels, comparedClass.spellLevels)) {
    return false;
  } if (!compareFields(filterObj.castingStat, comparedClass.castingStat)) {
    return false;
  } if (!compareFields(filterObj.castingSource, comparedClass.castingSource)) {
    return false;
  } if (!compareFields(filterObj.castingType, comparedClass.castingType)) {
    return false;
  } if (!compareFields(filterObj.weaponProf, comparedClass.weaponProf)) {
    return false;
  } if (!compareFields(filterObj.armorProf, comparedClass.armorProf)) {
    return false;
  } if (!compareFields(filterObj.shieldProf, comparedClass.shieldProf)) {
    return false;
  } if (!compareFields(filterObj.category, comparedClass.category)) {
    return false;
  }
  return true;
};

// receives an object with properties based on what the user submits
const returnFilteredClasses = (filterParams) => {
  let arrayToReturn = [];
  for (let i = 0; i < characterClasses.length; i += 1) {
    if (filtersMatch(filterParams, characterClasses[i])) {
      arrayToReturn.push(characterClasses[i]);
    }
  }
  return arrayToReturn;
};

const getClassBrowserClientResponse = (request, response, params, acceptedTypes, httpMethod) => {
  const responseObj = returnFilteredClasses(params);
  const responseJSON = JSON.stringify(responseObj);
  if (acceptedTypes.includes('text/xml')) {
    let responseXML = '';
    for(let i = 0; i < responseObj.length; i++){
      responseXML += `
      <class>
      <name>${responseObj[i].name}</name>
      <category>${responseObj[i].category}</category>
      <bab>${responseObj[i].bab}</bab>
      <fortSave>${responseObj[i].fortSave}</fortSave>
      <refSave>${responseObj[i].refSave}</refSave>
      <willSave>${responseObj[i].willSave}</willSave>
      <skillPoints>${responseObj[i].skillPoints}</skillPoints>
      <spellLevels>${responseObj[i].spellLevels}</spellLevels>
      <castingStat>${responseObj[i].castingStat}</castingStat>
      <castingSource>${responseObj[i].castingSource}</castingSource>
      <castingType>${responseObj[i].castingType}</castingType>
      <weaponProf>${responseObj[i].weaponProf}</weaponProf>
      <armorProf>${responseObj[i].armorProf}</armorProf>
      <shieldProf>${responseObj[i].shieldProf}</shieldProf>
      <archivesLink>${responseObj[i].archivesLink}</archivesLink>
      <pfsrdLink>${responseObj[i].pfsrdLink}</pfsrdLink>
      </class>
      `;
    }
    if (httpMethod === 'HEAD') {
      response.writeHead(200, { 'Content-Type': 'text/xml', 'Content.length': Buffer.byteLength(responseXML) });
      response.end();
    } else {
      response.writeHead(200,{'Content-Type':'text/xml'});
      response.write(responseXML);
      response.end();
    }
  } else if (httpMethod === 'HEAD') {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(responseJSON) });
    response.end();
  } else {
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
