  //封装数据业务相关代码
  import {useRoute} from 'vue-router'
  import {ref,onMounted} from 'vue'
  import {getTopCategoryAPI} from '@/apis/category'
  import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory(){
    
const route =useRoute()
const categoryData =ref({})
const getCategory =async(id=route.params.id)=>{
 const res = await getTopCategoryAPI(id)
 categoryData.value=res.result
}
//目标参数变化时候， 可以把分类数据接口重新发送
onBeforeRouteUpdate((to)=>{
  getCategory(to.params.id)
})

onMounted(()=>getCategory())
return{
  categoryData
}
  }