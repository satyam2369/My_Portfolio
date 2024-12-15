import React from "react";
import "./hireForm.css";
function HireForm() {
  return (
    <div className="hire-form-main">
      <div className="hire-input-group">
        <div className="material-field">
          <input className="material-field-input" type="text" required />
          <label className="material-field-label">first name</label>
        </div>
        <div className="material-field">
          <input className="material-field-input" type="text" required />
          <label className="material-field-label">last name</label>
        </div>
      </div>
      <div className="hire-input-group">
        <div className="material-field">
          <input className="material-field-input" type="text" required />
          <div className="material-field-label">Email</div>
        </div>
        <div className="material-field">
          <input className="material-field-input" type="text" required />
          <label className="material-field-label">Company/Your name</label>
        </div>
        
      </div>
      <div className="material-field-file">
          <label for="file-upload" class="file-upload-label">
            Attachment (Optional)
          </label>
          <input id="file-upload" type="file" />
      </div>
      <div className="material-field">
        <textarea className="hire-text-area" placeholder="message" name="postContent" rows={4}  />
      </div>
      <button className="hire-form-submit-btn">Send</button>
    </div>
  );
}

export default HireForm;
