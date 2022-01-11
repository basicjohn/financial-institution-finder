import React, { useEffect } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, IColumn, CheckboxVisibility } from '@fluentui/react/lib/DetailsList';
import { iColumns } from '../utilities/InstitutionsTableColumns';
import ApiInstitution from '../models/ApiInstitution';
import InstitutionClient from '../clients/InstitutionClient';



const InstitutionList:React.FC = () => {
  let favoriteInstitutions = []
  let [institutions, setInstitutions] = React.useState<ApiInstitution[]>([]);
  const [state, setState] = React.useState({
    text: "",
    searchType: "Organization",
  })
  const _onSubmit = async (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string) => {
    setInstitutions = await InstitutionClient.search(text);
    ev.preventDefault();
  };



  return (
    <div className="ms-Grid container">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <h1>Institution List</h1>
          <hr/>
          <div>
            <form>
              <TextField
              label="Search:"
              name="Search" />
              <button type="submit" onChange={(
                  ev: React.ChangeEvent<HTMLInputElement>,
                  ) => _onSubmit(ev, state.text)}>Search</button>
            </form>
            <DetailsList
              items={institutions}
              columns={iColumns}
              layoutMode={DetailsListLayoutMode.justified}
              checkboxVisibility={CheckboxVisibility.hidden}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstitutionList;