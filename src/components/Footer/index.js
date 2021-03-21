import React from 'react';
import LinkedIn from '../../assets/images/iconmonstr-linkedin-3.svg';
import Github from '../../assets/images/iconmonstr-github-1.svg';
function Footer() {
    return(
        <footer className="footer">
            <nav>
                <a href="https://www.linkedin.com/in/dalton-morrel-2b818b172/" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="github" style={{width:"40px", height:"40px"}} />
                </a>
                <a href="https://github.com/Dmorrel7" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" style={{width:"40px", height:"40px"}} />
                </a>
            </nav>
            
        </footer>
    );
}

export default Footer; 