import {listItems,mindLists,skillItems} from "json-loader!yaml-loader!~/contents/index.yml"

export const state = () => ({
  listItems,mindLists,skillItems
})
