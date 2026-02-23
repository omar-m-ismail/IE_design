import React from "react";
import  "../uploads.css";

const Addmember = () => {
  return (
    <div className="upload_page">
      <form action="http://localhost:8000/upload-team/" method="post" encType="multipart/form-data">
            <div className="horizontal">
        <div className="storage">
                <input type="text" name="name" placeholder="member name" required/>
                <input type="file" name="file" placeholder="member profile picture" className="image" required       onChange={(e) => {
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
        <input
          type="text"
          name="email"
          placeholder="member email"
          required
        />
                <input
          type="text"
          name="sallery"
          placeholder="member sallery"
          required
        />

        <textarea
          name="position"
          placeholder="member position"
          required
        ></textarea>

        <input type="file" name="file" placeholder="member image" required />
  <button type="submit">Upload</button>
</form>
    

    </div>
  );
};

export default Addmember
;