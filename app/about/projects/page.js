const ProjectsPage = async () => {

    const response = await fetch('http://localhost:3001/repos' , {cache:'no-store'})
    const repos = await response.json()
  
  return (
    <div className='p-20'>
        <h1 className="text-center text-4xl text-white">Projects</h1>
        <ul>
            {repos.map(repo => (
                <li key={repo.id}>
                    <div>{repo.title}</div>
                    <div>{repo.description}</div>
                    <div>{repo.stargazers_count}</div>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default ProjectsPage