// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderView:React.FC = () => {

    return (
      <header>
        <div>
          <Link to={{ pathname: `/institutions/`}}>
            <h1>Financial Institution Finder</h1>
          </Link>
        </div>
      </header>
     );
 }

 export default HeaderView;