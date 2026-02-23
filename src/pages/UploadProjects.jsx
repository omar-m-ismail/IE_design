import React from "react";
import  "../uploads.css";

const UploadProj = () => {
  return (
    <div className="upload_page">
      <form action="http://localhost:8000/upload-project/" method="post" encType="multipart/form-data">
      <div className="horizontal">
        <div className="storage">
                <input type="text" name="title" placeholder="Project title" required/>
                <input type="file" name="file" placeholder="Project thumbnail" className="image" required       onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const img = document.getElementById("img-preview");
            img.src = reader.result;
            img.style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      }}
    />
    </div>
 <div className="img_storage">
    <img id="img-preview" alt="Preview" style={{ display: "none" }} />
    </div>
    </div>
                <input type="text" name="budget" placeholder="Project budget"/>
                <input type="text" name="status" placeholder="Project status"/>
                <input type="text" name="location" placeholder="Project location" required/>
                <input type="text" name="location" placeholder="Project scope" />

        <textarea name="description" placeholder="Project description" required></textarea>


  <button type="submit">Upload</button>
</form>
    

    </div>
  );
};

export default UploadProj;
