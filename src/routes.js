import mainBlog from './component/main'
import saleBlog from './component/sale'
import saleCargo from './component/sale_cargo'
import cargoList from './component/cargo_list'
import addcargo from './component/add_cargo'
import category from './component/category'
import addcategory from './component/add_category'
import shop from './component/shop'
import addShop from './component/add_shop'
import remainItem from './component/remaining_items'

export default [{
        path: '/',
        component: mainBlog
    }, {
        path: '/sale',
        component: saleBlog
    }, {
        path: '/sale/addcargo',
        component: saleCargo
    }, {
        path: '/cargo',
        component: cargoList
    }, {
        path: '/cargo/addcargoList',
        component: addcargo
    }, {
        path: '/category',
        component: category
    },
    {
        path: '/category/addcategory',
        component: addcategory
    }, {
        path: '/shop',
        component: shop
    },
    {
        path: '/shop/addshop',
        component: addShop
    }, {
        path: '/remain',
        component: remainItem
    }
]