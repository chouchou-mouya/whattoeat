import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";

const MainLayout=styled.div`
  padding:2rem ;
  background:#ccc ;
`

const Projects = () => {
  return (
    <MainLayout>
      {/* <ul className="secondary-navigation">
        <NavLink to="food_list">
          <li>食物清單</li>
        </NavLink>
        <NavLink to="user">
          <li>User 2</li>
        </NavLink>
        <NavLink to="/">
          <li>return</li>
        </NavLink>
      </ul> */}
      <Outlet />
    </MainLayout>
  )
}
export default Projects
