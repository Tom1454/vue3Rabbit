import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin ={
  install(app){
    //懒加载指令逻辑
    app.directive('img-lazy',{
      mounted(el,binding){
        //指令绑定的元素 imd
        //binding：binding value 指令等于号后面绑定的表达式的值 图片url
     const {stop} =   useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
               stop()
            }
          },
        )}
      })
      
  }
}