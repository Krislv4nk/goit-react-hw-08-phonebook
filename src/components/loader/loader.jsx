import React from "react";
import { Hourglass } from 'react-loader-spinner';
import css from 'components/loader/loader.module.css';
 

export const Loader = ({ isLoading }) => {

  return (
      
      <div className={css.loader}>
      {isLoading && (
        <Hourglass
  visible={true}
  height="180"
  width="180"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
      )}
    </div>);
  
}