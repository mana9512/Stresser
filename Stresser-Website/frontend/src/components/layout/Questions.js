import React, { Fragment } from "react";

const Questions = () => {
  const quemap = [
    ["I found it hard to wind down.", "s", undefined],
    ["I was aware of dryness of my mouth", "a", undefined],
  ];
  const userScores = {
    d: 0,
    a: 0,
    s: 0,
  };
  const changeValue = (index, value) => {
    userScores[quemap[index][1]] += value;
    console.log(userScores);
  };
  return (
    <Fragment>
      {/* <div>hi</div> */}
      <div>
        {quemap.map((value, index) => {
          return (
            <div key={index}>
              {value[0]}
              <label>
                <input
                  type="radio"
                  name={index}
                  onChange={changeValue(index, 0)}
                ></input>
              </label>
              <label>
                <input
                  type="radio"
                  name={index}
                  onChange={changeValue(index, 1)}
                ></input>
              </label>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Questions;
