<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate"/>
    <DataBox :stats="stats"/>
    <CountrySelector @get-country="getCountryData" :countries="countries"/>
    <div class="btn-clear d-flex justify-content-center">
      <b-button variant="primary" class="mt-2 mx-auto" @click="clearCountry" v-if="stats.Country">Clear Country</b-button >
    </div>
  </main>
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
    <div class="mt-3">
      <b-spinner variant="primary"></b-spinner>
    </div>
  </main>
</template>

<script>
import DataTitle from '../components/DataTitle'
import DataBox from '../components/DataBox'
import CountrySelector from "@/components/CountrySelector";
export default {
  name:'Home',
  components:{
    CountrySelector,
    DataTitle,
    DataBox
  },
  data(){
    return{
    loading:true,
    title:'Global',
    dataDate:'',
    stats:{},
    countries:[],
    }
  },
  methods:{
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country){
      this.stats = country
      this.title = country.Country
    },
    async clearCountry(){
      this.loading = true
      const data = await this.fetchCovidData()
      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }

  },
  async created() {
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false

  }

}
</script>

<style>
</style>
