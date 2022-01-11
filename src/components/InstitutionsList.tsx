import React, { createRef, useState } from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, IColumn, CheckboxVisibility } from '@fluentui/react/lib/DetailsList';
import { iColumns } from '../utilities/InstitutionsTableColumns';
import ApiInstitution from '../models/ApiInstitution';
import InstitutionClient from '../clients/InstitutionClient';



const InstitutionList:React.FC = () => {
  const formRef = createRef<HTMLFormElement>()
  let favoriteInstitutions = useState<ApiInstitution[]>([]);
  let [institutions, setInstitutions] = useState<ApiInstitution[]>([]);
  let [search , setSearch] = useState<string>("");

  const handleChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue: any) =>{
    const { value } = ev.currentTarget;
    setSearch(value);
  }

  const handleSubmit = async () => {
    await InstitutionClient.search(search);
  };

  return (
    <div className="ms-Grid container">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
          <h1>Institution List</h1>
          <hr/>
          <div>
            <form
              ref={formRef}
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <TextField label="Search:" type="text" name="Search" value={search} onChange={handleChangeText} />
              <input type="submit" value="Search" />
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