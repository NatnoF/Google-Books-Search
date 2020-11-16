import React from "react";

function Form({ handleInputChange, handleFormSubmit, q }) {
  return (
    <form>
      <div className="form-group">
        <label for="q">Book</label>
        <input className="form-control"
          placeholder="Ready Player One"
          value={q}
          type="text"
          name="q"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-danger float-right" onClick={handleFormSubmit}>
        Search
      </button>
    </form>
  );
}

export default Form;
