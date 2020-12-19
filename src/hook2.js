import React, { useState } from "react";

const tabArr = [
  {
    tab: "section1",
    content: "I'm section1"
  },

  {
    tab: "section2",
    content: "I'm section2"
  }
];

const useTab = (Initialtab, allTab) => {
  if (!allTab || !Array.isArray(allTab)) {
    return;
  }

  const [currentIndex, setcurrentIndex] = useState(Initialtab);

  return {
    currentItem: allTab[currentIndex],
    changeItem: setcurrentIndex
  };
};

function Hook2() {
  const { currentItem, changeItem } = useTab(0, tabArr);

  return (
    <div>
      {tabArr.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}

      <div>{currentItem.content}</div>
    </div>
  );
}

export default Hook2;