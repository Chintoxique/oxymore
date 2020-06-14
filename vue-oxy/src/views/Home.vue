<template>
  <div class="home">
    <div class="absolute top-0 right-0 m-10 ">
      <img v-if="hana === true" class="inline-block m-1" :src="require('../assets/hana.png')" alt="">
      <img v-if="hana === false" class="inline-block m-1" :src="require('../assets/empty.png')" alt="">
      <img v-if="mask === true" class="inline-block m-1" :src="require('../assets/mask.png')" alt="">
      <img v-if="mask === false" class="inline-block m-1" :src="require('../assets/empty.png')" alt=""> <br>
      <img v-if="key === true" class="inline-block m-1" :src="require('../assets/key.png')" alt="">
      <img v-if="key === false" class="inline-block m-1" :src="require('../assets/empty.png')" alt="">
      <img class="inline-block m-1" :src="require('../assets/empty.png')" alt="">
    </div>
    <div v-bind:class="{ hidden: ending }"  class="p-5">
      <img :src="require('../assets/'+game.img)" class="mx-auto w-8/12" alt="">
    </div>
    <div v-bind:class="{ hidden: ending }" class="text-center py-3 w-8/12 mx-auto" style="border:solid 1px white;">
      <div @click="clicker" class="w-full h-full px-2 cursor-pointer pb-2">
        <vue-typer class="" :text="game.txt" :repeat='0' :type-delay='100'></vue-typer>
      </div>
      <p class="inline-block border-black border-l-2 px-3 mx-2 hover:border-white cursor-pointer" @click="goto(22)" v-if="count === 21">OUI</p> <br>
      <p class="inline-block border-black border-l-2 px-3 mx-2 hover:border-white cursor-pointer" @click="goto(33)" v-if="count === 21">NON</p>
      <p class="inline-block border-black border-l-2 px-3 mx-2 hover:border-white cursor-pointer" @click="goto(32)" v-if="count === 31">OUI</p>
      <p class="inline-block border-black border-l-2 px-3 mx-2 hover:border-white cursor-pointer" @click="goto(54)" v-if="count === 53">OUI</p>
      <p class="inline-block border-black border-l-2 px-3 mx-2 hover:border-white cursor-pointer" @click="goto(61)" v-if="count === 60">OUI</p>
    </div>
    <div class="p-5" v-if="ending === true" >
      <img @click="lock = true" :src="require('../assets/flame.gif')" class="mx-auto w-5/12" alt="">
    </div>
    <div class=" text-center" v-if="ending === true">
      <input v-model="psw" v-on:keyup="checkPSW" class="bg-black text-white text-2xl border-2 border-white text-center p-2" type="text" name="" value="" style="width: 7ch">
    </div>

      <p class="mt-5 pt-10 pb-4">OPTION :</p>
      <p class="inline-block cursor-pointer" @click="backclicker">back</p>
      <input class="text-white bg-black float-right" v-model="count" type="text" name="" value="" style="width:5ch">

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import router from "@/router";

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
    hana : false,
    mask : false,
    key : false,
    count : 1,
    memory : new Audio(require('../assets/mu/memory.mp3')),
    sorrowful : new Audio(require('../assets/mu/sorrowful.mp3')),
    nakamura : new Audio(require('../assets/mu/nakamura.mp3')),
    kumo : new Audio(require('../assets/mu/kumo.mp3')),
    soundPorte : new Audio(require('../assets/mu/sound/porte.wav')),
    soundFruit : new Audio(require('../assets/mu/sound/fruit.wav')),
    soundFire : new Audio(require('../assets/mu/sound/fire.wav')),

    ending : false,
    lock : false,
    psw: "",
  }
},
methods: {
  checkPSW() {
    if (this.psw === "VOID") {
       router.push('Archives')
    }
  },
  clicker() {
    this.count ++
    this.refresh()
  },
  backclicker() {
    this.count --
    this.refresh()
  },
  goto(x) {
    if (this.count === 31) {
      this.hana = true
    } else if (this.count === 53) {
      this.mask = true
    } else if (this.count === 60) {
      this.key = true
    } else {
      console.log("-- --- .-. - (22)")
    }
    this.count = x
    this.refresh()
  },
  refresh() {
    //const memory = new Audio(require('../assets/mu/memory.mp3'));
    // const sorrowful = new Audio(require('../assets/mu/sorrowful.mp3'));
    // const nakamura = new Audio(require('../assets/mu/nakamura.mp3'));
    // const kumo = new Audio(require('../assets/mu/kumo.mp3'));
    if (this.count === 1) {
      this.game.img = 'archives/bougie.png'
      this.game.txt = 'Allume la bougie.'
      this.game.music = 'feu'

//frame 2 : music : 05 Memory (Ib OST)
    } else if (this.count === 2) {
      this.soundFire.play()
      this.memory.play()
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
      this.game.txt = "La chance est dans l’oeil de celui qui regarde. \nElle n’est que l’admiration du hasard."
    } else if (this.count === 6) {
      this.game.img = 'archives/77.gif'
      this.game.txt = 'L’observation de la nature,'
      this.game.music = 'violence'
    } else if (this.count === 7) {
      this.game.img = 'archives/78.png'
      this.game.txt = 'La perception des choses qui nous entoure \net de la valeur de ceux-ci...'
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
        this.game.txt = 'Ah.'

    } else if (this.count === 19) {
        this.game.img = 'archives/you-stepped.png'
        this.game.txt = 'Il semblerait que vous ayez marché sur quelque chose.'

    } else if (this.count === 20) {
        this.game.img = 'archives/DOORGIF2.gif'
        this.game.txt = 'Devant vous, se tient une porte.'


    } else if (this.count === 21) {
        // memory.pause();
        // memory.currentTime = 0;
        this.game.img = 'archives/porte.png'
        this.game.txt = 'Ouvrir la porte ?'

    } else if (this.count === 22) {
        this.memory.pause()
        this.soundPorte.play()
        this.game.img = 'archives/open-door.gif'
        this.game.txt = '...'

//frame 23 music : Fullmetal Alchemist Brotherhood OST 3 - Sorrowful Stone
    } else if (this.count === 23) {
        this.sorrowful.play();
        this.game.img = 'nature/1-chemin.png'
        this.game.txt = 'Vous êtes sorti dehors.'

    } else if (this.count === 24) {
        this.game.img = 'nature/1.gif'
        this.game.txt = 'La lumière est si dense ici.'

    }else if (this.count === 25) {
        this.game.img = 'nature/herb-and-trees.gif'
        this.game.txt = 'L’atmosphère est si douce,'

    }else if (this.count === 26) {
        this.game.img = 'nature/rainbow.gif'
        this.game.txt = 'Le temps semble s’être arrêté.'

    }else if (this.count === 27) {
        this.game.img = 'nature/cheminn.png'
        this.game.txt = 'Vous apercevez un petit chemin.'

    }else if (this.count === 28) {
        this.game.img = 'nature/nature-vive-les-cailloux.gif'
        this.game.txt = 'L’endroit est paisible.'

    }else if (this.count === 29) {
        this.game.img = 'nature/nature-to-city.gif'
        this.game.txt = '. . .'

    }else if (this.count === 30) {
        this.game.img = 'nature/the-tree.png'
        this.game.txt = 'Cet arbre est particulier.'

    }else if (this.count === 31) {
        this.game.img = 'nature/the-tree-2.png'
        this.game.txt = 'cueillir ?'

    }else if (this.count === 32) {
        this.soundFruit.play()
        this.sorrowful.pause();
        this.game.img = 'nature/the-tree-3.png'
        this.game.txt = 'Garde le précieusement. \nCe fruit n’est pas comme les autres.'


//frame 33 music : Fukasawa Hideyuki (深澤秀行) - Nakamura Sawa no Kyoukan (仲村佐和の叫喚)
    }else if (this.count === 33) {
        this.memory.pause()
        this.nakamura.play()
        this.game.img = 'nature/rain.png'
        this.game.txt = '. . . Il semblerait que la nuit commence à tomber.'

    }else if (this.count === 34) {
        this.game.img = 'nature/paintt.png'
        this.game.txt = '. . .'

    }else if (this.count === 35) {
        this.game.img = 'nature/amen.gif'
        this.game.txt = 'Il y aurait peut-être moyen de s’abriter là-dedans...?'


    }else if (this.count === 36) {
        this.game.img = 'nature/rouille.png'
        this.game.txt = 'Où suis-je ?'

    }else if (this.count === 37) {
        this.game.img = 'nature/trous2.png'
        this.game.txt = 'Ce passage mène à un endroit...'

    }else if (this.count === 38) {
        this.game.img = 'nature/trous.gif'
        this.game.txt = 'Mais... ?'

    }else if (this.count === 39) {
        this.game.img = 'nature/vie-et-mort.png'
        this.game.txt = '. . .'

    }else if (this.count === 40) {
        this.game.img = 'metropole/cat3.png'
        this.game.txt = '. . .'

    }else if (this.count === 41) {
        this.game.img = 'metropole/cat2.png'
        this.game.txt = '. . .'

    }else if (this.count === 42) {
        this.game.img = 'metropole/cat4.png'
        this.game.txt = '. . .'

    }else if (this.count === 43) {
        this.game.img = 'metropole/metropole.png'
        this.game.txt = '. . .'

    }else if (this.count === 44) {
        this.game.img = 'metropole/void1.gif'
        this.game.txt = 'Gris... Le monde est si gris...'

    }else if (this.count === 45) {
        this.game.img = 'metropole/void2.gif'
        this.game.txt = 'Si bruyant et pollué. On en mourrait d’asphyxie.'

    }else if (this.count === 46) {
        this.game.img = 'metropole/void3.gif'
        this.game.txt = 'Tant d’humains concentrés dans un espace si réduit. \n Une masse d’invidivus. Morts et vivants. \n Les jours se répètent. \nToutes les semaines la même boucle. \nOn perd notre vie à la gagner. \nCette spirale infernale. La pyramide sociale. \nIci, c’est de pire en pire. \nComment arrêter le temps ?'

    }else if (this.count === 47) {
        this.game.img = 'metropole/void4.gif'
        this.game.txt = 'Un monde tombé dans l’indécence, pleins de questions sans réponses.'

    }else if (this.count === 48) {
        this.game.img = 'metropole/void44.gif'
        this.game.txt = 'Tout cela est imaginaire.'

    }else if (this.count === 49) {
        this.game.img = 'metropole/why.gif'
        this.game.txt = '. . .'

    }else if (this.count === 50) {
        this.game.img = 'metropole/boom.png'
        this.game.txt = '. . .'

    }else if (this.count === 51) {
        this.game.img = 'metropole/cat5.png'
        this.game.txt = 'Pourquoi . . . Acceptons-nous juste les choses ?'

    }else if (this.count === 52) {
        this.game.img = 'metropole/antenna.png'
        this.game.txt = '. . .'

    }else if (this.count === 53) {
        this.game.img = 'metropole/mask.png'
        this.game.txt = 'Veux-tu ramasser le masque ?'

    }else if (this.count === 54) {
        this.soundFruit.play()
        this.game.img = 'metropole/mask2.gif'
        this.game.txt = '. . . Merci.'

    }else if (this.count === 55) {
        this.game.img = 'metropole/cat7.gif'
        this.game.txt = '. . .'

    }else if (this.count === 56) {
        this.game.img = 'metropole/cat8.png'
        this.game.txt = '. . .'

    }else if (this.count === 57) {
        this.game.img = 'metropole/cat.png'
        this.game.txt = '. . .'

    }else if (this.count === 58) {
        this.game.img = 'metropole/casier.png'
        this.game.txt = '. . .'

    }else if (this.count === 59) {
          this.game.img = 'metropole/look.gif'
          this.game.txt = 'Prends ton temps. \n De regarder autour de toi.'

    }else if (this.count === 60) {
          this.game.img = 'metropole/clé.png'
          this.game.txt = '*prendre la clé*'

    }else if (this.count === 61) {
          this.soundFruit.play()
          this.game.img = 'metropole/clé2.png'
          this.game.txt = '. . .'

    }else if (this.count === 62) {
          this.nakamura.pause()
          this.game.img = 'metropole/the-end-mothefucka.gif'
          this.game.txt = '. . . entre.'

//music end : Jigoku Shoujo - Ost - Kumo To Rouba To Shoujo


    } else if (this.count === 63) {
        this.kumo.play()
        this.game.img = 'flame.gif'
        this.ending = true
    } else {
      //this.count = 1
    }
}
},
}
</script>
<style lang="scss">
.vue-typer {
  word-break: keep-all;
}

.vue-typer .custom.char {
  color: white;
}
</style>
