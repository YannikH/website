import { createBoolean, createMultipleChoice } from "./QuestionGenerators";
import { BaseSystemProps, Guidance, QuizConfiguration, System } from "./types";


export type SAM = BaseSystemProps & {
  natoNum: string,
  natoName: string,
  range: string,
  alt: string,
  guidance: Guidance,
  radarName: string,
  missileDefense: boolean,
  additionalInformation: any,
  image: string
}

const createSAM = (
  natoNum: string,
  natoName: string,
  range: string,
  alt: string,
  guidance: Guidance,
  radarName: string,
  missileDefense: boolean,
  additionalInformation: any,
  image: string
): SAM => {
return {
  natoNum,
  natoName,
  range,
  alt,
  radarName,
  guidance,
  missileDefense,
  additionalInformation,
  image
} 
}

const samSystems = [
  createSAM("2", "Guideline", "55", "98", "Radar", "Fan Song", false, {remarks: "Rear Area Defense"}, "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg"),
  createSAM("3","Goa","28","65","Radar","Low Blow",false,"","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/S125_Neva_250_brPVO_VS%2C_september_01%2C_2012.jpg/1920px-S125_Neva_250_brPVO_VS%2C_september_01%2C_2012.jpg"),
  createSAM("4","Ganef","50","82","Radar","Pat Hand",false,"","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2P24_Krug_spb.jpg/1920px-2P24_Krug_spb.jpg"),
  createSAM("5","Gammon","300","131","Radar","Square Pair",false,"","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/ZRK_S-200V_2007_G1.jpg/1920px-ZRK_S-200V_2007_G1.jpg"),
  createSAM("6","Gainful","25","49","Radar","Straight Flush",false,"","https://upload.wikimedia.org/wikipedia/commons/a/a2/2P25_VS_2.jpg"),
  createSAM("10","Grumble","150","88","Radar","Flap Lid or Tombstone",true,"","https://upload.wikimedia.org/wikipedia/commons/e/e5/S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg"),
  createSAM("11/17/27","Gadfly/Grizzly","45","72","Radar","Snow Drift/Chairback",false,"","https://upload.wikimedia.org/wikipedia/commons/a/a8/Buk-M1-2_9A310M1-2.jpg"),
  createSAM("12A","Gladiator","75","82","Radar","Grill Pan",true,"","http://www.ausairpower.net/PVO-SV/9P83-TELAR-Deployed-MiroslavGyurosi-1S.jpg"),
  createSAM("12B","Giant","200","98","Radar","Grill Pan",false,"","https://www.globalsecurity.org/military/world/russia/images/s-300v-9a83-image01.jpg"),
  createSAM("13","Gopher","5","10","Infra-red","Snap Shot",false,"","https://upload.wikimedia.org/wikipedia/commons/0/01/9A35_combat_vehicle_9K35_Strela-10_-_TankBiathlon14part2-37.jpg"),
  createSAM("14","Gremlin","5","10","Infra-red","None",false,"","https://en.missilery.info/files/m/strela_3/strela-3.jpg"),
  createSAM("15","Gauntlet","12","33","Radar","Scrum Half",false,"","https://upload.wikimedia.org/wikipedia/commons/e/e4/Tor-M1_SAM_%282%29.jpg"),
  createSAM("19","Grison","20","33","Radar","Hot Shot",false,"","https://upload.wikimedia.org/wikipedia/commons/a/a9/VDay_Parade_Rehearsal_Moscow03.jpg"),
  createSAM("8", "Gecko", "15", "16", "Radar", "Land Roll", false, {remarks: "6 Wheeled vehicle"}, "https://upload.wikimedia.org/wikipedia/commons/7/70/ParkPatriot2015part8-28.jpg"),
  createSAM("9", "Gaskin", "4", "11", "Infra-red", "Flat Box A", false, {remarks: "BRDM-2 Chassis"}, "https://photo.weaponsystems.net/image/s-carousel/n-ad_spsam_sa9_m1.jpg/--/img/ws/ad_spsam_sa9_m1.jpg")
];

const samQuestions = {
  designation: {
    field: "natoNum",
    questionText: "what is the NATO designation of this system (SA-...)",
    generator: createMultipleChoice
  },
  name: {
    field: "natoName",
    questionText: "What is the NATO name for this system",
    generator: createMultipleChoice
  },
  range: {
    field: "range",
    questionText: "What is the maximum engagement range of this system (km)",
    generator: createMultipleChoice
  },
  alt: {
    field: "alt",
    questionText: "What is the maximum engagement altitude for this system (thousands ft)",
    generator: createMultipleChoice
  },
  guidance: {
    field: "guidance",
    questionText: "What type of guidance does this system use",
    generator: createMultipleChoice
  },
  radarName: {
    field: "radarName",
    questionText: "What type of radar is associated with this system",
    generator: createMultipleChoice
  },
  missileDefense: {
    field: "missileDefense",
    questionText: "Is this system capable of or designated for missile defense",
    generator: createBoolean
  },

};

export const samRecognition: QuizConfiguration = {
  title: "SAM Systems - basic recognition",
  description: "Quiz yourself on the NATO designations for Eastern SAMs",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Buk-M1-2_9A310M1-2.jpg",
  questions: [
    samQuestions.designation,
    samQuestions.name
  ],
  systems: samSystems,
};

export const samRanges: QuizConfiguration = {
  title: "SAM Systems - engagement ranges",
  description: "Quiz yourself on the engagement ranges for Eastern SAMs",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/VDay_Parade_Rehearsal_Moscow03.jpg",
  questions: [
    samQuestions.alt,
    samQuestions.range
  ],
  systems: samSystems
};

export const samCapabilities: QuizConfiguration = {
  title: "SAM Systems - capabilities",
  description: "What sensors do these SAMs use?",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/2P25_VS_2.jpg",
  questions: [
    samQuestions.guidance,
    samQuestions.missileDefense,
    samQuestions.radarName,
  ],
  systems: samSystems
};

export const samQuizConfiguration: QuizConfiguration = {
  title: "SAM Systems - everything mixed",
  description: "Static and mobile SAM systems",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg",
  questions: [
    {
      field: "natoNum",
      questionText: "what is the NATO designation of this system (SA-...)",
      generator: createMultipleChoice
    },
    {
      field: "natoName",
      questionText: "What is the NATO name for this system",
      generator: createMultipleChoice
    },
    {
      field: "range",
      questionText: "What is the maximum engagement range of this system (km)",
      generator: createMultipleChoice
    },
    {
      field: "alt",
      questionText: "What is the maximum engagement altitude for this system (thousands ft)",
      generator: createMultipleChoice
    },
    {
      field: "guidance",
      questionText: "What type of guidance does this system use",
      generator: createMultipleChoice
    },
    {
      field: "radarName",
      questionText: "What type of radar is associated with this system",
      generator: createMultipleChoice
    },
    {
      field: "missileDefense",
      questionText: "Is this system capable of or designated for missile defense",
      generator: createBoolean
    }
  ],
  systems: samSystems
};
