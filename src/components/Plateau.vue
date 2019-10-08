<template>
    <div>
        <h2>Tableau de dimmension {{ myHeight }} x {{ myWidth }}</h2>
        <table>
            <tr v-for="i in myHeight" :key="i">
                <td v-for="j in myWidth" :key="myWidth*(i-1) + j-1" :id="myWidth*(i-1) + j-1" >
                    <CardOfPair :id="myWidth*(i-1) + j-1" :value="montab[myWidth*(i-1) + j-1]" :callback="clickEvent"/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import CardOfPair from './CardOfPair.vue'

export default {
    components:{
        CardOfPair
    },
    props : { //props = paramètres de construction restant statiques
        myHeight : Number,
        myWidth : Number,
        montab : Array
    },
    data: function(){ // data = fonction qui retourne un objet contenant les données à caractère variable
        return {
            discovered: [],
            allFound: 0
        }
    },
    methods: {
        mamethode : function(){
            this.msg = "changé"
        },
        clickEvent: function (source) {
            this.discovered.push(source);
            if(this.discovered.length == 2){
                    let first = this.discovered[0];
                    let second = this.discovered[1]
                    this.discovered = [];
                if (first._props.value == second._props.value){
                    first.found();
                    second.found(); 
                    this.allFound += 2;
                    if (this.allFound == this.myHeight * this.myWidth){
                        window.alert("win");
                    }
                }
                else{
                    setTimeout(() => {
                        first.hide();
                        second.hide();
                    }, 1000);
                }
                
            }
        }
    }
    
}
</script>

<style>
table{
    margin: auto
}
</style>