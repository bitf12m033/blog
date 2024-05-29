import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";


const ProjectsPage = async () => {

    const response = await fetch('http://localhost:3001/repos' , {cache:'no-store'})
    const repos = await response.json()
  
  return (
    <div>
        <h1 className="mb-8 text-xl text-white">Projects</h1>
        <div className="mb-8">Hello, this is the list of my repos!</div>

        <ErrorBoundary fallback={<div>Cannnot fetch projects currently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ProjectsPage