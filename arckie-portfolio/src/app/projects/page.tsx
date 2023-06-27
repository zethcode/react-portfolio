const getProjectsData = async () => {
    const dbURL = "https://my-json-server.typicode.com/zethcode/react-portfolio";
    const response = await fetch(dbURL + "/projects");
    return response.json();
}

export default async function Projects() {
    const projects = await getProjectsData();

    return (
        <div>
            <h2>This is the about page</h2>
            {projects.map((project: any) => {
                return <h2> {project.title} </h2>
            })}
        </div>
    )
}