import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";

const MainLayout=styled.div`
  padding:2rem ;
  background:#ededed ;
`

const Projects = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
export default Projects
