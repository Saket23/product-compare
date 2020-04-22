import { createSelector } from "reselect";
import { getData, isDataLoadedSelector } from "./getData";

function createDropdownData(data, isDataLoaded) {
  let array = [];
  if (isDataLoaded) {
    const titles = data.products.compareSummary.titles;
    for (let t in titles) {
      let obj = {};
      obj["id"] = t;
      obj["title"] = titles[t].title;
      obj["subtitle"] = titles[t].subtitle;
      array.push(obj);
    }
  }
  return array;
}

export const createDropdownDataSelector = createSelector(
  getData,
  isDataLoadedSelector,
  createDropdownData
);
