import React from "react";
import  "../contact.css";

const Addmember = () => {
  return (
    <div className="upload-page">
      <form action="http://localhost:8000/upload-team/" method="post" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="member name"
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