<template>
  <div class="hello">
    <button :disabled="this.disable" v-on:click="discover" >{{ myValueToShow }}</button>
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
                return "?"
            return this.value;
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