import React from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 class TinyEditor extends React.Component {
   handleEditorChange = (content, editor) => {
     console.log('Content was updated:', content);
   }

   render() {
     return (
       <Editor
       apiKey="8d246zj3u78olcgquvf970rexzq4uxsqmzix6sroocmks5c6"
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={this.handleEditorChange}
       />
     );
   }
 }

 export default TinyEditor;