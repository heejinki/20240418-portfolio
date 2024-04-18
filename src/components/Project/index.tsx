import { DataProps } from "@/types";

import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

const Project = ({ project }: Pick<DataProps, "project">) => {
  return (
    <>
      <div>
        <SectionTitle>Team Project</SectionTitle>
        <div className="flex flex-col gap-24">
          {[...project]
            .reverse()
            .filter((project) => project.isTeam)
            .map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Project;
