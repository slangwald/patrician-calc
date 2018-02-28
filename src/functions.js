export function nameCompare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function calculateProductionInTown(town, goodsConfig, businessesConfig) {
  let production = {};
  let requirements = {};
  let bizPerProduct = {};
  let netRequirements = {};
  let citizenNeeds = {};
  businessesConfig.map(business => {
    if (town.businesses[business.name]) {
      let numberOfBusinesses = town.businesses[business.name];
      let bonusProductionMulti = 1;
      if (numberOfBusinesses >= 9) {
        bonusProductionMulti = 1.1;
      } else if (numberOfBusinesses >= 6) {
        bonusProductionMulti = 1.06;
      } else if (numberOfBusinesses >= 3) {
        bonusProductionMulti = 1.03;
      }
      Object.entries(business.produces).map(product => {
        if (!production[product[0]]) {
          production[product[0]] = 0;
        }
        if (!bizPerProduct[product[0]]) {
          bizPerProduct[product[0]] = 0;
        }
        bizPerProduct[product[0]] += numberOfBusinesses;
        production[product[0]] +=
          numberOfBusinesses * product[1] * bonusProductionMulti;
      });
      Object.entries(business.requires).map(product => {
        if (!requirements[product[0]]) {
          requirements[product[0]] = 0;
        }
        requirements[product[0]] += numberOfBusinesses * product[1];
      });
    }
  });

  Object.entries(requirements).map(requiredProduct => {
    netRequirements[requiredProduct[0]] = requiredProduct[1];
    if (production[requiredProduct[0]]) {
      netRequirements[requiredProduct[0]] -= production[requiredProduct[0]];
    }
  });

  goodsConfig.map(good => {
    if (!citizenNeeds[good.name]) {
      citizenNeeds[good.name] = 0;
    }
    citizenNeeds[good.name] = calculateNeed(town, good);
  });

  return {
    production: production,
    requirements: requirements,
    netRequirements: netRequirements,
    businessesPerProduct: bizPerProduct,
    citizenNeeds: citizenNeeds
  };
}

export function calculateProductionInHansa(
  towns,
  goodsConfig,
  businessesConfig
) {
  let perProduct = {};
  goodsConfig.map(good => {
    return (perProduct[good.name] = {
      production: 0,
      required: 0,
      numberOfBusinesses: 0,
      citizenNeeds: 0
    });
  });
  towns.map(town => {
    let inTown = calculateProductionInTown(town, goodsConfig, businessesConfig);
    Object.entries(perProduct).map(productEntry => {
      perProduct[productEntry[0]].production +=
        inTown.production[productEntry[0]] || 0;
      perProduct[productEntry[0]].required +=
        inTown.requirements[productEntry[0]] || 0;
      perProduct[productEntry[0]].numberOfBusinesses +=
        inTown.businessesPerProduct[productEntry[0]] || 0;
      perProduct[productEntry[0]].citizenNeeds +=
        inTown.citizenNeeds[productEntry[0]] || 0;
    });
  });
  return perProduct;
}

export function calculateNeed(town, good) {
  return Math.ceil(
    town.rich_people * good.rich_people +
      town.wealthy_people * good.wealthy_people +
      town.poor_people * good.poor_people
  );
}
