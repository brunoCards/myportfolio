//#region react
import React from "react";
//#endregion

//#region interfaces
import { IProject } from "./IProject";
//#endregion

//#region css modules
import gridCardsStyles from "./GridCards.module.css";
//#endregion

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
      <div className={gridCardsStyles.gridCardsContainer}>
        <React.Fragment>
          {projectsList.map((project: IProject, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className={gridCardsStyles.card}>
                  {project.title}
                  {project.description}
                  {project.thumbnail}
                  {project.images}
                </div>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}
