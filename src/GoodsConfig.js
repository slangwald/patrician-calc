import nameCompare from './functions'

let goodsConfigPer1000 = [
{
name: 'beer',
rich_people: 22.75,
wealthy_people: 45.5,
poor_people: 22.75
},
{
name:'iron goods',
rich_people: 35.,
wealthy_people: 26.25,
poor_people: 8.75
},
{
name: 'pig iron',
rich_people: 0.000,
wealthy_people: 0.000,
poor_people: 0.000,
},
{
name: 'skins',
rich_people: 21.000,
wealthy_people: 10.500,
poor_people: 0.000
},
{
name: 'fish',
rich_people: 1.400,
wealthy_people: 2.800,
poor_people: 3.500
},
{
name: 'meat',
rich_people: 3.850,
wealthy_people: 3.050,
poor_people: 0.450
},
{
name: 'grain',
rich_people: 3.150,
wealthy_people: 4.200,
poor_people: 5.250
},
{
name: 'spices',
rich_people: 1.400,
wealthy_people: 0.700,
poor_people: 0.700
},
{
name: 'hemp',
rich_people: 0.175,
wealthy_people: 0.105,
poor_people: 0.070
},
{
name: 'timber',
rich_people: 2.800,
wealthy_people: 2.800,
poor_people: 1.400
},
{
name: 'honey',
rich_people: 17.500,
wealthy_people: 8.750,
poor_people: 1.750
},
{
name: 'pottery',
rich_people: 10.500,
wealthy_people: 6.300,
poor_people: 4.200
},
{
name: 'leather',
rich_people: 15.400,
wealthy_people: 12.250,
poor_people: 1.750
},
{
name: 'pitch',
rich_people: 0.000,
wealthy_people: 0.000,
poor_people: 0.000
},
{
name: 'salt',
rich_people: 0.350,
wealthy_people: 0.350,
poor_people: 0.350
},
{
name: 'whale oil',
rich_people: 17.500,
wealthy_people: 12.250,
poor_people: 3.500
},
{
name: 'cloth',
rich_people: 17.500,
wealthy_people: 12.250,
poor_people: 5.250
},
{
name: 'wine',
rich_people: 52.500,
wealthy_people: 13.300,
poor_people: 0.000
},
{
name: 'wool',
rich_people: 0.350,
wealthy_people: 1.400,
poor_people: 0.700
},
{
name: 'bricks',
rich_people: 0.035,
wealthy_people: 0.035,
poor_people: 0.000
}]

let GoodsConfig = goodsConfigPer1000.map(good => {
  return {
    name: good.name,
    rich_people: good.rich_people/1000,
    wealthy_people: good.wealthy_people/1000,
    poor_people: good.poor_people/1000
   }
  }
)

export default GoodsConfig.sort(nameCompare)
