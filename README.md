JSON Lists of Municipalities of Nepal

This repository contains JSON lists of municipalities in Nepal, organized by districts. Each municipality is associated with its corresponding district and has a unique ID.
Sources

Compiled with the help of ChatGPT, Google, and the Election Commission of Nepal. Please note that there may exist spelling and character errors in both Nepali and English formats.
JSON Format

The JSON data is structured as follows:

[
  {
    "label": "Lamki Chuha Municipality",
    "value": "Lamki Chuha Nagarpalika",
    "name": "Lamki Chuha",
    "nepali": "लम्की चुहा नगरपालिका",
    "id": 748,
    "district_id": 76
  },
  {
    "label": "Bedkot Municipality",
    "value": "Bedkot Nagarpalika",
    "name": "Bedkot",
    "nepali": "बेदकोट नगरपालिका",
    "id": 749,
    "district_id": 77
  }
  // ... other municipalities
]

Districts

The municipalities are grouped by districts, and each district is assigned a unique ID. Below is an example list of districts with IDs:

[
  {
    "label": "Bhojpur",
    "value": "Bhojpur",
    "nepali": "भोजपुर",
    "id": 1,
    "province_id": 1
  },
  {
    "label": "Dhankuta",
    "value": "Dhankuta",
    "nepali": "धनकुटा"
    "id": 2,
    "province_id": 1
  },
  {
    "label": "Ilam",
    "value": "Ilam",
    "nepali": "इलाम"
    "id": 3,
    "province_id": 1
  },
  // ... other districts
]

Provinces

The districts are grouped by provices.

[
    {
      "label": "Koshi Province",
      "value": "Koshi",
      "nepali": "कोशी प्रदेश",
      "id": 1
    },
    // ..... other provinces
]

Usage

You can use this JSON data for various purposes such as data analysis, application development, and more. Ensure to handle the data with care, as there might be minor inaccuracies.
Contribution

Feel free to contribute to this repository. If you find any errors or have suggestions for improvement, please create an issue or submit a pull request.