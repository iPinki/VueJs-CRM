import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
	apiKey: 'AIzaSyDF75grQ1nMc9xRv4oTVY6ksT22jDrNJsI',
	authDomain: 'ipinki-vue-crm.firebaseapp.com',
	databaseURL: 'https://ipinki-vue-crm.firebaseio.com',
	projectId: 'ipinki-vue-crm',
	storageBucket: 'ipinki-vue-crm.appspot.com',
	messagingSenderId: '757183221061',
	appId: '1:757183221061:web:090c0e8c9788e9e5c9c22c'
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})
