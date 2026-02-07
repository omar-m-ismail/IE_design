import React from "react";
import  "../contact.css";

const UploadProj = () => {
  return (
    <div className="upload-page">
      <form action="http://localhost:8000/upload-project/" method="post" encType="multipart/form-data">
        <input
          type="text"
          name="title"
          placeholder="Project title"
          required
        />
                        <input
          type="text"
          name="budget"
          placeholder="Project budget"

        />

                                <input
          type="text"
          name="status"
          placeholder="Project status"

        />
                <input
          type="text"
          name="location"
          placeholder="Project location"
          required
        />

        <textarea
          name="description"
          placeholder="Project description"
          required
        ></textarea>

        <input type="file" name="file" placeholder="Project thumbnail" required />
  <button type="submit">Upload</button>
</form>
    

    </div>
  );
};

export default UploadProj;
