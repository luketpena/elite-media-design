import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-scroll";

/*-----< Styling >-----*/
const ContainerDesktop = styled.nav`
  
  font-family: var(--font-main);
  line-height: 64px;
  height: 64px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0; 
  padding-left: 16px;
  z-index: 10;

  background-color: rgba(0,47,108, ${props=>(props.scrollY>props.point? '.7' : '0')});
  backdrop-filter: blur(${props=>(props.scrollY>props.point? '16' : '0')}px);
  box-shadow: 0 4px 32px 2px rgba(0,0,0,${props=>(props.scrollY>props.point? '.3' : '0')});
  
  overflow: hidden;

  transition: all .5s;

  nav .menu-item {
    margin: 0;
    padding: 0;
  }
  
  nav .menu-item {
    display: inline;
    margin-right: 16px;
    color: white;
    transition: all .2s;
    border-bottom: 0px solid rgba(255,255,255,0);
    font-size: 1.25em;
    cursor: pointer;
  }
  
  nav .menu-item:hover {
    border-bottom: 2px solid rgba(255,255,255,1);
  }
`;

const ContainerMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0; 
  z-index: 10;
  width: ${props=>(props.active? '100%' : '48px')};
  height: 100vh;
  transition: width .5s;

  .icon {
    color: white;
    font-size: 2em;
    margin: 8px;
    position: absolute;
    text-align: right;
    top: 0;
    right: 0;
    z-index: 11;
  }

  .menu-list {
    background-color: rgba(0,47,108, .9);
    backdrop-filter: blur(16px);
    height: 100%;  
    position: relative;
    transition: right .5s;
    right: ${props=>(props.active? '0' : '48')}px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .menu-item {
    font-family: var(--font-main);
    font-size: 1.25em;
    display: block;
    background-color: rgba(255,255,255,.1);
    position: relative;
    right: 0;
    padding: 16px;
    margin: 4px 0;
    color: white;
    font-size: 1.2em;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

/*-----< Static Variables >-----*/
const menuList = [
  {name: 'Top', href: 'top'},
  {name: 'About', href: 'about'},
  {name: 'Services', href: 'services'},
  {name: 'Social Media', href: 'instagram'},
  {name: 'Contact', href: 'contact'}
]

/*-----< Component Function >-----*/
export default function Menu() {

  let [scrollY, setScrollY] = useState(0);
  let [mount, setMount] = useState(false);
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let [menuActive, setMenuActive] = useState(false);

  useEffect(()=>{
    if (!mount) {
      setMount(true);
      window.addEventListener('scroll',handleScroll,true);
      window.addEventListener('resize',()=>setScreenWidth(window.innerWidth));
    }
  },[scrollY, mount]);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  function renderDesktopMenu() {
    return menuList.map( (item,i)=>{
      return <Link
          key={i}
          className="menu-item"
          activeClass="active"
          to={item.href}
          spy={true}
          smooth={true}
          offset={-64}
          duration= {1000}
        >
        {item.name}
      </Link>
    })
  }

  function renderMobileMenu() {
    return menuList.map( (item,i)=>{
      return <Link
      key={i}
      className="menu-item"
      activeClass="active"
      to={item.href}
      spy={true}
      smooth={true}
      offset={-64}
      duration= {1000}
      onClick={()=>setMenuActive(false)}
    >
    {item.name}
  </Link>
    })
  }

  function renderMenu() {
    if (screenWidth>700) {
      return (
        <ContainerDesktop id="menu" scrollY={scrollY} point={window.innerHeight*.1}>
          <nav>
              {renderDesktopMenu()}
          </nav>
        </ContainerDesktop>
      )
    } else {
      return (
        <ContainerMobile 
          active={menuActive}
          scrollY={scrollY} 
          point={0}
        >
          <FontAwesomeIcon 
            className="icon" 
            icon={(menuActive? faTimes : faBars)}
            onClick={()=>setMenuActive(!menuActive)}
          />
          <div className="menu-list">
            {renderMobileMenu()}
          </div>
        </ContainerMobile>
      )
    }
  }

  return (
    <>
      {renderMenu()}
    </>
  )
}