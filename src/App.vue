<template>
  <div id="app">
      <router-view :saleList="saleList" :cargoList="cargoList" :remainList="remainList" :categoryList="categoryList" :shopList="shopList"></router-view>
  </div>
</template>

<script>
import main from './component/main.vue'

export default {
  components:{
    'app-main': main
  },
  data () {
    return {
      saleList:[
        {id: 1, name: 'OKI', category:'people use', qty:2, price:1150, total:2300 }
      ],
      cargoList:[
        {id:1, name: 'OKI', category:'people use', qty:5, price:'1150', shop:'Aung Sabal'}
      ],
      remainList:[
        {id: 1, name:'OKI', category:'people use', qty:3, shop:'Aung Sabal'}
      ],
      categoryList:[
        {id:1, name:'လူသုံးကုန်', date:'12.2.2022'}
      ],
      shopList:[
        {id:1, name:'Aung Sabal', address:'58 street', phone:'092411242', date:'12.1.2023'}
      ]
    }
  }
}
</script>

<style>

</style>
