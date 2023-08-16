import ImageViewVue from "./ImageView.vue"
import XtxSku from './XtxSku/index.vue'

export const componentPlugin={
install(app){
  //app.component('组件名字',组件配置对象)
  app.component('XtxImageViewVue',ImageViewVue)
  app.component('XtxSku',XtxSku)
}
}

