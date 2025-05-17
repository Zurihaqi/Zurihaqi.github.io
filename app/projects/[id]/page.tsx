import ProjectDetails from "@/components/project-details";
import projectData from "@/data/projects.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectData.map((project) => ({ id: project.id.toString() }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const project = projectData.find((project) => project.id.toString() === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
