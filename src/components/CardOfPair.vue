<template>
  <div class="cardDiv">
    <img class="card" :disabled="this.disable" v-on:click="discover"  :src="myValueToShow"/>
  </div>
</template>

<script>
export default {
    props: {
        value: Number,
        callback: Function
    },
    data: function () {
        return {
            hidden : true,
            disable : false
        }
    },
    computed: { //Computed = comme les properties en C#
        myValueToShow: function () {
            if(this.hidden)
                return "assets/logo.png";
            return `assets/${this.value}.png`;
        }
    },
    methods: {
        discover: function (event) {
            this.hidden = false;
        },
        hide: function(){
            this.hidden = true;
        },
        found: function () {
            this.disable = true;
        }
    },
    updated: function(){
        if (!this.hidden & !this.disable) 
            this.callback(this);
    }
}
</script>

<style scoped>
    img{
        height: 100%;
        max-height: 150px;
    }
</style>