import { throttle } from "underscore"

const { useState, useEffect } = require("react")

function useGetScroll() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scrollHandle = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener("scroll", scrollHandle)

    return () => {
      window.removeEventListener("scroll", scrollHandle)
    }
  }, [])
  return {
    scrollX,
    scrollY,
  }
}

export default useGetScroll
