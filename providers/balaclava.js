const PROXY_GATEWAYS = [
  {
    "ctr": "US",
    "addr": "http://54.164.18.45:10000",
  },
  {
    "ctr": "DE",
    "addr": "http://54.36.112.2:10000",
  },
  {
    "ctr": "CA",
    "addr": "http://142.44.245.154:10000",
  },
  {
    "ctr": "FR",
    "addr": "http://147.135.219.209:10000",
  },
  {
    "ctr": "UK",
    "addr": "http://54.37.0.221:10000",
  },
];

exports.getProxyCount = () => {
  return PROXY_GATEWAYS.length;
}

exports.getProxyGateway = (i) => {
  return PROXY_GATEWAYS[i] || null;
};
