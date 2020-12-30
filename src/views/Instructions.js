import React, { useState } from "react";

const Instructions = () => {
  return (
    <>
      <h5
        style={{
          color: "white",
        }}
      >
        Instructions
      </h5>
      <ol 
        style={{
          textAlign: "left",
        }}
      >
        <li>Build the model by selecting layers on the right</li>
        <li>Configure each layer by clicking on it in the model playground</li>
        <li>Once you have built your model, input the hyperparmeters on the left</li>
        <li>Finally, click "Download Code" to download the model's pytorch code</li>
      </ol>
    </>
  )
}

export default Instructions;
