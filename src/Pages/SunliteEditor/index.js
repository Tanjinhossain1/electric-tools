import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunliteEditor = () => {
  const editor = useRef(); 

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const [theData, setTheData] = useState('')

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
    console.log("SunEditor", sunEditor);
  };

  const handleChange = (content) => {
    setTheData(content)
    console.log("content", content);
  }; 

  console.log("editor", editor);
//   const handleImageUploadBefore = (files, info, uploadHandler) =>{
//     // uploadHandler is a function
// 	console.log('this is the file ', files, info)
// }

const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
	console.log('this is handle image upload',targetImgElement, index, state, imageInfo, remainingFilesCount)
}

  const bottomList = [
    "undo",
    "redo",
    "font",
    "fontSize",
    "fontColor",
    "hiliteColor",
    "bold",
    "italic",
    "list",
    "underline",
    "image",
    "blockquote",
    "link",
    "video",
    "audio",
    "paragraphStyle",
    "table",
    "template",
    "textStyle",
    "formatBlock",
    "hiliteColor",
    "horizontalRule",
    "lineHeight",
  ];
  
  return (
    <div>
      <SunEditor 
      // onImageUploadBefore={handleImageUploadBefore}
      onImageUpload={handleImageUpload}

        onChange={handleChange}  
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          minHeight: "300px", 
          buttonList: [bottomList],
          colorList: [
            [
              "#ccc",
              "#dedede",
              "OrangeRed",
              "Orange",
              "RoyalBlue", 
              "SaddleBrown"
            ],
          ],
        }}
      />  
      <div
      dangerouslySetInnerHTML={{__html: theData}}
    />     
    </div>
  );
};
export default SunliteEditor;
