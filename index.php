<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Silo Foods</title>
        <link rel="stylesheet" href="css/design.css">
    </head>
    <body>
        <main>
            <header>
                    <a href="index.html"><img src="images/Logo.jpg" alt="Logo" width="100" height="100" class ="floatL"></a>
                    <h4>Welcome to Silo Foods!</h4>
                    <p class="loginLink"><a href=login.html>Login or Register</a></p>
            </header>
                <nav>
                            <ul>
                                <li class="navBar"><a href="index.php">Home</a></li>
                                <li class="navBar"><a href="market.html">Buy from Us</a></li>
                                <li class="navBar"><a href="sellform.php">Sell to Us</a></li>
                                <li class="navBar"><a href="about.html">About Us</a></li>
                                <li class="navBar"><a href="contact.html">Contact Us</a></li>
                                <li class="navBar"><a href="sitemap.html">Site Map</a></li>
                                <li class="navBar"><a href="feedback.html">Feedback</a></li>
                            </ul>
                </nav>
                <article>
                    <p>Curabitur non malesuada erat. Nam varius semper sem, id tincidunt turpis mattis vel. Morbi sit amet tempus tortor. Fusce nec rhoncus massa, nec volutpat metus. Praesent vitae fermentum nisi, in laoreet nulla. Fusce aliquet augue nibh, a volutpat dolor congue ut. Mauris consectetur mauris at arcu commodo, a molestie mi fringilla. Curabitur pulvinar efficitur purus a pretium. Morbi efficitur nisl sed lorem bibendum, id euismod massa laoreet. Duis varius auctor feugiat. Ut vitae felis sit amet risus suscipit molestie quis lobortis nulla. Aliquam erat volutpat.</p>
                    <h2 class="" style="text-align:">Featured Products</h2>
                    <div style="align: middle; max-width: 300px; margin-left: 400px; border-style: solid; border-width: 3px; border-color: black">
                        <img class="myslides" src="images/strawberry.jpeg" style="width: 100%"></img>
                        <img class="myslides" src="images/orange.jpg" style="width: 100%"></img>
                        <img class="myslides" src="images/kiwi.jpg" style="width: 100%"></img>
                    </div>
                    
                    <script>
                        var myIndex = 0;
                        carousel();

                        function carousel() {
                            var i;
                            var x = document.getElementsByClassName("mySlides");
                            for (i = 0; i < x.length; i++) {
                                x[i].style.display = "none";  
                            }
                            myIndex++;
                            if (myIndex > x.length) {myIndex = 1}    
                            x[myIndex-1].style.display = "block";  
                            setTimeout(carousel, 5000); // Change image every 2 seconds
                            }
                    </script>
                </article>
                <footer>
                    Copyright Silo Foods
                </footer>
        </main>
    </body>
</html>