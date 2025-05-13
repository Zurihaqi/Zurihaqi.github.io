import ProjectDetails from "@/components/project-details";
import projectData from "@/data/projects.json";
import { Project } from "@/types/types";

import { notFound } from "next/navigation";

interface ProjectData {
  [key: string]: Project;
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((key) => ({
    id: key.replace("project", ""),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const projectId = `project${id}`;
  const project =
    projectId in projectData ? (projectData as ProjectData)[projectId] : null;

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
