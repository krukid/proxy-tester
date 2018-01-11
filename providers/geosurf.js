// @note GET https://api.client.geosurf.io/account/details/gateways

const PROXY_HOST = 'gw1.geosurf.io';

const PROXY_GATEWAYS = [
  {
    "cnt": 18700,
    "ctr": "US",
    "country_name": "United States",
    "country_port": 8230
  },
  {
    "cnt": 4620,
    "ctr": "DE",
    "country_name": "Germany",
    "country_port": 8080
  },
  {
    "cnt": 4173,
    "ctr": "FR",
    "country_name": "France",
    "country_port": 8072
  },
  {
    "cnt": 3910,
    "ctr": "GB",
    "country_name": "United Kingdom",
    "country_port": 8229
  },
  {
    "cnt": 3567,
    "ctr": "IT",
    "country_name": "Italy",
    "country_port": 8106
  },
  {
    "cnt": 3390,
    "ctr": "IN",
    "country_name": "India",
    "country_port": 8099
  },
  {
    "cnt": 2643,
    "ctr": "CA",
    "country_name": "Canada",
    "country_port": 8038
  },
  {
    "cnt": 2519,
    "ctr": "ES",
    "country_name": "Spain",
    "country_port": 8202
  },
  {
    "cnt": 2263,
    "ctr": "BR",
    "country_name": "Brazil",
    "country_port": 8030
  },
  {
    "cnt": 1433,
    "ctr": "JP",
    "country_name": "Japan",
    "country_port": 8110
  },
  {
    "cnt": 1078,
    "ctr": "AR",
    "country_name": "Argentina",
    "country_port": 8010
  },
  {
    "cnt": 1021,
    "ctr": "MX",
    "country_name": "Mexico",
    "country_port": 8142
  },
  {
    "cnt": 664,
    "ctr": "AU",
    "country_name": "Australia",
    "country_port": 8013
  },
  {
    "cnt": 583,
    "ctr": "HU",
    "country_name": "Hungary",
    "country_port": 8097
  },
  {
    "cnt": 527,
    "ctr": "CO",
    "country_name": "Colombia",
    "country_port": 8047
  },
  {
    "cnt": 435,
    "ctr": "VE",
    "country_name": "Venezuela",
    "country_port": 8236
  },
  {
    "cnt": 402,
    "ctr": "CL",
    "country_name": "Chile",
    "country_port": 8043
  },
  {
    "cnt": 307,
    "ctr": "TH",
    "country_name": "Thailand",
    "country_port": 8216
  },
  {
    "cnt": 303,
    "ctr": "EC",
    "country_name": "Ecuador",
    "country_port": 8061
  },
  {
    "cnt": 259,
    "ctr": "SA",
    "country_name": "Saudi Arabia",
    "country_port": 8190
  },
  {
    "cnt": 237,
    "ctr": "PE",
    "country_name": "Peru",
    "country_port": 8173
  },
  {
    "cnt": 217,
    "ctr": "RO",
    "country_name": "Romania",
    "country_port": 8181
  },
  {
    "cnt": 173,
    "ctr": "UY",
    "country_name": "Uruguay",
    "country_port": 8232
  },
  {
    "cnt": 121,
    "ctr": "ID",
    "country_name": "Indonesia",
    "country_port": 8101
  },
  {
    "cnt": 108,
    "ctr": "ZA",
    "country_name": "South Africa",
    "country_port": 8200
  },
  {
    "cnt": 95,
    "ctr": "IL",
    "country_name": "Israel",
    "country_port": 8105
  },
  {
    "cnt": 84,
    "ctr": "DO",
    "country_name": "Dominican Republic",
    "country_port": 8059
  },
  {
    "cnt": 82,
    "ctr": "PH",
    "country_name": "Philippines",
    "country_port": 8174
  },
  {
    "cnt": 78,
    "ctr": "LV",
    "country_name": "Latvia",
    "country_port": 8121
  },
  {
    "cnt": 76,
    "ctr": "RU",
    "country_name": "Russian Federation",
    "country_port": 8182
  },
  {
    "cnt": 75,
    "ctr": "PL",
    "country_name": "Poland",
    "country_port": 8176
  },
  {
    "cnt": 71,
    "ctr": "TR",
    "country_name": "Turkey",
    "country_port": 8222
  },
  {
    "cnt": 51,
    "ctr": "RE",
    "country_name": "Reunion",
    "country_port": 8180
  },
  {
    "cnt": 46,
    "ctr": "IR",
    "country_name": "Iran (Islamic Republic of)",
    "country_port": 8102
  },
  {
    "cnt": 45,
    "ctr": "PT",
    "country_name": "Portugal",
    "country_port": 8177
  },
  {
    "cnt": 44,
    "ctr": "BD",
    "country_name": "Bangladesh",
    "country_port": 8018
  },
  {
    "cnt": 42,
    "ctr": "DZ",
    "country_name": "Algeria",
    "country_port": 8003
  },
  {
    "cnt": 40,
    "ctr": "TW",
    "country_name": "Taiwan",
    "country_port": 8213
  },
  {
    "cnt": 39,
    "ctr": "SK",
    "country_name": "Slovakia",
    "country_port": 8196
  },
  {
    "cnt": 39,
    "ctr": "GR",
    "country_name": "Greece",
    "country_port": 8084
  },
  {
    "cnt": 37,
    "ctr": "UA",
    "country_name": "Ukraine",
    "country_port": 8227
  },
  {
    "cnt": 37,
    "ctr": "RS",
    "country_name": "Serbia",
    "country_port": 8192
  },
  {
    "cnt": 34,
    "ctr": "SG",
    "country_name": "Singapore",
    "country_port": 8195
  },
  {
    "cnt": 32,
    "ctr": "NO",
    "country_name": "Norway",
    "country_port": 8165
  },
  {
    "cnt": 32,
    "ctr": "MA",
    "country_name": "Morocco",
    "country_port": 8149
  },
  {
    "cnt": 28,
    "ctr": "NG",
    "country_name": "Nigeria",
    "country_port": 8161
  },
  {
    "cnt": 25,
    "ctr": "HK",
    "country_name": "Hong Kong",
    "country_port": 8096
  },
  {
    "cnt": 25,
    "ctr": "VN",
    "country_name": "Vietnam",
    "country_port": 8237
  },
  {
    "cnt": 25,
    "ctr": "NL",
    "country_name": "Netherlands",
    "country_port": 8155
  },
  {
    "cnt": 23,
    "ctr": "PY",
    "country_name": "Paraguay",
    "country_port": 8172
  },
  {
    "cnt": 23,
    "ctr": "KH",
    "country_name": "Cambodia",
    "country_port": 8036
  },
  {
    "cnt": 23,
    "ctr": "PK",
    "country_name": "Pakistan",
    "country_port": 8167
  },
  {
    "cnt": 22,
    "ctr": "LT",
    "country_name": "Lithuania",
    "country_port": 8127
  },
  {
    "cnt": 20,
    "ctr": "MN",
    "country_name": "Mongolia",
    "country_port": 8146
  },
  {
    "cnt": 19,
    "ctr": "AE",
    "country_name": "United Arab Emirates",
    "country_port": 8228
  },
  {
    "cnt": 19,
    "ctr": "IE",
    "country_name": "Ireland",
    "country_port": 8104
  },
  {
    "cnt": 19,
    "ctr": "AO",
    "country_name": "Angola",
    "country_port": 8006
  },
  {
    "cnt": 17,
    "ctr": "YE",
    "country_name": "Yemen",
    "country_port": 8242
  },
  {
    "cnt": 17,
    "ctr": "JO",
    "country_name": "Jordan",
    "country_port": 8111
  },
  {
    "cnt": 16,
    "ctr": "MY",
    "country_name": "Malaysia",
    "country_port": 8133
  },
  {
    "cnt": 16,
    "ctr": "BG",
    "country_name": "Bulgaria",
    "country_port": 8033
  },
  {
    "cnt": 16,
    "ctr": "PA",
    "country_name": "Panama",
    "country_port": 8170
  },
  {
    "cnt": 15,
    "ctr": "MQ",
    "country_name": "Martinique",
    "country_port": 8138
  },
  {
    "cnt": 14,
    "ctr": "CM",
    "country_name": "Cameroon",
    "country_port": 8037
  },
  {
    "cnt": 14,
    "ctr": "GP",
    "country_name": "Guadeloupe",
    "country_port": 8087
  },
  {
    "cnt": 14,
    "ctr": "MM",
    "country_name": "Myanmar",
    "country_port": 8151
  },
  {
    "cnt": 14,
    "ctr": "PS",
    "country_name": "Palestine",
    "country_port": 8169
  },
  {
    "cnt": 14,
    "ctr": "TN",
    "country_name": "Tunisia",
    "country_port": 8221
  },
  {
    "cnt": 13,
    "ctr": "BE",
    "country_name": "Belgium",
    "country_port": 8021
  },
  {
    "cnt": 13,
    "ctr": "CZ",
    "country_name": "Czech Republic",
    "country_port": 8055
  },
  {
    "cnt": 13,
    "ctr": "HN",
    "country_name": "Honduras",
    "country_port": 8095
  },
  {
    "cnt": 13,
    "ctr": "KR",
    "country_name": "Korea, Republic of",
    "country_port": 8116
  },
  {
    "cnt": 13,
    "ctr": "KG",
    "country_name": "Kyrgyzstan",
    "country_port": 8119
  },
  {
    "cnt": 12,
    "ctr": "BO",
    "country_name": "Bolivia",
    "country_port": 8026
  },
  {
    "cnt": 12,
    "ctr": "AT",
    "country_name": "Austria",
    "country_port": 8014
  },
  {
    "cnt": 11,
    "ctr": "CR",
    "country_name": "Costa Rica",
    "country_port": 8051
  },
  {
    "cnt": 11,
    "ctr": "CI",
    "country_name": "Ivory Coast",
    "country_port": 8107
  },
  {
    "cnt": 11,
    "ctr": "CN",
    "country_name": "China",
    "country_port": 8044
  },
  {
    "cnt": 11,
    "ctr": "DK",
    "country_name": "Denmark",
    "country_port": 8056
  },
  {
    "cnt": 11,
    "ctr": "SV",
    "country_name": "El Salvador",
    "country_port": 8063
  },
  {
    "cnt": 11,
    "ctr": "QA",
    "country_name": "Qatar",
    "country_port": 8179
  },
  {
    "cnt": 11,
    "ctr": "NP",
    "country_name": "Nepal",
    "country_port": 8154
  },
  {
    "cnt": 10,
    "ctr": "EG",
    "country_name": "Egypt",
    "country_port": 8062
  },
  {
    "cnt": 10,
    "ctr": "OM",
    "country_name": "Oman",
    "country_port": 8166
  },
  {
    "cnt": 9,
    "ctr": "CY",
    "country_name": "Cyprus",
    "country_port": 8054
  },
  {
    "cnt": 9,
    "ctr": "GF",
    "country_name": "French Guiana",
    "country_port": 8074
  },
  {
    "cnt": 9,
    "ctr": "PF",
    "country_name": "French Polynesia",
    "country_port": 8075
  },
  {
    "cnt": 8,
    "ctr": "BB",
    "country_name": "Barbados",
    "country_port": 8019
  },
  {
    "cnt": 8,
    "ctr": "GH",
    "country_name": "Ghana",
    "country_port": 8081
  },
  {
    "cnt": 7,
    "ctr": "HR",
    "country_name": "Croatia (Hrvatska)",
    "country_port": 8052
  },
  {
    "cnt": 7,
    "ctr": "NZ",
    "country_name": "New Zealand",
    "country_port": 8158
  },
  {
    "cnt": 7,
    "ctr": "PR",
    "country_name": "Puerto Rico",
    "country_port": 8178
  },
  {
    "cnt": 7,
    "ctr": "GT",
    "country_name": "Guatemala",
    "country_port": 8089
  },
  {
    "cnt": 7,
    "ctr": "LK",
    "country_name": "Sri Lanka",
    "country_port": 8203
  },
  {
    "cnt": 7,
    "ctr": "SE",
    "country_name": "Sweden",
    "country_port": 8210
  },
  {
    "cnt": 7,
    "ctr": "CH",
    "country_name": "Switzerland",
    "country_port": 8211
  },
  {
    "cnt": 7,
    "ctr": "CV",
    "country_name": "Cape Verde",
    "country_port": 8039
  },
  {
    "cnt": 6,
    "ctr": "BJ",
    "country_name": "Benin",
    "country_port": 8023
  },
  {
    "cnt": 6,
    "ctr": "TT",
    "country_name": "Trinidad and Tobago",
    "country_port": 8220
  },
  {
    "cnt": 6,
    "ctr": "KZ",
    "country_name": "Kazakhstan",
    "country_port": 8112
  },
  {
    "cnt": 6,
    "ctr": "SY",
    "country_name": "Syrian Arab Republic",
    "country_port": 8212
  },
  {
    "cnt": 5,
    "ctr": "KW",
    "country_name": "Kuwait",
    "country_port": 8118
  },
  {
    "cnt": 4,
    "ctr": "BA",
    "country_name": "Bosnia and Herzegovina",
    "country_port": 8027
  },
  {
    "cnt": 4,
    "ctr": "SD",
    "country_name": "Sudan",
    "country_port": 8206
  },
  {
    "cnt": 4,
    "ctr": "IQ",
    "country_name": "Iraq",
    "country_port": 8103
  },
  {
    "cnt": 4,
    "ctr": "MK",
    "country_name": "Macedonia",
    "country_port": 8130
  },
  {
    "cnt": 4,
    "ctr": "MZ",
    "country_name": "Mozambique",
    "country_port": 8150
  },
  {
    "cnt": 4,
    "ctr": "EE",
    "country_name": "Estonia",
    "country_port": 8066
  },
  {
    "cnt": 4,
    "ctr": "MD",
    "country_name": "Moldova, Republic of",
    "country_port": 8144
  },
  {
    "cnt": 3,
    "ctr": "BY",
    "country_name": "Belarus",
    "country_port": 8020
  },
  {
    "cnt": 3,
    "ctr": "LY",
    "country_name": "Libyan Arab Jamahiriya",
    "country_port": 8125
  },
  {
    "cnt": 3,
    "ctr": "MO",
    "country_name": "Macau",
    "country_port": 8129
  },
  {
    "cnt": 3,
    "ctr": "KE",
    "country_name": "Kenya",
    "country_port": 8113
  },
  {
    "cnt": 3,
    "ctr": "NI",
    "country_name": "Nicaragua",
    "country_port": 8159
  },
  {
    "cnt": 3,
    "ctr": "MV",
    "country_name": "Maldives",
    "country_port": 8134
  },
  {
    "cnt": 3,
    "ctr": "BH",
    "country_name": "Bahrain",
    "country_port": 8017
  },
  {
    "cnt": 2,
    "ctr": "ET",
    "country_name": "Ethiopia",
    "country_port": 8067
  },
  {
    "cnt": 2,
    "ctr": "SN",
    "country_name": "Senegal",
    "country_port": 8191
  },
  {
    "cnt": 2,
    "ctr": "LA",
    "country_name": "Lao People's Democratic Republic",
    "country_port": 8120
  },
  {
    "cnt": 2,
    "ctr": "MU",
    "country_name": "Mauritius",
    "country_port": 8140
  },
  {
    "cnt": 2,
    "ctr": "FI",
    "country_name": "Finland",
    "country_port": 8071
  },
  {
    "cnt": 2,
    "ctr": "ZW",
    "country_name": "Zimbabwe",
    "country_port": 8245
  },
  {
    "cnt": 2,
    "ctr": "CU",
    "country_name": "Cuba",
    "country_port": 8053
  },
  {
    "cnt": 2,
    "ctr": "GU",
    "country_name": "Guam",
    "country_port": 8088
  },
  {
    "cnt": 2,
    "ctr": "AZ",
    "country_name": "Azerbaijan",
    "country_port": 8015
  },
  {
    "cnt": 2,
    "ctr": "BW",
    "country_name": "Botswana",
    "country_port": 8028
  },
  {
    "cnt": 2,
    "ctr": "AM",
    "country_name": "Armenia",
    "country_port": 8011
  },
];

// exports.PROXY_HOST = PROXY_HOST;
// exports.PROXY_GATEWAYS = PROXY_GATEWAYS;
exports.getCountryGatewayAddress = (country) => {
  const gateway = PROXY_GATEWAYS.find(({ ctr }) => ctr === country);
  return gateway && `${PROXY_HOST}:${gateway.country_port}` || null;
};

exports.getProxyCount = () => {
  return PROXY_GATEWAYS.length;
}
exports.getProxyGateway = (i) => {
  const proxy = PROXY_GATEWAYS[i];
  if (proxy) {
    return {
      ...proxy,
      addr: `http://${PROXY_HOST}:${proxy.country_port}`,
    };
  } else {
    return null;
  }
};
