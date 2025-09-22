import type React from "react";
import { Header } from "../../components/Header";

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {
  return <>
    <Header />
    {children}
  </>
}