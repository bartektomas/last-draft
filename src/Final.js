import DraftJS from "draft-js";

import insertDataBlock from "./insertDataBlock"
import Media from "./components/Media"
import Editor from "./components/Editor"
import Icons from "./icons"
import * as Plugin from "./components/plugin"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import * as utils from "./utils"

const Final = {
  DraftJS: DraftJS,
  editorStateFromRaw: utils.editorStateFromRaw,
  editorStateToJSON: utils.editorStateToJSON,
  createTypeStrategy: utils.createTypeStrategy,
  insertDataBlock: insertDataBlock,
  Media: Media,
  Editor: Editor,
  Icons: Icons,
  Plugin: Plugin,
  Sidebar: Sidebar,
  Toolbar: Toolbar
}

module.exports = Final
