import React from 'react';

const Project = (props) => {
    const project = props.project;
    return (
        <div className="col text-start">
            <div className="card h-100">
                <img src={project.img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.shortDescription}</p>
                </div>
                <div className="card-footer">
                    <a href={`/projectDetails/${project.id}`} className="text-decoration-none">View Details</a>
                </div>
            </div>
        </div >
    );
};

export default Project;