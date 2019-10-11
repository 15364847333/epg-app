import axios from 'axios'

async function getFoodData () {
  const res = await axios.get('/mockData/data.json')
  return res.data.food
}
async function getTravelData () {
  const res = await axios.get('/mockData/data.json')
  return res.data.travel
}
async function getLiveData () {
  const res = await axios.get('/mockData/liveData.json')

  return res.data.channelData
}
export {
  getFoodData, getTravelData, getLiveData
}