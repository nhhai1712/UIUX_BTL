import Nav from './Nav';

function Layout({children}) {
  return (
    <Nav>
        {children}
    </Nav>
  );
}

export default Layout;