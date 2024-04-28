export function isEmptyObj(obj) {
  if (typeof obj === "object" && obj !== null) {
    return !!Object.keys(obj).length
  }
}


isEmptyObj(null)