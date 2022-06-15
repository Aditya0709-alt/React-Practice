import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const EditStory = route => {
  let history = useHistory();
  const { story, editStory } = useContext(GlobalContext);
  const [selectedStory, setSelectedStory] = useState({
    id: null,
    category: "",
    heading: "",
    description: "",
    subHeading: "",
    writer: ""
  });
  const currentStoryId = route.match.params.id;

  useEffect(() => {
    const storyId = currentStoryId;
    const selectedStory = story.find(x => x.id === parseInt(storyId));
    setSelectedStory(selectedStory);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (storyKey, val) =>
    setSelectedStory({ ...selectedStory, [storyKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    editStory(selectedStory);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container Storyedit">
        <h3>Edit Stories</h3>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Story Heading</label>
            <input
              type="text"
              className="form-control"
              value={selectedStory.heading}
              onChange={e => handleOnChange("heading", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Sub Heading</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              value={selectedStory.subHeading}
              onChange={e => handleOnChange("subHeading", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={selectedStory.description}
              onChange={e => handleOnChange("description", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Story Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={selectedStory.category}
              onChange={e => handleOnChange("category", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Writer Name</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={selectedStory.writer}
              onChange={e => handleOnChange("author", e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Story
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};
