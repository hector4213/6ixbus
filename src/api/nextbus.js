import axios from 'axios'

const baseURL = 'http://webservices.nextbus.com/service/publicJSONFeed'

const getRoutes = (stop) => {
  return axios.get(baseURL, {
    params: { command: 'predictions', a: 'ttc', stopId: `${stop}` },
  })
}

const getSchedule = (routeTag, stopTag) => {
  return axios.get(baseURL, {
    params: {
      command: 'predictions',
      a: 'ttc',
      r: `${routeTag}`,
      s: `${stopTag}`,
    },
  })
}

export default {
  getSchedule,
  getRoutes,
}
