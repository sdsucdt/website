import React from 'react';
import CDTLink from '../utils/CDTLink';
import companyData from '../content/companies.json';

const Companies = (): JSX.Element => {
  return (
    <div>
      <div className="pt-20 grid grid-cols-6 max-w-6xl justify-center mx-auto">
        {companyData.companies.map((company) => {
          return (
            <CDTLink key={company.alt} to={company.link}>
              {company.alt}
            </CDTLink>
          );
        })}
      </div>
      <CDTLink className="pt-5 pb-10 text-center" internal to="/contact">
        Find out why companies love us →
      </CDTLink>
    </div>
  );
};

export default Companies;
