import ygReqeust from '../request'

function getGoodPriceRooms() {
  return ygReqeust.get({
    url: "/home/goodprice"
  })
}

function getGoodScoreRooms() {
  return ygReqeust.get({
    url: "/home/highscore"
  })
}
function getDiscountRooms() {
  return ygReqeust.get({
    url: "/home/discount"
  })
}
function getRecommendRoos() {
  return ygReqeust.get({
    url: "/home/hotrecommenddest"
  })
}
function getLongforRoos() {
  return ygReqeust.get({
    url: "/home/longfor"
  })
}
function getPlusRooms() {
  return ygReqeust.get({
    url: "/home/plus"
  })
}

export {
  getGoodPriceRooms,
  getGoodScoreRooms,
  getDiscountRooms,
  getRecommendRoos,
  getLongforRoos,
  getPlusRooms
}