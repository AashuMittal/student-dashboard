import React from "react";
import img from "./img.jpg";
import img1 from "./img1.jfif"
import man from "./man..jfif"
import runway from "./runway.jfif"
import book from "./book.jfif"
import music from "./music.jpg"
const About = () => {
    return (
        <div className="container text-center">
            <h1>About Us</h1>
            <div className="row">
                <div className="col-sm-4  card-body">
                    <img src={img} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art
                    customer service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
                <div className="col-sm-4 card-body">
                    <img src={img1} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate extensible testing procedures for reliable supply chains. Dynamically innovate resource-leveling customer service for service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
                <div className="col-sm-4 card-body">
                    <img src={man} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate  customer service for state of the art
                    customer service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 card-body">
                    <img src={runway} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate reliable supply chains. Dynamically innovate resource-leveling customer service for state of the art
                    customer service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
                <div className="col-sm-4 card-body">
                    <img src={book} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate extensible testing procedures for. Dynamically innovate resource-leveling customer service for state of the art
                    customer service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
                <div className="col-sm-4 card-body">
                    <img src={music} width="300" height="200"></img>
                    <h6>Title Heading</h6>
                    <p style={{ fontStyle: "italic" }}>Holisticly predominate extensible testing. Dynamically innovate resource-leveling customer service for state of the art
                    customer service.</p>
                    <button class="btn btn-like mx-3 btn-secondary"><i class="fa fa-thumbs-up"></i>Like</button>
                    <button class="btn btn-success mx-3">Replies</button>
                </div>
            </div>
        </div>

    );
};

export default About;