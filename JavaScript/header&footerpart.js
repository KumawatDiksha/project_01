class Header extends HTMLElement {
connectedCallback() {
this.innerHTML = `

    <header style="z-index:10;">
        <div class="nav">
            <a id="logo" style="transition: all .3s ease-in-out ;" href="https://kumawatdiksha.github.io/project_01/">
                <h1> ToLet Plus </h1> <a>
                    <a class="nav_ele" href="https://kumawatdiksha.github.io/project_01/post_property_form_page/post_property_form_page.html ">
                        <button>Post prperty here</button></a>



                    <!-- signup&login button  -->

                    <div id="signupbox" class="signupbox">
                        <form action="signup" class="signupboxanimate" method="post">
                            <span class="close"
                                onclick="document.getElementById('signupbox').style.display='none'">&times;</span>

                            <div class="userdata" style="background-color: white;">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required maxlength="30"
                                    minlength="4" id="Uname">

                                <label for="passward"><b>Passward</b></label>
                                <input type="password" placeholder="Enter Passward" name="password" required minlength="8"
                                    maxlength="16">

                                <label for="re-enterpassward"><b>Re-enterPassward</b></label>
                                <input type="password" placeholder="Re-Enter passward" name="re_password">

                                <label for="email"><b>E-mail</b></label>
                                <input type="email" placeholder="Enter E-mail " maxlength="30" inputmode="email"
                                    name="email">

                                <label for="tel"><b>Mobile no.</b></label>
                                <input type="tel" placeholder="Enter mobile no." required valury maxlength="10"
                                    type="number" name="phone">

                                <button type="submit" class="signup2">signup</button>
                            <!-- </div> -->
                            <!-- <div class="userdata" style="background-color: white;"> -->
                                <!-- <button type="button" onclick="document.getElementById('signupbox').style.display='none'"
                                    class="cancelbtn">Cancel</button>
                                <span class="or">or</span> <br> -->
                                <div  onclick="document.getElementById('loginbox').style.display='block', document.getElementById('signupbox').style.display='none'"
                                    type="button" class="login3">Create your account <span style=" color: dodgerblue;">login</span></div>
                            </div>
                        </form>
                    </div>



                    <!-- Login Page Started -->

                    <div id="loginbox" class="loginbox">
                        <form action="login" class="loginboxanimate" method="post">
                            <span class="close"
                                onclick="document.getElementById('loginbox').style.display='none'">&times;</span>

                            <div class="userdata" style="background-color: white;">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" id="UserName" required
                                    maxlength="30" minlength="4">

                                <label for="passward"><b>Passward</b></label>
                                <input type="password" placeholder="Enter Passward" name="password" id="Password" required
                                    minlength="8" maxlength="16">
                                <p id="demo"></p>
                                <button type="submit" class="login2" id="Submit" onclick="">Login</button>
                            <!-- </div>/ -->
                            <!-- <div class="userdata" style="background-color: white;"> -->
                                <!-- <button type="button" onclick="document.getElementById('loginbox').style.display='none'"
                                    class="cancelbtn">Cancel</button>
                                <span class="fpsw">Forgot passward</span><br>
                                <span class="or">or</span> <br> -->

                                <div onclick="document.getElementById('signupbox').style.display='block', document.getElementById('loginbox').style.display='none'"
                                    type="button" class="signup3">Create your account <span style=" color: dodgerblue;">Sign-in</span></div>
                            </div>
                        </form>
                    </div>

                    <!-- Login page end here-->

                    <!-- menu bar start hare -->
                    <div class="account_icon-laptop" id="usericon"
                        style="margin:.4vw 4vw; float:right; z-index: 3; cursor: pointer;" onclick=menu()>
                        <div class="account_icon-laptop"
                            style=" padding:.6vw;  background-color: #bbbbbb; border-radius: 100px;">
                            <div class="account_icon-laptop"
                                style=" display:table; width: .6vw; height: .6vw;  background-color: white;margin:auto auto; border-radius: 100vw;">
                            </div>
                            <div class="account_icon-laptop"
                                style=" display:table; width: 1.3vw; height: .6vw; background-color: white; margin:auto; margin-top:7%; border-top-left-radius:7px ; border-top-right-radius: 7px;">
                            </div>
                        </div>
                    </div>


                    <div id="menulist" class="menulist0">
                        <div class="menulist">

                            <div id="submenulist0" class=" material-icons "
                                style="font-size: 20vw; padding-bottom: 0vw; color: #ececec;"> account_circle </div>
                            <div class="userinfo">
                                <a id="username">UserName</a>
                                <a href="../desh_board_for_property-owner/Profile.html">
                                    <div class="editprofile"> <b> Edit profile </b></div>
                                </a>
                            </div>
                            <hr>
                            <div onclick="document.getElementById('signupbox').style.display='block'" class="submenulist"
                                style="color: #2b2b2b;"><b>Signup</b></div>
                            <div onclick="document.getElementById('loginbox').style.display='block'" class="submenulist">
                                Login</div>

                            <div id="submenulist0"> Account </div>
                            <a href="../desh_board_for_property-owner/Profile.html">
                                <div class="submenulist"> Personal info </div>
                            </a>
                            <div onclick="document.getElementById('#').style.display='block'" class="submenulist"> Massages
                            </div>
                            <div class="submenulist"> Whislist </div>
                            <hr>

                            <div id="submenulist0"> Property </div>
                            <a href=" ../post_property_form_page/post_property_form_page.html ">
                                <div class="submenulist"> Post prperty hare </div>
                            </a>

                            <a href="../desh_board_for_property-owner/Property Listings.html">
                                <div class="submenulist"> Manage your property </div>
                            </a>
                            <hr>

                            <div id="submenulist0"> Privacy Policy </div>
                            <div onclick="document.getElementById('#').style.display='block'" class="submenulist"> Help
                            </div>
                            <div onclick="document.getElementById('#').style.display='block'" class="submenulist"> Logout
                            </div>
                        </div>
                    </div>

                    <!-- menu bar end hare -->

                    <!-- search bar box start hare -->
                    <div class="front">


                        <div id="search">
                            <div class="search">
                                <select name="property_for" class="property_for">
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                </select>
                                <hr>
                                <div class="search-input">
                                    <input id="search-bar" class="search-bar" style="text-align: start;" type="search"
                                        placeholder="Type to search locations..">
                                    <div class="autocom-box">
                                        <!-- here list are inserted from javascript -->
                                    </div>
                                </div>

                                <hr>
                                <select name="property_type" id="select" class="property_type">
                                    <option value="Other">Other</option>
                                    <option value="Flat">Flat</option>
                                    <option value="Home">Home</option>
                                    <option value="Hostel&pg">Hostel&P.G.</option>
                                    <option value="Land">Land</option>
                                    <option value="Office">Office</option>
                                    <option value="Room">Room</option>
                                    <option value="Shop">Shop</option>
                                    <option value="Showroom">Showroom</option>
                                    <option value="Warehouse">Warehouse</option>
                                </select>
                                <hr>
                                <a href="../propertylistpage/propertylistpage.html"> <button
                                        class="search_button material-icons" type="search">search</button> </a>

                            </div>
                        </div>
                        <div class="lines">Find your dream home for your femily</div>

                    </div>
    </header> `
}
}

customElements.define('my-header', Header)


// footer part is hare

class Footer extends HTMLElement {
connectedCallback() {
this.innerHTML = `
<!-- footer part start hare         -->

<footer>
    <div id="footer">

        <ul>
            <li><a href="../footer/about.html">About Us</a></li>
            <li><a href="../footer/blog/blogs.html">Blog</a></li>
            <li><a href="../footer/contect_us/contect_us.html">Contact Us</a></li>
            <li><a href="../footer/feedback.html">Feedback</a></li>
            <li><a href="../footer/FAQ/FAQ.html">FAQ</a></li>
            <hr>
        </ul>
        <div class="sub-footer">
            <a>&copy All rights reserved </a>
            <a href="../footer/Privacy Policy.html">Privacy Policy </a>
            <a href="../footer/terms&conditions.html">Terms & Conditions</a>
        </div>
    </div>
</footer>
<!-- footer part end hare -->

<div id="foot" onclick="document.getElementById('foot').style.display='none'"></div>


<div id="navbar">

    <button class="material-icons" style="font-size: 13vw;"
        onclick="document.getElementById('foot').style.display='block'">menu</button>
    <button class="material-icons" style="font-size: 13vw;"><a href="/">home</a></button>
    <button class="material-icons  account_icon-mobile" style="font-size: 13vw;" onclick=menu()>account_circle</button>

</div>
</div>`
}
}

customElements.define('my-footer', Footer)

document.getElementById('foot').innerHTML = document.getElementById('footer').innerHTML;
