import React from 'react';
import { Item } from './item';

export const Picture = ({match}) => {
    let loginInfo = '';
    if (sessionStorage.getItem('name_first')) {
        loginInfo = <div className="contact-btn"><a href="/login">Log out from {sessionStorage.getItem('name_first')}</a></div>;
    } else {
        loginInfo = <div className="contact-btn"><a href="/login">Login</a></div>;
    }
    return (
        <div>
            {loginInfo}

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

                    <section className="pic_main_section">
                        <p className ="picName">The name of picture</p><br/>
                        <article>
                            <p className = "arrow1"><a href="">&#8701;</a></p>

                            <img src={'img/' + match.params.id + '.jpg'} alt="1"/>
                            <p className = "arrow2"><a href="">&#8702;</a></p>
                            <br/>
                            <br/>
                            <br/>

                            <br/>
                            <p className ="picDescription"> Wind in a Box
                                BY TERRANCE HAYES
                                —after Lorca

                                I want to always sleep beneath a bright red blanket
                                of leaves. I want to never wear a coat of ice.
                                I want to learn to walk without blinking.

                                I want to outlive the turtle and the turtle’s father,
                                the stone. I want a mouth full of permissions

                                and a pink glistening bud. If the wildflower and ant hill
                                can return after sleeping each season, I want to walk
                                out of this house wearing nothing but wind.

                                I want to greet you, I want to wait for the bus with you
                                weighing less than a chill. I want to fight off the bolts

                                of gray lighting the alcoves and winding paths
                                of your hair. I want to fight off the damp nudgings
                                of snow. I want to fight off the wind.

                                I want to be the wind and I want to fight off the wind
                                with its sagging banner of isolation, its swinging

                                screen doors, its gilded boxes, and neatly folded pamphlets
                                of noise. I want to fight off the dull straight lines
                                of two by fours and endings, your disapprovals,

                                your doubts and regulations, your carbon copies.
                                If the locust can abandon its suit,

                                I want a brand new name. I want the pepper’s fury
                                and the salt’s tenderness. I want the virtue
                                of the evening rain, but not its gossip.

                                I want the moon’s intuition, but not its questions.
                                I want the malice of nothing on earth. I want to enter

                                every room in a strange electrified city
                                and find you there. I want your lips around the bell of flesh

                                at the bottom of my ear. I want to be the mirror,
                                but not the nightstand. I do not want to be the light switch.
                                I do not want to be the yellow photograph

                                or book of poems. When I leave this body, Woman,
                                I want to be pure flame. I want to be your song.
                            </p>
                        </article>
                    </section>
                </div>
                <footer className="the_footer">
                    © Copyright Lu Yuan Ting 2018
                </footer>
            </div>


    )
}