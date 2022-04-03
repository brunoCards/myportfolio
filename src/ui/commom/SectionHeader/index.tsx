import React from "react";
import {
  CustomSectionHeader,
  CustomSectionHeaderTitle,
  CustomSectionHeaderSubTitle,
  CustomSectionFunnyText,
} from "./styles";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  funnyText: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  funnyText,
  className,
}: SectionHeaderProps) {
  return (
    <React.Fragment>
      <CustomSectionHeader>
        <CustomSectionHeaderTitle>{title}</CustomSectionHeaderTitle>
        <CustomSectionHeaderSubTitle>{subtitle}</CustomSectionHeaderSubTitle>
        <CustomSectionFunnyText>{funnyText}</CustomSectionFunnyText>
      </CustomSectionHeader>
    </React.Fragment>
  );
}
