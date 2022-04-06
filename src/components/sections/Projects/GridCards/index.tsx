import React from "react";
import { IProject } from "./IProject";
import { CustomCard, CustomGridCardsContainer } from "./styles";

interface IGridCardsProps {
  className?: string;
  projects?: IProject[];
}

const projectsList: IProject[] = [
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
  {
    title: "",
    description: "",
    thumbnail: "",
    images: ["", ""],
  },
];

export default function GridCards({ className, projects }: IGridCardsProps) {
  return (
    <React.Fragment>
      <CustomGridCardsContainer className={className}>
        <React.Fragment>
          {projectsList.map((project: IProject, index: number) => {
            return (
              <React.Fragment key={index}>
                <CustomCard>
                  {project.title}
                  {project.description}
                  {project.thumbnail}
                  {project.images}
                </CustomCard>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      </CustomGridCardsContainer>
    </React.Fragment>
  );
}
