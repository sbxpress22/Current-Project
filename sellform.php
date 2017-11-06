<!--John Brezinzski-->
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Silo Foods</title>
        <link rel="stylesheet" href="css/design.css">
        <script src="scripts/sellFormValidate.js"></script>
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
                    <h1>Sell Form</h1>
                    <div class="">
                        <form id="sell" onsubmit="sellFormValidate()">
                            <br>
                            Product Name<br>
                            <input type="text" name="product"><br>
                            <br>
                            Product Type<br>
                            <select>
                                <option value="null"></option>
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="dairy">Dairy</option>
                                <option value="nonfood">Non-food Item</option>
                                <option value="oats">Oats</a>
                                <option value="oils">Oil</a>
                            </select><br>
                            Amount in lbs.<br>
                            <input type="number" name="amount"><br>
                            <br>
                            Harvest date (MM/DD/YYYY)<br>
                            <input type="date" name="harvest"><br>
                            <br>
                            Shipping From<br>
                            Address:<br>
                            <input type="text" name="shippingAddress"><br>
                            Town/state/zip code<br>
                            <input type="text" name="shippingTown"><br>
                            <br>
                            <input type="submit" name="submit"><br>
                        </form>
                    </div>
                </article>
                <footer>
                    Copyright Silo Foods
                </footer>
        </main>
    </body>
</html>

