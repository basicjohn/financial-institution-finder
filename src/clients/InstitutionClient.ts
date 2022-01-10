// import ApiInstitution from "../models/ApiInstitution";

import axios from "axios";

class InstitutionClient {
// GET /institutions - returns a list of institutions

  public static async search(searchQuery: string): Promise<any>{
    const api = axios.create({
      baseURL: "https://banks.data.fdic.gov/api/"
    });
    const response = api
      .get("/institutions", {
        params: {
          search: "name:{$searchQuery}",
          fields: "ZIP,OFFDOM,CITY,COUNTY,STNAME,STALP,NAME,ACTIVE,CERT,CBSA,ASSET,NETINC,DEP,DEPDOM,ROE,ROA,DATEUPDT,OFFICES",
          sort_by: "OFFICES",
          sort_order: "DESC",
          format:  "json"
        }
      })
      .then ((res: any) => {
        console.log(res.data);
        return res.data;
      })
      // .then((res: any) => {
      //   return res;
      // })
      .catch((err: Error) => {
        alert(err);
      });
    return response;
  };
}

export default InstitutionClient;