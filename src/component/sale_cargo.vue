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
      <div class="p-3 col-md-10 d-flex align-items-center justify-content-center">
        <div class="row bg-primary p-5">
          <h2 class="fw-bold text-white text-center">Enter Your Sale Item</h2>
          <div class="col-md-8 mx-auto">
            <form action="">
              <div class="form-group">
                <label for="" class="text-white">Name</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group">
                <label for="" class="text-white">Category</label>
                <input type="text" class="form-control">
              </div>
              <div class="row d-flex justify-content-between">
                <div class="form-group col-md-5">
                  <label for="" class="text-white">Qty</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-5">
                  <label for="" class="text-white">unit</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="text-white">Price</label>
                <input type="text" class="form-control">
              </div>
              <div class="text-end">
                <button class="btn btn-white shadow-sm p-2 my-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default{
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
