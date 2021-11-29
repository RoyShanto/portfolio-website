import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./myData.json')
            .then(req => req.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="container">
            <h1>All Projects</h1>
            <div className="row">
                {
                    projects.map(p =>
                        <div className="col-md-4">
                            <h3>{p.projectName}</h3>
                            <p>{p.shortDescription}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Projects;