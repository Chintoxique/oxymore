<template>
  <div class="home">
    <div class="p-5">
      <img :src="require('../assets/'+game.img)" class="mx-auto w-8/12" alt="">
    </div>
    <div @click="clicker" class="w-full h-full py-6 px-16 cursor-pointer">
      <p class="text-center" v-html="game.txt"></p><p @click="count = 100" v-if="count === 100">NO</p>
    </div>
      <p @click="backclicker">back</p>
      <vue-typer class="" :text="game.txt" :repeat='0'></vue-typer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {

},
mounted() {
  this.refresh();
},
data() {
  return {
    game : {
      img : 'logo.png',
      txt : 'START',
      music : ''
    },
    count : 1,
  }
},
methods: {
  clicker() {
    this.count ++
    this.refresh()
  },
  backclicker() {
    this.count --
    this.refresh()
  },
  refresh() {
    if (this.count === 1) {
      this.game.img = 'archives/bougie.png'
      this.game.txt = '<span class="text-red-500">Allume \n la bougie.</span>'
      this.game.music = 'feu'
    } else if (this.count === 2) {
      this.game.img = 'archives/bougie-a.png'
      this.game.txt = '. . .'
    } else if (this.count === 3) {
      this.game.img = 'archives/3.gif'
      this.game.txt = 'La lueur du feu éclaire les murs de la pièce...'
      this.game.music = 'ost'
    } else if (this.count === 4) {
      this.game.img = 'archives/4-ARCHIVES.png'
      this.game.txt = '. . .'
    } else if (this.count === 5) {
      this.game.img = 'archives/6.gif'
      this.game.txt = "La chance est dans l’oeil de celui qui le regarde. <br>Elle n’est que l’admiration du hasard."
    } else if (this.count === 6) {
      this.game.img = 'archives/77.gif'
      this.game.txt = 'L’observation de la nature,'
      this.game.music = 'violence'
    } else if (this.count === 7) {
      this.game.img = 'archives/78.png'
      this.game.txt = 'La perception des choses qui nous entoure et de la valeur de ceux-ci...'
    } else if (this.count === 8) {
      this.game.img = 'archives/88.png'
      this.game.txt = "De l’infiniment petit"

    } else if (this.count === 9) {
        this.game.img = 'archives/99.gif'
        this.game.txt = 'À la biosphère'

    } else if (this.count === 10) {
        this.game.img = 'archives/10.gif'
        this.game.txt = 'A amené de l’intérêt envers la vie.'

    } else if (this.count === 11) {
        this.game.img = 'archives/globglob.png'
        this.game.txt = '. . .'

    } else if (this.count === 12) {
        this.game.img = 'archives/globglob12.png'
        this.game.txt = 'Pendant longtemps,'

    } else if (this.count === 13) {
        this.game.img = 'archives/os.png'
        this.game.txt = 'Et longtemps...'

    } else if (this.count === 14) {
        this.game.img = 'archives/nain.png'
        this.game.txt = 'On est resté enfermé'

    } else if (this.count === 15) {
        this.game.img = 'archives/valise.png'
        this.game.txt = 'La poussière s’est empilée sur nos meubles.'

    } else if (this.count === 16) {
        this.game.img = 'archives/ptnnn.png'
        this.game.txt = 'Quelque part, la vie reprend ses droits.'

    } else if (this.count === 17) {
        this.game.img = 'archives/TELEVISIE.png'
        this.game.txt = '. . .'


    } else if (this.count === 18) {
        this.game.img = 'archives/AH.png'
        this.game.txt = '<span class="text-red-500 font-bold">Ah.</span>'

    } else if (this.count === 19) {
        this.game.img = 'archives/you-stepped.png'
        this.game.txt = 'Il semblerait que vous ayez marché sur quelque chose.'

    } else if (this.count === 20) {
        this.game.img = 'archives/DOORGIF2.gif'
        this.game.txt = 'Devant vous, se tient une porte.'


    }else if (this.count === 21) {
        this.game.img = 'archives/DOORGIF.gif'
        this.game.txt = 'Ouvrir la porte (oui)'


    } else if (this.count === 22) {
        this.game.img = 'nature/1-chemin.png'
        this.game.txt = 'Vous êtes sorti dehors.'

    } else if (this.count === 23) {
        this.game.img = 'nature/1.gif'
        this.game.txt = 'La lumière est si dense dehors.'

    }else if (this.count === 24) {
        this.game.img = 'nature/herb-and-trees.gif'
        this.game.txt = 'L’atmosphère est si douce,'

    }else if (this.count === 25) {
        this.game.img = 'nature/rainbow.gif'
        this.game.txt = 'Le temps semble s’être arrêté.'

    }else if (this.count === 26) {
        this.game.img = 'nature/cheminn.png'
        this.game.txt = 'Vous apercevez un petit chemin.'

    }else if (this.count === 27) {
        this.game.img = 'nature/nature-vive-les-cailloux.gif'
        this.game.txt = 'L’endroit est paisible.'

    }else if (this.count === 28) {
        this.game.img = 'nature/nature-to-city.gif'
        this.game.txt = '. . .'

    }else if (this.count === 29) {
        this.game.img = 'nature/the-tree.png'
        this.game.txt = 'Cet arbre est particulier.'

    }else if (this.count === 30) {
        this.game.img = 'nature/the-tree-2.png'
        this.game.txt = '*cueillir ?*'

    }else if (this.count === 31) {
        this.game.img = 'nature/the-tree-3.png'
        this.game.txt = 'Garde le précieusement.<br> Ce fruit n’est pas comme les autres.'


    }else if (this.count === 32) {
        this.game.img = 'nature/rain.png'
        this.game.txt = '. . . Il semblerait que la nuit commence à tomber.'

    }else if (this.count === 33) {
        this.game.img = 'nature/paintt.png'
        this.game.txt = '. . .'

    }else if (this.count === 34) {
        this.game.img = 'nature/amen.gif'
        this.game.txt = 'Il y aurait peut-être moyen de s’abriter là-dedans...?'


    }else if (this.count === 35) {
        this.game.img = 'nature/rouille.png'
        this.game.txt = 'Où suis-je ?'

    }else if (this.count === 36) {
        this.game.img = 'nature/trous2.png'
        this.game.txt = 'Ce passage mène à un endroit...'

    }else if (this.count === 37) {
        this.game.img = 'nature/trous.gif'
        this.game.txt = 'Mais... ?'

    }else if (this.count === 38) {
        this.game.img = 'nature/vie-et-mort.png'
        this.game.txt = '. . .'

    }else if (this.count === 39) {
        this.game.img = 'metropole/cat3.png'
        this.game.txt = '. . .'

    }else if (this.count === 40) {
        this.game.img = 'metropole/cat2.png'
        this.game.txt = '. . .'

    }else if (this.count === 41) {
        this.game.img = 'metropole/cat4.png'
        this.game.txt = '. . .'

    }else if (this.count === 42) {
        this.game.img = 'metropole/metropole.png'
        this.game.txt = '. . .'

    }else if (this.count === 43) {
        this.game.img = 'metropole/void1.gif'
        this.game.txt = 'Gris... Le monde est si gris...'

    }else if (this.count === 44) {
        this.game.img = 'metropole/void2.gif'
        this.game.txt = 'Si bruyant et pollué. On en mourrait d’asphyxie.'

    }else if (this.count === 45) {
        this.game.img = 'metropole/void3.gif'
        this.game.txt = 'Tant d’humains concentrés dans un espace si réduit. Tous les jours se ressemblent. Toutes les semaines la même routine. On perd notre vie à la gagner. Cette spirale infernale, la pyramide sociale. Ici, c’est de pire en pire. Un monde tombé dans l’indécence, plein de questions sans réponses.'

    }else if (this.count === 46) {
        this.game.img = 'metropole/void4.gif'
        this.game.txt = 'Comment arrêter le temps ?'

    }else if (this.count === 47) {
        this.game.img = 'metropole/void44.gif'
        this.game.txt = 'Tout cela est imaginaire.'

    }else if (this.count === 48) {
        this.game.img = 'metropole/why.gif'
        this.game.txt = '. . .'

    }else if (this.count === 49) {
        this.game.img = 'metropole/boom.png'
        this.game.txt = '. . .'

    }else if (this.count === 50) {
        this.game.img = 'metropole/cat5.png'
        this.game.txt = 'Pourquoi... Acceptons-nous juste les choses ?'

    }else if (this.count === 51) {
        this.game.img = 'metropole/antenna.png'
        this.game.txt = '. . .'

    }else if (this.count === 52) {
        this.game.img = 'metropole/mask.png'
        this.game.txt = 'Veux-tu ramasser le masque ?(oui/non)'

    }else if (this.count === 53) {
        this.game.img = 'metropole/mask2.gif'
        this.game.txt = '. . . Merci.'

    }else if (this.count === 54) {
        this.game.img = 'metropole/cat7.png'
        this.game.txt = '. . .'

    }else if (this.count === 55) {
        this.game.img = 'metropole/cat8.png'
        this.game.txt = '. . .'

    }else if (this.count === 56) {
        this.game.img = 'metropole/cat.png'
        this.game.txt = '. . .'

    }else if (this.count === 57) {
        this.game.img = 'metropole/casier.png'
        this.game.txt = '. . .'

    }else if (this.count === 58) {
          this.game.img = 'metropole/look.gif'
          this.game.txt = 'Prends ton temps.'

    }else if (this.count === 59) {
          this.game.img = 'metropole/clé.png'
          this.game.txt = '*prendre la clé*'

    }else if (this.count === 60) {
          this.game.img = 'metropole/clé2.png'
          this.game.txt = '. . .'

    }else if (this.count === 61) {
          this.game.img = 'metropole/the-end-mothefucka.gif'
          this.game.txt = '. . . entre.'




          }else {
        this.game.img = 'logo.png'
        this.game.txt = 'END'
    }
  }
}
};
</script>
<style lang="scss">
.vue-typer {

}

.vue-typer .custom.char {
  color: white;
}
</style>
