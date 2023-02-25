<template>
  <div id="app">
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="bg-dark col-auto col-md-3 col-lg-2 min-vh-100 d-flex flex-column justify-content-between">
        <div class="bg-dark p-2">
          <a href="" class="d-flex text-decoration-none align-item-center text-primary">
            <span class="fs-4 d-none d-sm-inline mx-auto ">
              MY POS
            </span>
          </a>
          <ul class="nav nav-pills flex-column mt-2">
            <li class="nav-item">
              <div class="nav-link text-primary">
                <i class="fs-5 fa fa-chart-line"></i>
                <router-link class=" ms-1 d-none d-sm-inline" :to="'/'">Dashboard</router-link>
              </div>
            </li>
            <li class="nav-item">
                  <div class="nav-link text-primary">
                    <i class="fs-5 fa fa-chart-line"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/sale'">Sale List</router-link>
                  </div>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class="fs-5 fa fa-basket-shopping"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/cargo'">Cargo List</router-link>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class="fs-5 fa fa-clipboard-list"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/category'">Category List</router-link>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class="fs-5 fa fa-handshake"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/shop'">Shop List</router-link>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class=" fs-5 fa-solid fa-question"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/remain'">Remaining Items</router-link>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class="fs-5 fa-solid fa-people-arrows"></i><span class=" ms-1 d-none d-sm-inline text-muted">Employee</span>
                  </a>
              </li>
          </ul>
        </div>
        <div class="dropdown open p-3">
          <button class="btn border-none dropdown-toggle text-white" type="button" id="triggerId" aria-expanded="false">
              <i class="fa fa-user"></i><span class="ms-2">Yourself</span>
          </button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" href="#">Setting</button>
            <button class="dropdown-item" href="#">Profile</button>
          </div>
        </div>
      </div>
      <div class="p-3 col-md-10">
        <div class="row text-end">
          <div class="">
            <router-link :to="'/cargo/addcargoList'">
              <button class="btn btn-dark">
                <i class="fa-solid fa-plus p-3 fs-4"></i>
              </button>
            </router-link>
          </div>
        </div>
        <div class="row">
            <div class="col-md-4 p-3">
              <div class="card bg-primary">
                <div class="card-body d-flex justify-content-between p-3">
                  <div>
                    <h3 class="text-white">123</h3>
                    <h3 class="fw-bold text-white">Cargo List</h3>
                  </div>
                  <i class="fa-solid fa-clipboard-list fs-1 text-white"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <div class="card bg-success">
                <div class="card-body d-flex justify-content-between p-3">
                  <div>
                    <h3 class="text-white">3</h3>
                    <h3 class="fw-bold text-white">Category List</h3>
                  </div>
                  <i class="fa-solid fa-clipboard-list fs-1 text-white"></i>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <div class="card bg-warning">
                <div class="card-body d-flex justify-content-between p-3">
                  <div>
                    <h3 class="text-white">21000000 Kyats</h3>
                    <h3 class="fw-bold text-white">Total Price</h3>
                  </div>
                  <i class="fa-solid fa-money-bill-1-wave fs-1 text-white"></i>
                </div>
              </div>
            </div>
        </div>
        <div class="row mt-3">
          <div class="row d-flex justify-content-end me-3">
          <div class="col-md-2 d-flex">
            <input type="text" name="" class="form-control ps-2" id="">
            <button type="submit" class="btn btn-primary p-2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
          <div class="pt-3">
            <h3 class="text-center fw-bold">Cargo List</h3>
            <table class="table table-hover mx-auto bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Shop</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-active" v-for="item in cargoList">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.name}}</td>
                  <td>{{item.qty}}</td>
                  <td>{{item.price}} Kyats</td>
                  <td>{{item.shop}} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default{
  props:{
    cargoList:{
      type: Array,
      required:true
    }
  },
  data(){
    return{
      search:''
    }
  },
  computed:{
    filterCargoList(){
      return this.cargoList.filter((cargo)=>{
        return cargo.name.match(this.search);
      })
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.text{
  margin-left:90px;
}
</style>
