import axios from 'axios'

const baseURL = 'http://webservices.nextbus.com/service/publicJSONFeed'

const getRoutes = (stop) =>
  axios.get(baseURL, {
    params: { command: 'predictions', a: 'ttc', stopId: `${stop}` },
  })

const getSchedule = (routeTag, stopTag) =>
  axios.get(baseURL, {
    params: {
      command: 'predictions',
      a: 'ttc',
      r: `${routeTag}`,
      s: `${stopTag}`,
    },
  })

const getallServiceRoutes = () =>
  axios.get(baseURL, {
    params: {
      command: 'routeList',
      a: 'ttc',
    },
  })

const getNearestStop = (routeTag) =>
  axios.get(baseURL, {
    params: {
      command: 'routeConfig',
      a: 'ttc',
      r: `${routeTag}`,
    },
  })
export default {
  getSchedule,
  getRoutes,
  getallServiceRoutes,
  getNearestStop,
}
