import React from "react";

function Form({ handleInputChange, handleFormSubmit, q }) {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel" for="q">Book</label>
        <input className="form-control"
          value={q}
          type="text"
          name="q"
          placeholder="Ready Player One"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="submitBtn btn btn-danger" onClick={handleFormSubmit}>
        Search
      </button>
    </form>
  );
}

export default Form;
