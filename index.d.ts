export interface Province {
  label: string;
  value: string;
  nepali: string;
  id: number;
}

export interface District {
  label: string;
  value: string;
  nepali: string;
  id: number;
  provinceId: number;
}

export interface Municipality {
  label: string;
  value: string;
  nepali: string;
  id: number;
  districtId: number;
}

export const provinces: Province[];
export const districts: District[];
export const municipalities: Municipality[];