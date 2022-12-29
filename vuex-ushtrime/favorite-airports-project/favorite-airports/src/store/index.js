import { createStore } from 'vuex'
import UserModule from './userModule.js'
import AirportModule from './airportsModule.js'

export default createStore({
  modules: {
    user: UserModule,
    airports: AirportModule
  }
})
