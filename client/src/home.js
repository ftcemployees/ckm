import React from 'react';


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
                <div className="pic-1 pic">
                  <div className="text-wrapper">
                    <p className="description">I'm cool description</p>
                  </div>
                </div>
                <div className="pic-2 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-3 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-4 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-5 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-6 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-7 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-8 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-9 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-10 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-11 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-12 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-13 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-14 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
                <div className="pic-15 pic">
                  <div className="text-wrapper">
                    <p className="description">description</p>
                  </div>
                </div>
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