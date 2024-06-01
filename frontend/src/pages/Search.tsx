// import { useState } from "react"; 

// function Search() {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [imageSrc, setImageSrc] = useState(null);
  
//     // const handleImageUpload = (event) => {
//     //   if (event.target.files) {
//     //     const file = event.target.files[0];
//     //     const reader = new FileReader();
//     //     reader.onload = (e) => {
//     //       setBody(body + `<img src="${e.target.result}" alt="Uploaded Image" />`);
//     //     };
//     //     reader.readAsDataURL(file);
//     //   }
//     // };
//     const handleImageUpload = (event) => {
//       const file = event.target.files[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageSrc(reader.result);
//       };
//       reader.readAsDataURL(file);
//     };
  
  
//     const handleDocumentUpload = (event) => {
//       if (event.target.files) {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           setBody(body + `<a href="${e.target.result}" download="${file.name}">${file.name}</a>`);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
  
//     const handleLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//           const { latitude, longitude } = position.coords;
//           setBody(body + `<p>Location: ${latitude}, ${longitude}</p>`);
//         });
//       }
//     };
  
//     const handleSnapPicture = () => {
//       // This requires additional setup with getUserMedia API
//       // Leaving as a placeholder
//     };
  
//     return (
//       <div className="blog-input-page">
//         <h1>Create a New Blog Post</h1>
//         <div className="form-group">
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <br />
//         <div className="form-group">
//           <label htmlFor="body">Body:</label>
//           <textarea
//             id="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//           />
//         </div>

//         <br />

//         <br />

//         <div className="button-group">
           

//           <br />
//           <br />

//           <button onClick={handleSnapPicture}>Snap Picture</button>

//           <br />
//           <br />

//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.txt"
//             onChange={handleDocumentUpload}
//             hidden
//             id="documentUpload"
//           />
//           <button onClick={() => document.getElementById('documentUpload').click()}>
//             Upload Document
//           </button>
//           <br />
//           <br />

//           <button onClick={handleLocation}>Add Location</button>
//           <br />
//         </div>
//         <div className="options-group">
//           {/* Additional options to be implemented */}
//         </div>
//       </div>
//     );
// }

// export default Search
// import React, { useState } from 'react';


// const BlogInputPage = () => {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [imageSrc, setImageSrc] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageSrc(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

  

//   return (
//     <div className="blog-input-page">
//       <h1>Create a Blog Post</h1>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter the title"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="body">Body</label>
//         <textarea
//           id="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           placeholder="Enter the body"
//         />
//       </div>
//       <div className="form-group">
//       {imageSrc && (
//         <div className="image-preview">
//           <h3>Image Preview</h3>
//           <img src={imageSrc} alt="Uploaded preview" />
//         </div>
//       )}
//         <label htmlFor="imageUpload">Upload an Image</label>
//         <input
//           type="file"
//           id="imageUpload"
//           accept="image/*"
//           onChange={handleImageUpload}
//         ></input> 
//       </div>
      
     
//     </div>
//   );
// };

// export default BlogInputPage;
import React from 'react'

export default function Search() {
  return (
    <div>Search</div>
  )
}
