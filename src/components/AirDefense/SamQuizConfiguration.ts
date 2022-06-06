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

export const samQuizConfiguration: QuizConfiguration = {
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
  systems: [
    createSAM("2", "Guideline", "55", "98", "Radar", "Fan Song", false, {remarks: "Rear Area Defense"}, "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg"),
    createSAM("8", "Gecko", "15", "16", "Radar", "Land Roll", false, {remarks: "6 Wheeled vehicle"}, "https://upload.wikimedia.org/wikipedia/commons/7/70/ParkPatriot2015part8-28.jpg"),
    createSAM("9", "Gaskin", "4", "11", "Infra-red", "Flat Box A", false, {remarks: "BRDM-2 Chassis"}, "https://photo.weaponsystems.net/image/s-carousel/n-ad_spsam_sa9_m1.jpg/--/img/ws/ad_spsam_sa9_m1.jpg")
  ]
};
