import { nameCompare } from './functions';

let BusinessesConfig = [
  {
    name: 'brewery',
    produces: {
      beer: 49
    },
    requires: {
      timber: 0.5,
      grain: 1.2
    }
  },
  {
    name: 'iron smelter',
    produces: {
      'pig iron': 3.5
    },
    requires: {}
  },
  {
    name: 'fisher',
    produces: {
      fish: 7
    },
    requires: {
      salt: 14,
      hemp: 0.7
    }
  },
  {
    name: 'whaler',
    produces: {
      fish: 5.2,
      'whale oil': 28
    },
    requires: {
      salt: 10.5,
      hemp: 0.5
    }
  },
  {
    name: 'grain farm',
    produces: {
      grain: 7
    },
    requires: {}
  },
  {
    name: 'hemp farm',
    produces: {
      hemp: 1.75
    },
    requires: {}
  },
  {
    name: 'apiary',
    produces: {
      honey: 14
    },
    requires: {}
  },
  {
    name: 'hunter',
    produces: {
      skins: 7
    },
    requires: {
      hemp: 0.0357,
      'iron goods': 0.4
    }
  },
  {
    name: 'pitch maker',
    produces: {
      pitch: 7
    },
    requires: {
      timber: 0.7
    }
  },
  {
    name: 'sawmill',
    produces: {
      timber: 14
    },
    requires: {}
  },
  {
    name: 'sheep farm',
    produces: {
      wool: 3.5
    },
    requires: {}
  },
  {
    name: 'salt works',
    produces: {
      salt: 35
    },
    requires: {
      timber: 3.5
    }
  },
  {
    name: 'pottery',
    produces: {
      pottery: 14
    },
    requires: {
      timber: 1.4
    }
  },
  {
    name: 'cattle farm',
    produces: {
      meat: 1.75,
      leather: 7
    },
    requires: {
      salt: 5,
      timber: 0.1
    }
  },
  {
    name: 'weaving mill',
    produces: {
      cloth: 21
    },
    requires: {
      wool: 2.1
    }
  },
  {
    name: 'vineyard',
    produces: {
      wine: 14
    },
    requires: {}
  },
  {
    name: 'work shop',
    produces: {
      'iron goods': 21
    },
    requires: {
      'pig iron': 2.1,
      timber: 2.1
    }
  },
  {
    name: 'brick works',
    produces: {
      bricks: 7
    },
    requires: {
      timber: 3.5
    }
  }
];

export default BusinessesConfig.sort(nameCompare);
