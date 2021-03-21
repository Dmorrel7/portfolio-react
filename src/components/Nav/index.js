import React from "react";


function Nav(props) {
  const {section, sectionSelected, setSectionSelected} = props;



  return (
    <header className="flex-row px-1 header-nav">
      <h2>
        <a data-testid="link" href="/">
          Dalton Morrel
        </a>
      </h2>
      <nav>
        <ul className="flex-row header-nav">
        {section.map((sec) => (
                        <li className={`${sec === sectionSelected && 'navActive'}`}>
                            <span onClick={() => {
                                setSectionSelected(sec)
                            }}>
                                {sec}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
    </header>
  );
}

export default Nav;