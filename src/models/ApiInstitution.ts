import ApiInstitutionData from "./ApiInstitutionData";
import ApiHighlight from "./ApiHighlight";

export default interface ApiInstitution {
  data: ApiInstitutionData;
  score: number;
  highlight: ApiHighlight;
}