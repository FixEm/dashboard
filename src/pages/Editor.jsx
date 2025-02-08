import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className='className="m-2 md:m-10 md:p-10 mt-24 p-2 rounded-3xl bg-white'>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
