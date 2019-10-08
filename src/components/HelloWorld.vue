<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Plateau :myHeight='this.plHeight' :myWidth='this.plWidth' :montab='this.monTab'/>
  </div>
</template>

<script>

import Plateau from "./Plateau.vue";

export default {
  components:{
      Plateau
  },
  props: {
    msg: String
  },
  data : function (){
    
    return {
      monTab : [],
      plWidth: 4,
      plHeight: 4
    }
  },
  mounted: function () { //mounted et created = grossomodo comme un Constructeur mais exécutés à des moments différents
    let tab = [];
    for(let i = 0; i < this.plWidth*this.plHeight/2; i++){
      tab[i] = i;
    }
    tab = tab.concat(tab);
    for (let i = tab.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] = [tab[j], tab[i]];
    }
    console.log(tab);
    this.monTab = tab;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
