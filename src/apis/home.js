import httpInstance from "@/utils/http";

export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
export const getHotAPI = () => {
  return  httpInstance('home/hot')
}