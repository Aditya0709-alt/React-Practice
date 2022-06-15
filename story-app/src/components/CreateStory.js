import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

export const CreateStory = () => {
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [writer, setWriter] = useState('');
    const {createStory, story} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit= e =>{
        e.preventDefault();
        const newStory ={
            id: story.length+1,
            heading,
            subHeading,
            description,
            category,
            writer
        }
        createStory(newStory);
        history.push("/");
    }
    return (
        <Fragment>
            <div className="container Storyedit">
                <h3>Create Story</h3>
                <br />
                <br />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Story Heading</label>
                  <input type="text" className="form-control" id="heading" value={heading} onChange={(e) => setHeading(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Sub Heading</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={subHeading} onChange={(e) => setSubHeading(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Story Category</label>
                  <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Story Name</label>
                  <input type="text" className="form-control" id="author" value={writer} onChange={(e) => setWriter(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Save Story</button>
                <Link to='/'><button type="button" className="btn">Cancel</button></Link>
              </form>
            </div>
        </Fragment>
    )
}