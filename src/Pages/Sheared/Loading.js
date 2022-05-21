import React from 'react';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const Loading = ({loading,color}) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
 
    return (
      <div className="sweet-loading">
  
        <RingLoader color={color} loading={loading} css={override} size={150} />
      </div>
    );
  
};

export default Loading;