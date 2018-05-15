import React from 'react';
import { Item } from './Item';

export const Main = () => {
    let loginInfo = '';
    if (sessionStorage.getItem('name_first')) {
        loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
    } else {
        loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
    }
    return (
        <div>
        {loginInfo}
        <div className="home_page">
          <header className="top_header" >
            <h1>C K M</h1>
            <pre className="tab">P  H  O  T  O  G  R  A  P  H  Y</pre>
          </header>
          <nav className="top_menu">
            <ul>
              <li>HOME</li>
              <li>GALLERY</li>
              <li>PICTURE</li>
            </ul>
          </nav>
          <div className="new_div">
            <aside className="the_aside">
              <h4 className="words">Search</h4>
              <input type="text" />
              <br />
              <br />
              <br />
              <p className="words">Color</p>
              <input type="checkbox" />
              <p className="words">Design</p>
              <input type="checkbox" />
              <p className="words">Author</p>
              <input type="checkbox" />
              <p className="words">Painting</p>
              <input type="checkbox" />
              <p className="words">Shape</p>
              <input type="checkbox" />
              <br />
              <br />
              <div className="filter-btn"><a>Filter</a></div>
            </aside>
            <section className="main_section">
              <article>
                  {/* Returns map of 1-15 */}
                  {Array.apply(null, {length: 15}).map(Function.call, Number).map((r) => {
                      return(
                          <Item
                              name={"pic-"+(r+1)+" pic"}
                              desc="description"
                          />
                      )
                  })}
              </article>
            </section>
          </div>
          <footer className="the_footer">
            © Copyright Lu Yuan Ting 2018
          </footer>
        </div>
        </div>
	
    )
}