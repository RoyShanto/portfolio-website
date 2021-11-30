import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./myData.json')
            .then(req => req.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="pt-2">
            <h1>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        </div>
    );
};

export default Projects;