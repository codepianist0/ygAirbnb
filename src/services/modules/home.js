import ygReqeust from '../request'

function getGoodPriceRooms() {
  return ygReqeust.get({
    url: "/home/goodprice"
  })
}


export {
  getGoodPriceRooms
}