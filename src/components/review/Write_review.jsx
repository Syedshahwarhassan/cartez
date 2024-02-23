

const Write_review = () => {
  return (
    <div>
      <div className="write-review" id="write-review">
        <h1 className="text-center m-4">Write Review</h1>
        <label className="review-title">
          Title:
          <br />
          <input
            type="text"
            required
            placeholder="title of  your review"
            name="value"
       
          />
        </label>
        <br />
        <label className="review-text">
          Review:
          <br />
          <textarea
            rows={"5"}
            required
            cols={"100"}
            placeholder="your Review here...."
            name="text"
          
          ></textarea>
        </label>
        <br />
        <label className="review-name">
          {" "}
          User Name:
          <br />
          <input
            type="text"
            required
        
            placeholder="Your Name for Display"
            name="name"
          />
        </label>
        <br />
        <button className="review-btn" >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Write_review;
