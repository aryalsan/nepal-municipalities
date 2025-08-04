import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const provinces = require('./data/provinces.json');
const districts = require('./data/districts.json');
const municipalities = require('./data/municipalities.json');


const getDistrict = (provinceId) => {
    if (typeof provinceId !== "number" || provinceId < 1 || provinceId > 7) {
        throw new Error('Invalid province ID. Must be between 1-7');
    }
    return districts.filter(district => district.province_id === provinceId);
}

const getMunicipality = (districtId) => {
    if (typeof districtId !== "number") {
        throw new Error('Invalid province ID');
    }
    return municipalities.filter(municipality => municipality.district_id === districtId);
}

export {
  provinces,
  districts,
  municipalities,
  getDistrict,
  getMunicipality,
};