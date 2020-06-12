<template>
  <div class="bg-white min-h-screen">
    <div class="bg-white w-full masonry-with-columns gap-4 p-4">
      <div v-for="archive in archives" :key="archive" class="border-2 border-black text-black p-2">
        <p v-html="archive"></p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {
              archives : [
                "Fragments de pensées",
                "éveil source savoir fleur <br> étincelle raison curiosité insectes <br> flamme jour études collecte <br> clarté conscience entomologie schéma <br> lampe doux coton graine <br> savoir phare nature terre",
                "Assembler",
                "De l’ombre à la lumière <br> De l’aube au crépuscule <br> Lumière sombre <br> Sombre lueur",
                'Champs de vision <span class="float-right">perspective</span>',
                "As-tu la volonté de bâtir quelque chose de beau ?",
                "Tu écris ton histoire",
                "Toute parole enferme une vérité. <br> Les cadeaux pourrissent dans le panier. <br>Reste <br>L’encre et le papier. <br>Livres et lettres, univers de papier.<br> Carnets secrets <br>Finiront tous aux archives.",
                "Mémoire écrite.",
                "La chance n’est que l’admiration du hasard.",
                "Sur la plus petite feuille de trèfle, scientillent des gouttes au clair de lune. <br> Ni grand ni petit, ni riche ni pauvre, n’est privé de l’éclat du ciel.",
                "Papillons toxiques <br>Papillon de nuit <br>Nuits blanches, idées noires <br>À m’en détruire le corps, la chair <br>Y a des choses qui me poussent à croire <br>Qu’il n’y a plus rien.",
                "Mes veines pourrissent. <br> J’suis en boucle, j’écris c’que j’pense. <br>Ma tête hurle dans ce silence, d’une nuit estivale <br>Les autres s’amusent pendant que d’autres crèvent <br>Ça a toujours été comme ça.",
                "Il n’y a plus d’espoir pour ce monde.<br>Rendez-moi ma voix ;",
                "Études des sciences naturelles",
                "Théorie des signatures",
                "Poésie de l’observation <br>Collecte d’objets <br>Matérialisme conscient <br>Éveil de la curiosité <br>  Passe-temps, herbe et soleil <br>  Fleurs mortes, os séchés<br>  Gants et ciseaux dans le sac<br>Odeur de résine, insectes<br>  Craqués à l’alcool<br>Peroxyde d’acétone<br>Bois mort, arbres tordus<br>  Les fruits attendent la mort",
                "Dentelle Enluminure Textes Sculpture <br>Codes Cryptage Symbole Histoire<br>Ambiance Script Rouages Collages<br>Couleurs Récits Contes chroniques Requiem",
                "Grand est celui qui n’a pas perdu son coeur d’enfant.",
                "Capreolus Capreolus",
                "Le jardin perdu",
                "Fleur du mal<br>惡の華<br>Aku no hana",
                "Cendres tournoyantes au pied de la colline irréelle.<br>Au-delà des eaux scintillantes<br>Lentement, Délicatement, Silencieusement. Dans le néant.<br>Les lèvres des sages deviennent ébènes, les os gelés tremblent.<br>Avant qu’un oeil ne cligne, au loin dans le ciel,<br>J’observerai votre chute.",
                '<span class="float-center">化け物</span><br>Je suis ce qui est montré du doigt<br>Je suis ce que vous n’êtes pas<br>Je suis votre différence<br>Je suis incompris<br>Monde perforé de sens<br>Jugements constants<br>Regards pesants<br>Sur mes fragiles épaules<br>Mon monde s’écroule',
                "L’esthétique du beau n’existe que dans le monde des idées.",
                "Observer<br>Hyper light Drifter<br>Layer of fear<br>Librairie de Babel<br>IB<br>Witch's Heart<br>Yume Nikki<br>Strawberry Cubes<br>Ruiner<br>Home Sweet Home...",
                "Je souris à mes monstres.",
                "J’ai su, de nouveau que ce soir-là, je n’allais pas rêver.<br>Le monde que j’avais vu en rêve se referme.",
                "(ナナ)<br> tu es aussi fière et libre qu’un chat errant blessé dont les plaies ne cicatrisent pas",
                "Idée sans sens.<br>Conception complexe.<br>Yeux de la mort.",
                "Singularité",
                "Folie pure.",
                "Odeur de tabac froid sur les draps.<br>Cendres.",
                "L’indifférence est une paralysie de l’âme.",
                "Le corps n’est que l’enveloppe de l’âme.",
                "Comment vivre dans un corps qui veut mourir ?",
                "L’école n'apprend pas à vivre.",
                "Transition d’une enfance de merde.",
                "avidement<br>affamé<br>cupide<br>ardent<br>envieux<br>haletant<br>passionné<br>altéré<br>avare<br>curieux<br>impatient<br>rapace<br>amoureux<br>béant<br>désireux<br>insatiable<br>anxieux<br>dévorant<br>âpre",
                "Kekro - Monde de fou",
                "Béton gris<br>Metro boulot dodo<br>Travail à la chaine<br>On perd notre vie à la gagner<br>Besoin d’arrêter le temps<br>Mais ici pas l’temps de s’arrêter.",
                "J’veux pas d’un futur à vendre, ni d’un passé à racheter.<br>J’veux pas être dans l’sens de la marche, j’suis ni à gauche, ni à droite,<br>j’ai pas de temps à gâcher !",
                "Cette spirale infernale, la pyramide sociale",
                "L’heure tourne",
                "On passe nos vies à courir après le temps, alors que celui-ci n’est qu'une conception imaginaire.",
                "FURAX - J’oublierai pas<br>Oubliez-moi",
                "États d'âmes",
                "Tant qu’on est là - TSR",
                "J’suis insolent mais tolérant.",
                "La destruction est une forme de création.",
                "T’aurais le courage de te faire sauter la cervelle ?",
                "Trouver une putain de raison d’vivre.<br>J’ai frappé dans les murs mais ça raisonne vide.<br>Tu me fais du mal quand t’étales ton bien... (Humanoïd.)",
                "...on se serait shooté à la vitamine C si c’était interdit...",
                "Dans l’fond on est tous pareil, sous le ciel ébène on s’croise,<br>on s’pose des questions, sans savoir si c’est les bonnes<br>Profite de la nuit si elle est belle... Quelques angoisses à noyer, le jour se lève, les chiens s’arrêtent d’aboyer.",
                "Ville. Concentration d’humains dans un espace réduit.<br>Stress et travail.<br>Routine. Argent.<br>Oppression. Corruption.<br>Règles imposées. Lois imposées.<br>Justice injuste.<br>Rythme configuré.<br>Angoisse constante.<br>Vie de groupe.<br>Troupeaux de morts.<br>Solitude.<br>Devoirs.<br>Chute.",
                "Obscurantisme, conspiration.",
                "Vivre libre ou mourir.",
                "Mort. Peur. Proche. Guerre. Injustice. Sang. Grands et Petits. Écrasés. Frappés. Gazés. Coupés. Militaires. Armes à feu. Fenêtre brisées. Éclats. Sanglots. Infractions. Massacres. Mensonges. Rires. Haine. Monde. Fatalisme. Temps. Dimensions. Réalité. Destinée. Mouvement. Trou noir.",
                "Notre grande guerre est spirituelle. Notre plus grande dépression, c’est nos vies.",
                'Conséquences<span class="float-right">Répercussions</span>',
                "Qui accumule les richesses à beaucoup à perdre.",
                "Ce ne sont pas ceux qui parlent le plus, qui ont des choses à dire.",
                "Mieux vaut allumer une chandelle que de maudire l’obscurité.",
                "Philosophie des Lumières",
                "L’astrolabe.",
          


              ],
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
.masonry-with-columns {
columns: 3 200px;
column-gap: 1rem;
div {
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 95%;
}
}
</style>
