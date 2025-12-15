import axios from 'axios'

const baseUrl = 'https://samples.openweathermap.org/data/2.5/weather?q='
const baseUrlok = 'https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1'

const getByName = (name) => {
    

    return axios.get(`https://samples.openweathermap.org/data/2.5/find?q=London&appid=b1b15e88fa797225412429c1c50c122a1r`)
}

export default { 
  getByName: getByName,
};