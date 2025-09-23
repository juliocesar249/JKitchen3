import type React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {
  return <>
    <Header />
    {children}

    <Footer/>
  </>
}