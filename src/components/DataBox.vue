<template>
  <div >
    <b-card-group deck>
      <b-card

          class="w-50 text-center mt-3 mx-auto"
          header="Cases"
      >
        <b-card-text>
          New : {{numberWithCommas(stats.NewConfirmed)}}
        </b-card-text>
        <b-card-text>
          Total : {{numberWithCommas(stats.TotalConfirmed)}}
        </b-card-text>
      </b-card>

      <b-card
          class="w-50 text-center mt-3 mx-auto"
          header="Deaths"
      >
        <b-card-text>
          New : {{numberWithCommas(stats.NewDeaths)}}
        </b-card-text>
        <b-card-text>
          Total : {{numberWithCommas(stats.TotalDeaths)}}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name:'DataBox',
  props:['stats'],
  methods:{
    numberWithCommas(x){
      return x.toLocaleString();
    }
  }
}
</script>
