import ygReqeust from "../index"

export function getEntireRooms(offset = 0, size = 20) {
  return ygReqeust.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  })
}
