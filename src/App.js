import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";

import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>deliciousss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two";
  font-style: italic;
  color: #000;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

//dasax25276@viemery.com
//128fc79eacf44791bcb6df88c4777ea2

//sayor34587@viemery.com
//52895d206faa4277b0147b15d68be177
