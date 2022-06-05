export type Guidance = "IR" | "RDR";
export type SAM = {
  natoNum: number,
  natoName: string,
  range: number,
  alt: number,
  guidance: Guidance,
  radarName: string,
  missileDefense: boolean,
  additionalInformation: any,
  image: string
}

const createSAM = (
    natoNum: number,
    natoName: string,
    range: number,
    alt: number,
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

export const SamSystems: Array<SAM> = [
  createSAM(2, "Guideline", 55, 98, "RDR", "Fan Song", false, {remarks: "Rear Area Defense"}, "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg"),
  createSAM(8, "Gecko", 15, 16, "RDR", "Land Roll", false, {remarks: "6 Wheeled vehicle"}, "https://upload.wikimedia.org/wikipedia/commons/7/70/ParkPatriot2015part8-28.jpg"),
  createSAM(9, "Gaskin", 4, 11, "IR", "Flat Box A", false, {remarks: "BRDM-2 Chassis"}, "https://photo.weaponsystems.net/image/s-carousel/n-ad_spsam_sa9_m1.jpg/--/img/ws/ad_spsam_sa9_m1.jpg")
];