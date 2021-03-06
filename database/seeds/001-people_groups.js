exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("people_groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("people_groups").insert([
        { name: "Wavexv  d albatross" },
        { name: "Kor vvfdbi bustard" },
        { id: 3, name: "Quailfdfgrg, gambel's" },
        { id: 4, name: "Black anwewed white colobus" },
        { id: 5, name: "Africafgfdn snake (unidentified)" },
        { id: 6, name: "Urikyukal" },
        { id: 7, name: "Genet, smbgbdfgall-spotted" },
        { id: 8, name: "Snake-neckedbfgbfsb turtle" },
        { id: 9, name: "Squirrel, bdfdsbeastern fox" },
        { id: 10, name: "Phalarobfsbfpe, northern" },
        { id: 11, name: "Possum, commobbfn brushtail" },
        { id: 12, name: "Racer snabfdbdke" },
        { id: 13, name: "Frogmouth, tawny" },
        { id: 14, name: "Black-capped chickadee" },
        { id: 15, name: "Stork,bfstj european" },
        { id: 16, name: "Fox, crab-ejtjating" },
        { id: 17, name: "Fox, north amerjytjican red" },
        { id: 18, name: "Capuchin, whiwefaefte-fronted" },
        { id: 19, name: "Grenagfdshjydier, common" },
        { id: 20, name: "Rainbjtrjnfgow lory" },
        { id: 21, name: "Gray langngnyreur" },
        { id: 22, name: "Elanduyrunb, common" },
        { id: 23, name: "Waterbubdbfbck, common" },
        { id: 24, name: "Eastern dwarf trbssrdbmongoose" },
        { id: 25, name: "Avocet, ndbetybpied" },
        { id: 26, name: "Fowl, helmeted regtgrwtguinea" },
        { id: 27, name: "Gray lanthrehyhngur" },
        { id: 28, name: "Bontebyjhtbtok" },
        { id: 29, name: "Gray rbterbehea" },
        { id: 30, name: "Cormotehbrant, pied" },
        { id: 31, name: "Ibis, htdbfglossy" },
        { id: 32, name: "Oceloewrfewrt" },
        { id: 33, name: "Curve-erfbgyujbilled thrasher" },
        { id: 34, name: "Southern tgredvfhlapwing" },
        { id: 35, name: "Burmese brown mhdgbdrteountain tortoise" },
        { id: 36, name: "Goose, knobgfdbgmb-nosed" },
        { id: 37, name: "Bird, black-thnhgfngfhneroated butcher" },
        { id: 38, name: "American nggfnfgnmarten" },
        { id: 39, name: "Canada gogffdgbtyose" },
        { id: 40, name: "Cormoranbgfdbt, pied" },
        { id: 41, name: "Maskefbdbdd booby" },
        { id: 42, name: "Crane, wabgfdbdfgbttled" },
        { id: 43, name: "Dove, mourninbgdfhterg collared" },
        { id: 44, name: "Snake, buttetherhtnrmilk" },
        { id: 45, name: "Small-clawengetrgred otter" },
        { id: 46, name: "Racer, amerregyetyican" },
        { id: 47, name: "Rose-ringed sfdzfparakeet" },
        { id: 48, name: "Cougabjytjr" },
        { id: 49, name: "Puna jhrjryibis" },
        { id: 50, name: "Pickle Rick" }
      ]);
    });
};
