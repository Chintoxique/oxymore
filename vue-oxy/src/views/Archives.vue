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
                '<div class="text-center">化け物</div><br>Je suis ce qui est montré du doigt<br>Je suis ce que vous n’êtes pas<br>Je suis votre différence<br>Je suis incompris<br>Monde perforé de sens<br>Jugements constants<br>Regards pesants<br>Sur mes fragiles épaules<br>Mon monde s’écroule',
                "L’esthétique du beau n’existe que dans le monde des idées.",
                "Observer<br>Hyper light Drifter<br>Layer of fear<br>Librairie de Babel<br>IB<br>Witch's Heart<br>Yume Nikki<br>Strawberry Cubes<br>Ruiner<br>Home Sweet Home...",
                "Je souris à mes monstres.",
                "J’ai su, de nouveau que ce soir-là, je n’allais pas rêver.<br>Le monde que j’avais vu en rêve se referme.",
                //
                "<div class='text-center'>(ナナ)</div><br> tu es aussi fière et libre qu’un chat errant blessé dont les plaies ne cicatrisent pas",
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
                "États d’âmes",
                "Tant qu’on est là<br>- TSR",
                "J’suis insolent mais tolérant.",
                "...on se serait shooté à la vitamine C si c’était interdit...",
                "La destruction est une forme de création.",
                "T’aurais le courage de te faire sauter la cervelle ?",
                "Trouver une putain de raison d’vivre.<br>J’ai frappé dans les murs mais ça raisonne vide.<br>Tu me fais du mal quand t’étales ton bien... (Humanoïd.)",
                "Dans l’fond on est tous pareil, sous le ciel ébène on s’croise,<br>on s’pose des questions, sans savoir si c’est les bonnes<br>Profite de la nuit si elle est belle... Quelques angoisses à noyer, le jour se lève, les chiens s’arrêtent d’aboyer.",
                "J’oublierai pas<br>Oubliez-moi<br>- furax",
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
                "Lumière<br>Clarté<br>Brilliant<br>Aveuglant<br>Brûler<br>Flamme<br>Lueur<br>Savoir<br>Lampe<br>Phare<br>Rayon<br>Vérité<br>Etincelle<br>Aurore<br>Jour<br>Énigmatique<br>Conscient<br>Doux<br>Innocence",
                "Vertus et vices.",
                "Lucide<br>Perçant<br>Éveillé<br>Aiguisé<br>Perspicace<br>Spirituel<br>Ouvert<br>Esprit<br>Abstrait<br>Symbolique<br>Fictif<br>Imaginaire<br>Collectif<br>Masse<br>Individu<br>Absurde<br>Idéal<br>Faux<br>Utopie<br>Fatalité",
                "Être : fatale abstraction.<br>Regarde autour de toi, comment le monde est beau. Non.<br>Comme ça vit. Comme ça meurt.<br>Être à se quitter. C’est ainsi que nous sommes.<br>Des dieux immobiles nous regardent périr, nous les fixons décédés.<br>C’est ainsi que les hautes ombres nous nomment : êtres.",
                "Oeil<br>Réflexion<br>Vision<br>Perception<br>Regard<br>Observation<br>Conception<br>Rêve<br>Vue<br>Illusion<br>Pupille<br>Iris<br>Rétine<br>Nerf optique<br>Cornée<br>Lumière<br>Flou",
                "Tout est; rien n’est.<br>L’une et l’autre formule aportent une égale sérénité.<br>L’anxieux, pour son malheur, reste entre les deux.<br>Toujours à la merci d’une nuance<br>Incapable de s’établir dans la sécurité de l’être ou de l’absence d'être.<br>(De l'inconvénient d'être né, Cioran.)",
                "Culture de l’immanence.",
                "Le vide, le plein <br>Fallait trouver un entre-deux <br>Entre 2 mondes <br>Bourré de fautes <br>Écrire pour combler <br>Les feuilles se noircissent... <br>Apprendre à être meilleur <br>Tu écris ton histoire <br>Produire pour mourir <br>Mourir en produit <br>Se mentir, mentir aux autres <br>Décider de ne pas choisir <br>Egoïsme ? <br>Lâcheté ? <br>L’altruisme se cultive <br>Creusant l’angoisse <br>Il y a de l’espoir ",
                "Clairvoyance.",
                "Comment savoir si on a le contrôle ? (Mr Robot)",
                "Si la haine répond à la haine, comment la haine finira-t-elle ?",
                "Vacuité",
                "Calme<br>Confinement<br>Bien-être<br>Mal-être<br>Enfermé<br>Prison<br>Territoire<br>Dispute<br>Colère<br>Excitation<br>Cause<br>Chaine<br>Répercussion",
                "Inévitable<br>Humain<br>Caractère<br>Sentiment<br>Juste<br>Injuste<br>Notion morale<br>Engendrement<br>Entrainement<br>Ressentir<br>Réfléchir<br>Agir<br>Abstinence",
                "Écrire pour combler, écrire sans dire. Tuer le temps.",
                "Ris, et tout le monde rira avec toi.<br>Pleure, et tu seras tout seul à pleurer",
                "L’espace d’une vie est le même, qu’on le passe en chantant ou en pleurant.",
                "Tempête interne<br>Le brouillard se lève<br>Flou<br>Déstabilisant<br>Pensées nébuleuses<br>Des étoiles éclatantes<br>La lumière me tranche les yeux<br>Vision trouble<br>Rêve<br>Réveille-toi<br>Réveille-toi<br>Réveille-toi<br>Le vent arrache les mots<br>La pluie me glace le sang<br>Veines<br>La fenêtre est ouverte<br>Mains froides<br>Mes larmes inondent ma chambre<br>Je hurle au vent<br>La crise passe",
                "Compréhension<br>Fondamental<br>Harmonie<br>Palette<br>Infini<br>Couleurs<br>Conception<br>Mélasse<br>Réalité<br>Absorption<br>Psychique<br>Fiction<br>Esprit<br>Illusion<br>Interprétation<br>A priori",
                "Écoute et apprends.",
                "Onirique<br>Irréel<br>Univers<br>Dimension<br>Perspective<br>Subjectif<br>Question<br>Personne<br>Lieu<br>Etablir<br>Fleur<br>Eclat<br>Ecume<br>Mélancolie<br>Nuage<br>Tempête",
                "Neurasthénie.",
                //liste centrée ? par 3 colonnes aaa
                "<div class='text-center'>pluie</div><br>Chute	Déluge	Averse<br>Bombe	Eau	Feu<br>Brouillard	Saturation	Buée<br>Ombre	Ténèbres	Erreur",
                "Rouge<br>Rubis<br>Écarlate<br>Bordeaux<br>Flamboyant<br>Feu<br>Empourpré<br>Honte<br>Boyaux<br>Vermeil<br>Veine<br>Âme<br>Organe<br>Brulant<br>Muqueuse<br>Hémoglobine<br>Désir<br>Colère",
                "Monstre<br>Abominable<br>Ecoeurant<br>Repoussant<br>Démon<br>Damné<br>Rejet<br>Laideur<br>Dérangeant<br>Malheureux<br>Différent<br>Dangereux<br>Mal<br>Inhumain<br>Mauvais",
                "L’égarement peut mener à la perte de soi-même.<br>Les idées qui pourrissent les pensées maintiennent les doutes.",
                "Théorie des paradoxes.",
                "Les corps et les epsrits s’affaiblissent<br>Les nuages s’étalent à l'infini<br>Et les plaines gelées sont sans fin<br>Ce paysage monotone et glacé semble nous avaler. (Ergo Proxy, ep 7)",
                "... Et ils cherchèrent à résoudre des problèmes plus importants,<br>tels que les phénomènes de la Lune,<br>ceux du Soleil<br>et des Étoiles,<br>enfin, la génèse de l’Univers.",
                "Tous les êtres qui errent dans les ténèbres recherchent la lumière,<br>Mais une fois qu’ils l’atteingnent, ils sont aveuglés<br>Ils détournent le regard et en ressentent une douleur encore plus profonde<br>Il en est de même pour la vérité<br>Le jour viendra où ton regard sera embrasé par la lumière de la vérité.<br>Tu connaitras alors les ténèbres éternels. (Ergo Proxy, ep 9)",
                "Là où est votre trésor, <br>là aussi est votre coeur;<br>Et notre trésor est là où bourdonnent les ruches de nos connaissances.<br>C’est vers ces ruches<br>que nous sommes sans cesse en chemin,<br>En véritable insectes ailés qui butinent le miel de l’esprit.",
                "Théorie du chaos.",
                "Fumeux<br>Nébuleux<br>Flottant<br>Confus<br>Timide<br>Léger<br>Imparfait<br>Vaporeux<br>Nuageux",
                "<div class='text-center'>BETON</span><br>Ciment<br>Obstacle<br>Paralysie<br>Impuissance<br>Force<br>Énergie<br>Activité<br>Effort<br>Animation<br>Éveil<br>Éclat	Étincellant",
                "Cosmos et chaos.<br>Plérôme, monde céleste, plénitude.",
                "Ambivalence ; Caractère de ce qui comporte deux composantes de sens contraire, ou de ce qui se présente sous deux aspects.",
                "Plus les circonstances seront contre toi, plus ta force intérieure sera éclatante.",
                "Demander ne coûte qu’un instant d’embarras, ne pas demander c’est être embarassé toute sa vie.",
                "<div class='text-center'>Piano</div><br>Solitude - Sofiane Pamart<br>Minor Fantasy - Chilly Gonzales<br>Prelude in E-Minor (op.28 no. 4) - Frederic Chopin",







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
