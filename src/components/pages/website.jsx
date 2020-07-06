import React, { useState } from 'react'


const Website = () => {
    const [pyetja1, shtovlere] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [duaMenaxhimSocial, vendosMenaxhimSocial] = useState(false);
    const [duaSetFotografik, vendosSetFotografik] = useState(false);
    const [duaFushatMarketingu, vendoFushatMarketingu] = useState(false);
    const [markaRegjistruar, regjistroMarken] = useState(false);

    const onChange = (e) => {

        shtovlere(e.target.value);
    }

    return (

        <div className="website">
            <form className="form" >
                <div className="nje" id="pyetja1">
                    <p className="p-nje">1.Cila eshte topologjia e biznesit tuaj?</p>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="prezantues"  id="prezantues" name="tipi" onClick={onChange} />
                        <span>Prezantues</span>
                        </label>
                    </div>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="ecommerce" id="ecommerce" name="tipi" onClick={onChange} />
                        <span>E-commerce</span>
                        </label>
                    </div>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="booking" id="booking" name="tipi" onClick={onChange} />
                        <span>Booking</span>
                        </label>
                    </div>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="portale" id="portale" name="tipi" onClick={onChange} />
                      <span>Portale</span>
                      </label>
                    </div>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="delivery" id="delivery" name="tipi" onClick={onChange} />
                        <span>Delivery</span>
                        </label>
                    </div>

                    <div className="margin-pyetjet">
                        <label className="label">
                        <input type="radio" value="reference" id="reference" name="tipi" onClick={onChange} />
                        <span>Web Reference</span>
                        </label>
                    </div>
                </div>


                {pyetja1 === 'ecommerce' &&
                    <div id="pyetja1-vazhdimi" className="vazhdimi-pyetja1">
                        <div className="flex-1">
                            <div id="1a">
                                <p>a.Sa produkte do te permbaj web-i?</p>

                                <label className="label">
                                <input type="radio" name="sasia" value="50" id="50" />
                                <span>1-50</span>
                                </label><br/>

                                <label className="label" >
                                <input type="radio" name="sasia" value="300" id="300" />
                                <span>51-300</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="sasia" value="301" id="301" />
                                <span>300+</span>
                                </label>
                            </div>

                            <div id="1b">
                                <p>b.Kush do te te merret me hedhjen e produkteve?</p>

                                <label className="label">
                                <input type="radio" name="pergjegjesi" value="codeit" id="codeit" />
                                <span>codeIT</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="pergjegjesi" value="klienti" id="klienti" />
                                <span >Klienti</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="pergjegjesi" value="pala" id="pala" />
                                <span >Pala e trete</span>
                                </label>
                            </div>
                        </div>


                        <div className="flex-2">
                            <div id="1c">
                                <p>c.Cila eshte platforma qe do te ndertohet?</p>

                                <label className="label" >
                                <input type="radio" name="platform" value="wordpress" id="wordpress" />
                                <span >Wordpress</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="platform" value="shopify" id="shopify" />
                                <span >Shopify</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="platform" value="prestashop" id="prestashop" />
                                <span>Prestashop</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="platform" value="magento" id="magento" />
                                <span>Magento</span>
                                </label>
                            </div>


                            <div id="1d" style={{ marginRight: "55px" }}>
                                <p>d.Cilat do te te jene menyrat e pageses?</p>

                                <label className="label">
                                <input type="radio" name="pagesa" value="cash" id="cash" />
                                <span>Cash</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="pagesa" value="paypal" id="paypal" />
                                <span>Paypal</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="pagesa" value="credit" id="credit" />
                                <span>Credit Card Paypal</span>
                                </label><br/>

                                <label className="label">
                                <input type="radio" name="pagesa" value="stripe" id="stripe" />
                                <span>Stripe</span>
                                </label>
                            </div>
                        </div>
                    </div>}
                <div className="image-choice">

                    <p className="p-dy">2.Kerkesat e dizajnit ne WEB</p>
                    <div className="choices">
                        <div className="flex-image">
                            <label htmlFor="thjeshte"><img className="img" src="golda.jpg" alt="golda" /></label>
                            <label className="label">
                            <input type="radio" name="foto" value="thjeshte" id="thjeshte" />
                            <span>I thjeshte</span>
                            </label>
                        </div>

                        <div className="flex-image">
                            <label htmlFor="avanc"><img className="img" src="Dosja.jpg" alt="dosja" /></label>
                            <label className="label">
                            <input type="radio" name="foto" value="avanc" id="avanc" />
                            <span>I Avancuar</span>
                            </label>
                        </div>

                        <div className="flex-image">
                            <label htmlFor="kompleks"><img className="img" src="limitless.jpg" alt="limitless" /></label>
                            <label className="label">
                            <input type="radio" name="foto" value="kompleks" id="kompleks" />
                            <span>Kompleks</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="tre-kater">

                    <div id="p3">
                        <p>3.Sa gjuhe do jene ne webin tuaj?</p>

                        <label className="label" >
                        <input type="radio" name="gjuha" id="nje" value="nje" />
                        <span>Nje gjuhe</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="gjuha" id="shume" value="shume" />
                        <span>Shume Gjuhe</span>
                        </label>
                    </div>

                    <div id="p4">
                        <p>4.Nga cila pale do te te behet hedhja e materialeve?</p>

                        <label className="label">
                        <input type="radio" name="materiale" id="klient" value="klient" />
                        <span>Klienti</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="materiale" id="codeIT" value="codeIT" />
                        <span>CodeIT</span>
                        </label>
                    </div>
                </div>

                <div className="pes-gjashte">
                    <div id="p5">
                        <p>5.Sa faqe kryesore ka web-i?</p>

                        <label className="label">
                        <input type="radio" name="nrfaqeve" id="pes" value="pes" />
                        <span>1-5: <span className="span">(Home,Rreth Nesh,Sherbime,Galeri,Kontakt)</span></span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="nrfaqeve" id="gjasht" value="gjasht" />
                        <span>6-11</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="nrfaqeve" id="11" value="11" />
                        <span>11+</span>
                        </label>

                    </div>
                    <div id="p6">
                        <p>6.A keni host dhe domain?</p>

                        <label className="label">
                        <input type="radio" name="hostdomain" value="skam" id="skam" />
                        <span>Nuk kam asnjeren</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="hostdomain" value="kamhost" id="kamhost" />
                        <span>Kam Host</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="hostdomain" value="kamdomain" id="kamdomain" />
                        <span>Kam Domain</span>
                        </label><br/>

                        <label className="label">
                        <input type="radio" name="hostdomain" value="tedyja" id="tedyja" />
                        <span>Kam Host & Domain</span>
                        </label>
                    </div>
                </div>
                <div className="shtate">
                    <p>7.Sa e rendesishme eshte renditja e web-it tuaj ne motoret e kerkimit?</p>

                    <label className="label">
                    <input type="radio" name="seo" value="aspak" id="aspak" />
                    <span>Aspak e rendesishme</span>
                    </label><br/>

                    <label className="label">
                    <input type="radio" name="seo" value="pak" id="pak" />
                    <span>Pak e rendesishme</span>
                    </label><br/>

                    <label className="label">
                    <input type="radio" name="seo" value="rendesishme" id="rendesishme" />
                    <span>E rendesishme</span>
                    </label><br/>

                    <label className="label">
                    <input type="radio" name="seo" value="shum" id="shum" />
                    <span>Shume e rendesishme</span>
                    </label>
                </div>
                <div className="tete">
                    <p>8.Ne web do te te kete element si: <span className="span">(mund te zgjidhni me shume se 1 alternative)</span></p>
                    <div className="checkboxes-choice">

                        <div className="flex-check1">

                            <div>
                                <input type="checkbox" name="element" id="blog" value="blog" />
                                <label htmlFor="blog">Blog</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="portofolio" value="portofolio" />
                                <label htmlFor="portofolio">Portofolio</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="rez-kalendar" value="rez-kalendar" />
                                <label htmlFor="rez-kalendar">Rezervime/Kalendar eventesh</label>
                            </div>

                        </div>

                        <div className="flex-check2">

                            <div>
                                <input type="checkbox" name="element" id="artikuj" value="artikuj" />
                                <label htmlFor="artikuj">Artikuj</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="faq" value="faq" />
                                <label htmlFor="faq">FAQ-s</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="livechat" value="livechat" />
                                <label htmlFor="livechat">Live Chat</label>
                            </div>

                        </div>

                        <div className="flex-check3">

                            <div>
                                <input type="checkbox" name="element" id="googlemap" value="googlemap" />
                                <label htmlFor="googlemap">Google Maps</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="prof-perdorues" value="prof-perdorues" />
                                <label htmlFor="prof-perdorues">Profil Perdoruesish</label>
                            </div>

                            <div>
                                <input type="checkbox" name="element" id="newsletter" value="newsletter" />
                                <label htmlFor="newsletter">Newsletter</label>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="web-marketing">

                    <h3>Deshironi marketing?</h3>

                    <div className="switch_box box_4">
                        <div className="input_wrapper">
                            <input type="checkbox" className="switch_4" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
                            <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                            </svg>
                            <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {isChecked === true &&
                    <>
                        <div className="nenta">

                            <p>9.Biznesit tuaj i nevojitet:<span className="span">(mund te zgjidhni me shume se 1 alternative)</span></p>
                            <div className="marketing-9">

                                <input type="checkbox" name="nevojitet" id="emer" value="emer" />
                                <label htmlFor="emer">Emer</label><br />

                                <input type="checkbox" name="nevojitet" id="logo" value="logo" />
                                <label htmlFor="logo">Logo</label><br />

                                <input type="checkbox" name="nevojitet" id="imazh-marke" value="imazh-marke" />
                                <label htmlFor="imazh-marke">Imazh Marke</label><br />

                                <input type="checkbox" name="nevojitet" id="tetreja" value="tetreja" />
                                <label htmlFor="tetreja">Te treja</label>
                            </div>
                        </div>

                        <div className="dhjeta">
                            <div className="dhjeta-left">
                                <p>10.Deshiron menaxhim te mediave Sociale?</p>

                                <div className="switch_box box_4">
                                    <div className="input_wrapper">
                                        <input type="checkbox" className="switch_4" onChange={(event) => vendosMenaxhimSocial(event.currentTarget.checked)} checked={duaMenaxhimSocial} />
                                        <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                            <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                        </svg>
                                        <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                            <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {duaMenaxhimSocial === true &&
                                <div className="dhjeta-right">
                                    <p>Cila eshte frekuenca e postimeve ne media gjate javes?</p>
                                    <label className="label">
                                    <input type="radio" name="frekuenca" id="3" value="3" />
                                    <span>1-3</span>
                                    </label><br/>

                                    <label className="label">
                                    <input type="radio" name="frekuenca" id="7" value="7" />
                                    <span>4-7</span>
                                    </label><br/>

                                    <label className="label">
                                    <input type="radio" name="frekuenca" id="14" value="14" />
                                    <span>8-14</span>
                                    </label><br/>

                                    <label className="label">
                                    <input type="radio" name="frekuenca" id="15" value="15" />
                                    <span>15+</span>
                                    </label>
                                </div>}
                        </div>

                        <div className="eleven">
                            <div className="eleven-left">
                                <p>11.Ju duhet set fotografik?</p>
                                <div className="switch_box box_4">
                                    <div className="input_wrapper">
                                        <input type="checkbox" className="switch_4" onChange={(event) => vendosSetFotografik(event.currentTarget.checked)} checked={duaSetFotografik} />
                                        <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                            <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                        </svg>
                                        <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                            <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {duaSetFotografik === true &&
                                <div className="eleven-right">

                                    <p>Sa here ne muaj ju nevojitet seti fotografik?</p>
                                    <label className="label">
                                    <input type="radio" name="seti" id="1here" value="1here" />
                                    <span>1 here ne muaj</span>
                                    </label><br/>

                                    <label className="label">
                                    <input type="radio" name="seti" id="2here" value="2here" />
                                    <span>2 here ne muaj</span>
                                    </label>
                                </div>

                            }

                        </div>

                        <div className="twelve">
                            <div className="twelve-left">
                                <p>12.Deshironi fushat marketingu?</p>
                                <div className="switch_box box_4">
                                    <div className="input_wrapper">
                                        <input type="checkbox" className="switch_4" onChange={(event) => vendoFushatMarketingu(event.currentTarget.checked)} checked={duaFushatMarketingu} />
                                        <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                            <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                        </svg>
                                        <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                            <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                            {duaFushatMarketingu === true &&
                                <div className="twelve-right">

                                    <p>Ku deshironi te promovoheni?<span className="span-2">(mund te zgjidhni me shume se 1 alternative)</span></p>
                                    <input type="checkbox" name="promovim" id="tv" value="tv" />
                                    <label htmlFor="tv">TV</label><br />

                                    <input type="checkbox" name="promovim" id="radio" value="radio" />
                                    <label htmlFor="radio">Radio</label><br />

                                    <input type="checkbox" name="promovim" id="online" value="online" />
                                    <label htmlFor="online">Online</label><br />

                                    <input type="checkbox" name="promovim" id="portale-m" value="portale" />
                                    <label htmlFor="portale-m">Portale</label><br />

                                    <input type="checkbox" name="promovim" id="tegjitha" value="tegjitha" />
                                    <label htmlFor="tegjitha">Te gjitha</label>
                                </div>

                            }
                        </div>

                        <div className="thirteen">

                            <p>13.Deshironi ta regjistroni marken ligjerisht?</p>
                            <div className="switch_box box_4">
                                <div className="input_wrapper">
                                    <input type="checkbox" className="switch_4" onChange={(event) => regjistroMarken(event.currentTarget.checked)} checked={markaRegjistruar} />
                                    <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
                                        <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z" />
                                    </svg>
                                    <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                        <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fillRule="evenodd" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </>
                }
                <div className="aplikacion">

                    <form className="form-aplikacion" >

                        <div className="submit-app">
                            <div className="left">
                                <p>Plotesoni fushat duke na derguar automatikisht te dhenat e kerkeses</p>
                                <input type="text" placeholder="Emri*" required />
                                <input type="email" placeholder="Email*" required />
                                <input type="tel" placeholder="Tel*" required />

                            </div>
                            <div className="right">
                                <textarea name="kerkesetjeter" id="kerkesetjeter" placeholder="Kerkese Tjeter" cols="30" rows="10"></textarea>
                            </div>

                        </div>
                        <div className="submit">
                            <input type="submit" value="Dergo Kerkesen" />
                        </div>
                    </form>
                </div>
            </form>
        </div>
    );
}
export default Website;
