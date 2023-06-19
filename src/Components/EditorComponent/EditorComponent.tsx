//@ts-nocheck
import React, { useEffect, useRef } from 'react'
import * as d3 from "d3";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header"
import Image from "@editorjs/image"
import List from "@editorjs/list"
import Embed from '@editorjs/embed';
import Code from '@editorjs/code';
import BarChart from '../BarChart/BarChart';

const EditorComponent = () => {

  const ejInstance = useRef();

  const DEFAULT_INITIAL_DATA =  {
    "time": new Date().getTime(),

    // "blocks": [
    //   {
    //     "type": "header",
    //     "data": {
    //       "text": "This is my awesome editor!",
    //       "level": 1
    //     }
    //   },
    // ]
}

class SimpleImage {
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  render(){
    return document.createElement('input');
  }

  save(blockContent){
    return {
      url: blockContent.value
    }
  }
}

  const initEditor = () => {
    const editor = new EditorJS({
       holder: 'editorjs',
       onReady: () => {
         ejInstance.current = editor;
       },
       autofocus: true,
       data: DEFAULT_INITIAL_DATA,
       onChange: async () => {
         let content = await editor.saver.save();
         console.log(content);
       },
       tools: {
        header: Header,
        image: SimpleImage,
        list: List,
        code: Code,
        embed: Embed,
        new: BarChart
       }
     });
   };

   useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
   

  return (
     <div id='editorjs'></div>
  )
}

export default EditorComponent