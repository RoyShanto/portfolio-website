import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { projectId } = useParams();
    console.log(projectId)
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('../myData.json')
            .then(req => req.json())
            .then(data => setProjects(data))
    }, [])
    const project = projects.find(product => product.id === projectId)
    console.log(project?.img1);


    return (
        <div className="row">
            <h1 className="mb-3">{project?.projectName}</h1>
            <div className="col-md-6 w-50 p-3 border-end">
                <div className="card">
                    <img src={'.' + project?.img1} className="border border-warning border-2 m-1" alt="..." />
                    <img src={'.' + project?.img2} className="border border-warning border-2 m-1" alt="..." />
                    <img src={'.' + project?.img3} className="border border-warning border-2 m-1" alt="..." />
                </div>
            </div>
            <div className="col-md-6 text-start mt-3">
                <h4>Description: </h4>
                <p>{project?.shortDescription}</p>
                <h4>Bullet Points</h4>
                <ul>
                    <li>{project?.bulletPoint1}</li>
                    <li>{project?.bulletPoint2}</li>
                    <li>{project?.bulletPoint3}</li>
                    <li>{project?.bulletPoint4}</li>
                    <li>{project?.bulletPoint5}</li>
                </ul>
                <button type="button" class="btn btn-primary"><a href={project?.liveSite} target="_blank" className="text-decoration-none" style={{ color: 'white' }}>Live Site</a></button> &nbsp;
                <button type="button" class="btn btn-primary"><a href={project?.codeLink} target="_blank" className="text-decoration-none" style={{ color: 'white' }}>Code Link</a></button>
            </div>
        </div>
    );
};

export default ProjectDetails;