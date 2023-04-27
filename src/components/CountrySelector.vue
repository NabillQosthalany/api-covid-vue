<template>
  <div class="d-flex justify-content-center">
    <b-form-select size="sm" class="p-2 w-50 mt-3" @change="onChange()" v-model="selected">
      <option value="0">Select Country</option>\
      <option v-for="country in countries" :value="country.ID">
        {{country.Country}}
      </option>
    </b-form-select>
  </div>


</template>
<script>
export default {
  name:'CountrySelector',
  props:['countries'],
  data(){
    return{
      selected:0
    }
  },
  methods:{
    onChange(){
      const country = this.countries.find((item) => item.ID === this.selected)
      this.$emit('get-country',country)
    }
  }
}
</script>
