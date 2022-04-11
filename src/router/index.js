import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/AboutUs'
import Market2B from '../views/Market2B'
import PriceIndex from '../views/PriceIndex'
import Produce from '../views/Produce'
import CulturalCreative from '../views/CulturalCreative'
import PriceMap from '../views/PriceMap'
import Market2C from '../views/Market2C'
import Market2CDetail from '../views/Market2CDetail'
import DemandDisplay2C from '../views/DemandDisplay2C'
import DemandDisplay2B from '../views/DemandDisplay2B'
import PatentMarket from '../views/PatentMarket'
import Plot from '../views/Plot'
import NotFound from '../views/NotFound'
import test from '../views/test'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const includPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return includPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Market2C,
        },
        {
            path: '/market2c',
            component: Market2C,
        },
        {
            path: '/market2c/:itemId',
            component: Market2CDetail,
        },
        {
            path: '/market2b',
            component: Market2B,
        },
        {
            path: '/priceindex',
            component: PriceIndex,
        },
        {
            path: '/produce',
            component: Produce,
        },
        {
            path: '/culturalcreative',
            component: CulturalCreative,
        },
        {
            path: '/priceMap',
            component: PriceMap,
        },
        {
            path: '/demanddisplay2c',
            component: DemandDisplay2C,
        },
        {
            path: '/demanddisplay2b',
            component: DemandDisplay2B,
        },
        {
            path: '/patentmarket',
            component: PatentMarket,
        },
        {
            path: '/plot',
            component: Plot,
        },
        {
            path: '/aboutus',
            component: AboutUs,
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/test',
            component: test
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})