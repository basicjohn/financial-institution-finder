import ApiInstitution from "../models/ApiInstitution";

import axios from "axios";

class InstitutionClient {
// GET /institutions - returns a list of institutions

  public static async search(searchQuery: string): Promise<any>{
    const api = axios.create({
      baseURL: "https://banks.data.fdic.gov/api"
    });
    const response = api
      .get("/institutions", {
        params: {
          search: "NAME:"+searchQuery,
          fields: "ZIP,OFFDOM,CITY,COUNTY,STNAME,STALP,NAME,ACTIVE,CERT,CBSA,ASSET,NETINC,DEP,DEPDOM,ROE,ROA,DATEUPDT,OFFICES",
          sort_by: "OFFICES",
          sort_order: "DESC",
        }
      })
      .then((res: any) => {
        return res.data;
      })
      .catch((err: Error) => {
        console.log(err);
        alert(err);
      });
    return response;
  };

}