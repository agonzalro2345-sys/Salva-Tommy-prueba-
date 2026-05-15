




const WETLAND_MAP: Record<string, string> = {
  "TORCA-GUAYMARAL":        "TORCA_GUAYMARAL",
  "TORCA GUAYMARAL":        "TORCA_GUAYMARAL",
  "TIBABUYES":              "JUAN_AMARILLO",
  "JUAN AMARILLO":          "JUAN_AMARILLO",
  "CÓRDOBA":                "CORDOBA",
  "CORDOBA":                "CORDOBA",
  "LA CONEJERA":            "LA_CONEJERA",
  "JABOQUE":                "JABOQUE",
  "CAPELLANÍA":             "CAPELLANIA",
  "CAPELLANIA":             "CAPELLANIA",
  "EL BURRO":               "CAPELLANIA",
  "TIBANICA":               "TIBANICA",
  "SANTA MARÍA DEL LAGO":   "SANTA_MARIA",
  "SANTA MARIA DEL LAGO":   "SANTA_MARIA",
  "MEANDRO DEL SAY":        "MEANDRO_DEL_SAY",
  "LA VACA":                "LA_VACA",
};

// Positions calibrated against the numbered labels in the pixel-art map image (1087×710 px)
// x/y are percentages of the rendered map container width/height
// Positions tuned to the blue water patches in the pixel-art map (1087×710 px)
// Labels in the image sit ABOVE the actual water bodies, so zones are placed below each label
const WETLANDS = [
  { id: "LA_CONEJERA",     name: "La Conejera",         num: 1,  x: 58, y: 14},
  { id: "TORCA_GUAYMARAL", name: "Torca-Guaymaral",     num: 2,  x: 70, y: 5 },
  { id: "JABOQUE",         name: "Jaboque",              num: 3,  x: 41, y: 31 },
  { id: "JUAN_AMARILLO",   name: "Juan Amarillo",        num: 4,  x: 50, y: 28 },
  { id: "CORDOBA",         name: "Córdoba",              num: 5,  x: 66, y: 26 },
  { id: "SANTA_MARIA",     name: "Santa María del Lago", num: 6,  x: 55, y: 42 },
  { id: "CAPELLANIA",      name: "Capellanía",           num: 7,  x: 40, y: 49 },
  { id: "TIBANICA",        name: "Tibanica",             num: 8,  x: 26, y: 80 },
  { id: "LA_VACA",         name: "La Vaca",              num: 9,  x: 30, y: 64 },
  { id: "MEANDRO_DEL_SAY", name: "Meandro del Say",      num: 10, x: 26, y: 50 },
];

const INITIAL_SPECIES: Species[] = [
  {
    id: "sp-001", num: "001",
    name: "Zorro Plateado", scientificName: "Cerdocyon thous",
    type: "Mamífero",
    wetlands: ["TORCA_GUAYMARAL"],
    rarity: "Raro",
    description: "Son fundamentales para el ecosistema, ya que ayudan controlar la población de roedores y en la dispersión de semillas.",
    emoji: "🦊", imageId: 1,
  },
  {
    id: "sp-002", num: "002",
    name: "Culebra Sabanera", scientificName: "Atractus crassicaudatus",
    type: "Reptil",
    wetlands: ["CORDOBA", "LA_CONEJERA", "JABOQUE", "CAPELLANIA", "JUAN_AMARILLO", "TORCA_GUAYMARAL"],
    rarity: "Común",
    description: "Es una serpiente endémica de la sabana de Bogotá, es inofensiva y no venenosa.",
    emoji: "🐍", imageId: 2,
  },
  {
    id: "sp-003", num: "003",
    name: "Rana Sabanera", scientificName: "Dendropsophus labialis",
    type: "Anfibio",
    wetlands: ["LA_CONEJERA", "JUAN_AMARILLO", "TIBANICA"],
    rarity: "Común",
    description: "Se asolean durante el día para aumentar su temperatura corporal.",
    emoji: "🐸", imageId: 3,
  },
  {
    id: "sp-004", num: "004",
    name: "Currucutú Común", scientificName: "Megascops choliba",
    type: "Ave",
    wetlands: ["LA_CONEJERA", "CAPELLANIA", "TORCA_GUAYMARAL"],
    rarity: "Poco Común",
    description: "Los machos y las hembras tienen voces distintas.",
    emoji: "🦉", imageId: 4,
  },
  {
    id: "sp-005", num: "005",
    name: "Gallinazo Negro", scientificName: "Coragyps atratus",
    type: "Ave",
    wetlands: ["CORDOBA", "SANTA_MARIA", "JABOQUE", "JUAN_AMARILLO", "LA_CONEJERA"],
    rarity: "Común",
    description: "Son vitales para el medio ambiente, al comer animales muertos previenen la propagación de plagas.",
    emoji: "🦅", imageId: 5,
  },
  {
    id: "sp-006", num: "006",
    name: "Zarigüeya Andina", scientificName: "Didelphis pernigra",
    type: "Mamífero",
    wetlands: ["LA_CONEJERA", "TIBANICA", "JABOQUE", "TORCA_GUAYMARAL", "CORDOBA"],
    rarity: "Poco Común",
    description: "Son los únicos marsupiales que viven en Colombia.",
    emoji: "🐀", imageId: 6,
  },
  {
    id: "sp-007", num: "007",
    name: "Luciérnaga", scientificName: "Lampyris noctiluca",
    type: "Insecto",
    wetlands: ["TORCA_GUAYMARAL", "TIBANICA"],
    rarity: "Raro",
    description: "Cada especie tiene su propio patrón de destellos de luz, funcionando como un idioma de luces único.",
    emoji: "✨", imageId: 7,
  },
  {
    id: "sp-008", num: "008",
    name: "Pigua", scientificName: "Milvago chimachima",
    type: "Ave",
    wetlands: ["MEANDRO_DEL_SAY", "LA_CONEJERA"],
    rarity: "Poco Común",
    description: "Su nombre proviene de su canto, suena como 'piii-gua, piii-gua'.",
    emoji: "🦆", imageId: 8,
  },
  {
    id: "sp-009", num: "009",
    name: "Murciélago Frugívoro", scientificName: "Sturnira ludovici",
    type: "Mamífero",
    wetlands: ["LA_CONEJERA", "TORCA_GUAYMARAL"],
    rarity: "Raro",
    description: "Son esenciales para los ecosistemas, porque dispersan semillas y polinizan plantas tropicales al comer frutas y néctar.",
    emoji: "🦇", imageId: 9,
  },
  {
    id: "sp-010", num: "010",
    name: "Pez Capitán de la Sabana", scientificName: "Eremophilus mutisii",
    type: "Pez",
    wetlands: ["LA_CONEJERA"],
    rarity: "Legendario",
    description: "Es un pez bentónico (vive en el fondo) que juega un papel clave en el ecosistema, manteniendo limpia y saludable el agua.",
    emoji: "🐟", imageId: 10,
  },
];
