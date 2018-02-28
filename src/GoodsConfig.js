import { nameCompare } from './functions';

let goodsConfigPer1000 = [
  {
    name: 'beer',
    rich_people: 22.75,
    wealthy_people: 45.5,
    poor_people: 22.75
  },
  {
    name: 'iron goods',
    rich_people: 35,
    wealthy_people: 26.25,
    poor_people: 8.75
  },
  {
    name: 'pig iron',
    rich_people: 0.0,
    wealthy_people: 0.0,
    poor_people: 0.0
  },
  {
    name: 'skins',
    rich_people: 21.0,
    wealthy_people: 10.5,
    poor_people: 0.0
  },
  {
    name: 'fish',
    rich_people: 1.4,
    wealthy_people: 2.8,
    poor_people: 3.5
  },
  {
    name: 'meat',
    rich_people: 3.85,
    wealthy_people: 3.05,
    poor_people: 0.45
  },
  {
    name: 'grain',
    rich_people: 3.15,
    wealthy_people: 4.2,
    poor_people: 5.25
  },
  {
    name: 'spices',
    rich_people: 1.4,
    wealthy_people: 0.7,
    poor_people: 0.7
  },
  {
    name: 'hemp',
    rich_people: 0.175,
    wealthy_people: 0.105,
    poor_people: 0.07
  },
  {
    name: 'timber',
    rich_people: 2.8,
    wealthy_people: 2.8,
    poor_people: 1.4
  },
  {
    name: 'honey',
    rich_people: 17.5,
    wealthy_people: 8.75,
    poor_people: 1.75
  },
  {
    name: 'pottery',
    rich_people: 10.5,
    wealthy_people: 6.3,
    poor_people: 4.2
  },
  {
    name: 'leather',
    rich_people: 15.4,
    wealthy_people: 12.25,
    poor_people: 1.75
  },
  {
    name: 'pitch',
    rich_people: 0.0,
    wealthy_people: 0.0,
    poor_people: 0.0
  },
  {
    name: 'salt',
    rich_people: 0.35,
    wealthy_people: 0.35,
    poor_people: 0.35
  },
  {
    name: 'whale oil',
    rich_people: 17.5,
    wealthy_people: 12.25,
    poor_people: 3.5
  },
  {
    name: 'cloth',
    rich_people: 17.5,
    wealthy_people: 12.25,
    poor_people: 5.25
  },
  {
    name: 'wine',
    rich_people: 52.5,
    wealthy_people: 13.3,
    poor_people: 0.0
  },
  {
    name: 'wool',
    rich_people: 0.35,
    wealthy_people: 1.4,
    poor_people: 0.7
  },
  {
    name: 'bricks',
    rich_people: 0.035,
    wealthy_people: 0.035,
    poor_people: 0.0
  }
];

let GoodsConfig = goodsConfigPer1000.map(good => {
  return {
    name: good.name,
    rich_people: good.rich_people / 1000,
    wealthy_people: good.wealthy_people / 1000,
    poor_people: good.poor_people / 1000
  };
});

export default GoodsConfig.sort(nameCompare);
