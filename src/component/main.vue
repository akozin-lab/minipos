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
              <a href="" class="nav-link text-primary">
                <i class="fs-5 fa fa-chart-line"></i>
                <router-link class=" ms-1 d-none d-sm-inline" :to="'/'">Dashboard</router-link>
              </a>
            </li>
            <li class="nav-item">
                  <a href="" class="nav-link text-primary">
                    <i class="fs-5 fa fa-chart-line"></i>
                    <router-link class=" ms-1 d-none d-sm-inline" :to="'/sale'">Sale List</router-link>
                  </a>
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
        <div class="row">
            <div class="col-md-3">
              <div class="card py-4 mx-2 bg-warning">
                <div class="card-body d-flex justify-content-between">
                  <h4 class="ms-2 text-white ms-2">
                    135 <br>
                    Cargo List
                  </h4>
                  <i class="fa fa-clipboard-list me-4 fs-3 text-white"></i>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card py-4 mx-2 bg-success">
                <div class="card-body d-flex">
                  <h4 class="ms-2 text-white">
                    134000 Kyats <br>
                    Monthly Income
                  </h4>
                  <i class="fa-solid fa-money-bill fs-3 text-white ms-4 me-2"></i>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card py-4 mx-2 bg-primary">
                <div class="card-body d-flex">
                  <h4 class="ms-2 text-white">
                    156000 Kyats <br>
                    Daily Income
                  </h4>
                  <i class="fa-solid fa-money-bill fs-3 text-white ms-5 me-2"></i>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card py-4 mx-2 bg-info">
                <div class="card-body d-flex justify-content-between">
                  <h4 class="ms-3 text-white">
                    50000 Kyats <br>
                    Profilt
                  </h4>
                  <i class="fa-solid fa-mug-hot fs-3 text-white me-4"></i>
                </div>
              </div>
            </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-7 pt-3">
            <h3 class="text-center fw-bold">Cargo List</h3>
            <table class="table table-hover mx-auto bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-active" v-for="cargo in cargoList">
                  <th scope="row">{{ cargo.id }}</th>
                  <td>{{cargo.name}}</td>
                  <td>{{cargo.qty}}</td>
                  <td>{{cargo.price}} Kyats</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-5 pt-3">
            <h3 class="text-center fw-bold">Remaining Cargo List</h3>
            <table class="table table-hover mx-3 bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col-2">Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col-2">Shop</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-active" v-for="remain in remainList">
                  <th scope="row">{{ remain.id }}</th>
                  <td>{{remain.name}}</td>
                  <td>{{remain.qty}}</td>
                  <td>{{remain.shop}}</td>
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
      required: true
    },
    remainList:{
      type:Array,
      required: true
    }
  },
  data(){
    return{

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
