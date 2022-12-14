import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import * as headerStyles from "./header.module.scss";

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata;

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title} >
          {title}
        </Link>
      </h1>
      <nav >
        <ul className={headerStyles.navList}>
          <li >
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li >
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;