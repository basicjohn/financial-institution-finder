import {IColumn} from '@fluentui/react/lib/DetailsList';
import { DefaultButton } from '@fluentui/react';
import { Link } from 'react-router-dom';

import ApiInstitution from '../models/ApiInstitution';
import {_institutionRef} from './tableHelpers';

const column1: IColumn = {
  key: '0',
  name: 'institution',
  fieldName: 'active',
  minWidth: 50,
  maxWidth: 80,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
  onRender: (institution: ApiInstitution) => {
    return <span title={ institution.data.active ? "Active" : "Inactive"}>{ institution.data.active ? "Active" : "Inactive"}</span>;
  }
}
const column2: IColumn = {
  key: '1',
  name: 'Institution',
  fieldName: 'name',
  minWidth: 50,
  maxWidth: 80,
  data: Boolean,
  isResizable: true,
  isCollapsible: true,
  onRender: (institution: ApiInstitution) => {
    return <h3 title={institution.data.name}><a href={institution.data.webaddr} target="blank">{institution.data.name}</a></h3>;
  }
}
const column3: IColumn = {
  key: '2',
  name: 'Federal Reserve ID',
  fieldName: 'fed',
  minWidth: 50,
  maxWidth: 80,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
  onRender: (institution: ApiInstitution) => {
    return <span title={institution.data.fed_rssd}>{institution.data.fed_rssd}</span>;
  }
}
const column4: IColumn = {
  key: '3',
  name: 'Area Name',
  fieldName: 'cbsa',
  minWidth: 50,
  maxWidth: 80,
  isSorted: true,
  isSortedDescending: false,
  sortAscendingAriaLabel: 'Sorted A to Z',
  sortDescendingAriaLabel: 'Sorted Z to A',
  data: 'string',
  onRender: (institution: ApiInstitution) => {
    return <span title={institution.data.cbsa}>{institution.data.cbsa}</span>;
  }
}
  const column5: IColumn = {
    key: '4',
    name: 'Total Deposits',
    fieldName: 'dep',
    minWidth: 50,
    maxWidth: 80,
    data: 'string',
    isResizable: true,
    isCollapsible: true,
    onRender: (institution: ApiInstitution) => {
      return <span>{institution.data.dep}</span>
    }
  }
  const column6: IColumn = {
    key: '5',
    name: 'Date Updated',
    fieldName: 'dateupdt',
    minWidth: 50,
    maxWidth: 80,
    data: 'string',
    isResizable: true,
    isCollapsible: true,
    onRender: (institution: ApiInstitution) => {
      return <span title={institution.data.dateupdt}>{institution.data.dateupdt}</span>
    }
  }
  const column7: IColumn = {
    key: '6',
    name: 'Favorite',
    fieldName: 'favorite',
    minWidth: 70,
    maxWidth: 70,
    data: 'string',
    onRender: (institution: ApiInstitution) => {
      // column for checkbox event listener to add to favorites
    }
  }
  const column8: IColumn = {
    key: '7',
    name: 'View Institution',
    fieldName: 'viewInstitution',
    minWidth: 70,
    maxWidth: 70,
    data: 'string',
    onRender: (institution: ApiInstitution) => {
      return (
        <DefaultButton>
          <Link ref={_institutionRef}  to={{ pathname: `/institutions/`+ institution.data.fed_rssd , state:{ selectedInstitution: institution.data.fed_rssd } }}>
            View Details
          </Link>
        </DefaultButton>
      )
    }
  }

export const  iColumns: IColumn[] = [
  column1, column2, column3, column4, column5, column6, column7, column8
];