import {createRef} from 'react';
import InstitutionClient from '../clients/InstitutionClient';


export const _institutionRef: any = createRef();

export const _onSubmit = async (text: string) => {
  return await InstitutionClient.search(text);
};
