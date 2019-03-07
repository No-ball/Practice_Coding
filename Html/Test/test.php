<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The form element - HTML5 tutorial</title>
    <meta name="description" content="The form element gives website visitors the ability to interact with the site. We know them mostly as simple email forms, but that is just the beginning of what they can do.">
    <!-- The Cascading Style Sheet (CSS) file mycss.css is where I set colors, fonts, spacing etc. - what is called "style". HTML is for "content". -->
    <link rel="stylesheet" href="mycss.css"> 
    <link rel="glossary" href="glossary.htm">
    <link rel="copyright" href="copyright.htm">
    <link rel="prefetch" href="https://www.html-5-tutorial.com/input-element.php">
    <script src="scripts/allscripts.js"></script>
    <!-- The following makes older IEs (< IE9) work with new HTML5 tags. Include it in the head elements just as I do here. -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Google Analytics --> 
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-10200228-1']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'https://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
   </script>
   <style type="text/css">
      span.answerbox { border: 2px solid #23223E; padding: 0 5px 0 5px; }
      table.num {  border-collapse: collapse; border-spacing: 0; }
      table.num div { background-image: url(images/numbers.gif); background-repeat: no-repeat; margin-top: 11px; }
      p.grey, dl.grey dt, dl.grey dd, dl.grey a { background-color: transparent; color: #ececec; }
      div.casea { width: 10px; height: 20px; background-position: -0px; }
      div.caseb { width: 10px; height: 20px; background-position: -40px; }
      div.casec { width: 10px; height: 20px; background-position: -130px; }
      div.cased { width: 10px; height: 20px; background-position: -170px; }
   </style>
  </head>
  <body  itemscope itemtype="https://schema.org/WebApplication" onload="window.scroll(0,800)"><!-- Throughout the site you will see tags with itemscope, itemtype=" " and itemprop=" ". This has to do with Rich Snippets that help with SEO. As a beginner don't worry about them. They are still in development. Hopefully by the time you need to use them they will be easier to implement. -->
    <!-- BuySellAds Ad Code -->
    <script type="text/javascript">
    (function(){
      var bsa = document.createElement('script');
         bsa.type = 'text/javascript';
         bsa.async = true;
         bsa.src = 'https://s3.buysellads.com/ac/bsa.js';
      (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
    })();
    </script>
    <!-- End BuySellAds Ad Code -->
    <div class="left">
    <!-- The row across the top of the page -->
    <header>
    <a href="https://www.html-5-tutorial.com/"><img src="images/html-5-tutorial.gif" alt="HTML5 tutorial - The form element." height="100" width="900"></a>
    </header>

    <!-- The links down the left -->
    <nav>
      <ul>
        <li><a href="https://www.html-5-tutorial.com/">home</a></li>
        <li><a href="start-html5-tutorial.htm">start tutorial</a></li>
        <li><a href="about-html.htm">what is HTML?</a></li>
        <li><a href="about-html5.htm">what is HTML5?</a></li>
        <li><a href="what-its-not.htm">what it's not</a></li>
        <li><a href="doctype.htm"><code>&lt;doctype&gt;</code></a></li>
        <li><a href="html-tag.htm"><code>&lt;html&gt;</code></a></li>
        <li><a href="head-tag.htm"><code>&lt;head&gt;</code></a></li>
        <li><a href="body-tag.htm"><code>&lt;body&gt;</code></a></li>
        <li><a href="h1-h6-tags.htm"><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code></a></li>
        <li><a href="p-tag.htm"><code>&lt;p&gt;</code></a></li>
        <li><a href="ul-ol-tags.htm"><code>&lt;ul&gt;</code>  &amp; <code>&lt;ol&gt;</code></a></li>
        <li><a href="dl-tag.htm"><code>&lt;dl&gt;</code></a></li>
        <li><a href="a-tag.htm"><code>&lt;a&gt;</code></a></li>
        <li><a href="table-tag.htm"><code>&lt;table&gt;</code></a></li>
        <li><a href="strong-and-b-elements.htm"><code>&lt;strong&gt;</code> &amp; <code>&lt;b&gt;</code></a></li>
        <li><a href="div-tag.htm"><code>&lt;div&gt;</code></a></li>
        <li><a href="div-tag-cont.htm"><code>&lt;div&gt;</code> cont.</a></li>
        <li><a href="header-element.htm"><code>&lt;header&gt;</code></a></li>
        <li><a href="nav-element.htm"><code>&lt;nav&gt;</code></a></li>
        <li><a href="article-element.htm"><code>&lt;article&gt;</code></a></li>
        <li><a href="footer-element.htm"><code>&lt;footer&gt;</code></a></li>
        <li><a href="aside-element.htm"><code>&lt;aside&gt;</code></a></li>
        <li><a href="section-element.htm"><code>&lt;section&gt;</code></a></li>
        <li><a href="image-element.htm"><code>&lt;img&gt;</code></a></li>
        <li><a href="image-element-cont.htm"><code>&lt;img&gt;</code> cont.</a></li>
        <li><a href="map-and-area-elements.htm"><code>&lt;map&gt;</code> &amp; <code>&lt;area&gt;</code></a></li>
        <li><strong><a href="form-element.php"><code>&lt;form&gt;</code></a></strong></li>
        <li><a href="input-element.php"><code>&lt;input&gt;</code></a></li>
      <li><a href="domain.php">get a domain</a> <b class="red sm">NEW</b></li>
      <li><a href="server.htm">get a server</a> <b class="red sm">NEW</b></li>
      <li><a href="signup-bluehost.htm">signing up</a> <b class="red sm">NEW</b></li>
        <li><a href="blog.htm">blog</a></li>
        <li><a href="all-html-tags.htm">all HTML5 tags</a></li>
        <li><a href="helpful-links.htm">helpful links</a></li>
        <li><a href="glossary.htm">glossary</a></li>
          <li><a href="contact.php">contact</a></li>
        </ul>
    </nav>
    <article>
      <nav class="pvnx"><a href="map-and-area-elements.htm">previous</a> &bull; <a href="form-element.php" class="noshow">the form element</a> &bull; <a href="input-element.php">next</a></nav>
      <h1 itemprop="name"><strong itemprop="description"><a itemprop="url" href="https://www.html-5-tutorial.com/form-element.php" class="noshow">The form element</a></strong></h1>
      <img itemprop="image" class="showcode" src="images/form-element.gif" alt="The form element" height="217" width="296">
      <p>In general when building a site:</p>
      <dl>
        <dt>You first want to get people <b>to</b> the site.</dt>
          <dd><em>Traffic</em> can come from word of mouth, social media, advertising, search engines, etc.</dd>
        <dt>Then you want to keep them <b>on</b> the site.</dt>
          <dd>You don't want them to <em>bounce</em> &ndash; to visit one page, not find what they are looking for and go somewhere else.</dd>
        <dt>Finally you want them to <b>do</b> something.</dt>
          <dd>You want them to buy a product, make a reservation, register for something, etc. This is called a <em>conversion</em>.</dd>
      </dl>
      <p>Getting conversions often <strong>entails the use of forms.</strong></p>
      <p>No doubt at one time or another you have filled out an online form something like the following:</p>
            <form action="form-element.php" method="post">
        <table>
          <tr>
            <td>
              <p><b>Name:</b></p>
            </td>
            <td>
              <!-- Here I put the input tag in p tags to keep spacing consistent, but they don't need to be in p tags. -->
              <p><input type="text" name="name" size="35" maxlength="35" value=""></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Your email:</b></p>
            </td>
            <td>
              <p><input type="text" name="email" size="35" maxlength="35" value=""> <b>*</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Comments:&nbsp;</b></p>
            </td>
            <td>
              <p><textarea name="comments" rows="3" maxlength="100" cols="50"></textarea></p>
            </td>
          </tr>
          <tr>
            <td>
              <table class="num">
                <tr>
                  <td>
                    <div class="casea"></div>
                  </td>
                  <td>
                    <div class="casec"></div>
                  </td>
                  <td>
                    <p><b>+</b></p>
                  </td>
                  <td>
                    <div class="caseb"></div>
                  </td>
                  <td>
                    <div class="cased"></div>
                  </td>
                  <td>
                    <p><b>=</b></p>
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <input type="hidden" name="casea" value="5">
              <input type="hidden" name="caseb" value="4">
              <p class="sm"><input type="text" name="arith" size="2" value=""> This is so I know a human is filling out the form. *</p>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <p><input type="submit" name="submit" value=" Submit "></p>
              <input type="hidden" name="submitted" value="True">
            </td>
          </tr>
        </table>
      </form>
      <p>This form sends you an email. Go ahead and try it.</p>
      <p>Below is the opening tag of the form above.</p>
      <p><code>&lt;form <mark>action="form-element.php"</mark> method="post"&gt;</code></p>
      <p>The <strong>action</strong> attribute tells the browser what to do when the "Submit" button is clicked.</p>
      <ol>
        <li>First it sends a message back to the server with the data that was entered into the form.</li>
        <li>The server then finds the file indicated in the action attribute &ndash; this page/file: "form-element.php".<b>**</b></li>
        <li>It takes the data and does what the <i>instructions</i> in the file tell it to do.</li>
        <li>Finally it sends the page back to the client and the browser reloads it.</li>
      </ol>
      <p id="multiply">You will notice that this page has a ".php" extension, rather than ".htm" like most of the rest of the pages on this site. This page contains both HTML and <span class="define">PHP</span> and therefore has a ".php" extension.<b>***</b> I include PHP code because HTML <b>only displays</b> content. The PHP makes forms <b>function</b>. The <i>instructions</i> mentioned in the list above are written in PHP.</p>
      <p>In computer science terms HTML is a <span class="define">markup language</span>, not a <span class="define">programming language</span><b>****</b> such as <span class="define">Javascript</span> or in this case, <strong>PHP</strong>. The browser knows to display the HTML just as it would with an ".htm" extension.</p>
      <p>HTML can't multiply two numbers. For that you need a <q>programming language</q> such as PHP. However, you can't display content with PHP. That is HTML's function &ndash; with the help of CSS.</p>
            <!-- https://wiki.answers.com/Q/What_does_PHP_stand_for https://php.net/manual/en/faq.general.php -->
      <form action="form-element.php" method="post">
        <p><input type="text" size="3" name="firstnumber" maxlength="8" value="10000000"> <b>x</b> <input type="text" size="3" name="secondnumber" maxlength="8" value="10000000"> = <span class="answerbox">100000000000000</span>
        <input type="submit" value=" Multiply "></p>
        <input type="hidden" name="multiply" value="true">
      </form>
      <p>Let's go through the three steps above to see how this form works.</p>
      <ol>
        <li>When you click "Multiply" the browser takes the contents of the two boxes and sends it to the server.</li>
        <li>The server then finds the file in the action attribute &ndash; again, this page/file: form-element.php.</li>
        <li>Then, following a set of instructions I wrote in PHP, the server does the math and saves the answer.</li>
        <li>Lastly it sends the data back to the client and the page reloads with the answer displayed in the box.</li>
      </ol>
      <dl>
        <dt>To generate the answer box above the server sent:</dt>
          <dd><code>&lt;span class="answerbox"&gt;<mark>100000000000000</mark>&lt;/span&gt;</code></dd>
        <dt>But what I actually wrote is:</dt>
          <dd><code>&lt;span class="answerbox"&gt;<mark>&lt;?php print $answer; ?&gt;</mark>&lt;/span&gt;</code></dd>
      </dl>
      <p>Now is not the time to learn PHP, but it is important to have a general idea of how HTML, CSS and programming languages work together. There are all kinds of programming languages, and I highly recommend learning at least one, but you should know HTML to use those languages to their fullest potential.</p>
      <p>The form element has a second attribute: <code>method=".."</code>. The method tells the browser <b>how</b> to send the content of the form back to the server. The <code>post</code> method, used in the previous two forms, hides the data. The <code>get</code> method appends the data to the end of the URL.</p>
      <p><code>&lt;form action="form-element.php" <mark>method="get"</mark>&gt;</code></p>
      <p>To see a <code>get</code> in action fill in your first name and click "Submit".</p>
      <form action="form-element.php" method="get">
        <p><b>Your name:</b> <input type="text" size="30" maxlength="30" name="your_name" value=""></p>
        <input type="submit" value=" Submit ">
      </form>
      <p class="grey">Hello <b></b>,</p>
      <dl class="grey">
        <dt>Notice that the URL of this page is now:</dt>
          <dd>https://www.html-5-tutorial.com/form-element.php<b></b></dd>
        <dt>You can send that URL in an email or use it in a link on a web page.</dt>
          <dd><a href="https://www.html-5-tutorial.com/form-element.php">https://www.html-5-tutorial.com/form-element.php</a>.</dd>
      </dl>
      <p>While it's good to know what a <code>get</code> is, unless there are overriding reasons not to, I recommend using the <code>post</code> method. The <code>get</code> method is like that weird screwdriver you hardly ever need, but when you do, it's the only tool for the job.</p>
      <p>Unlike TV or print, on the net communication is not a one way street. Visitors can send information back to you via your server. Forms are the principal mechanism web designers use to get clients to do just that. Unfortunately, this opens all kinds of security issues for both visitors and designers.</p>
      <p>While many of you filled out the second and third forms, I imagine most of you were hesitant to fill out the first. For all you know I could be some spammer soon to be sending you emails concerning the estate of my late uncle, the ex Nigerian Minister of Finance. I am not a spammer and my uncle sold tractors for a living &ndash; but the nature of the net is such that you never know.</p>
      <p>Trust is everything. No one with any sense is going to fill out a form without having a reasonable degree of confidence that what they send won't be misused, nor should they. The ongoing &ndash; indeed unrelenting efforts of the dead minister's extended family speaks to the fact that there are plenty of idiots out there, but vast majority of us know better.</p>
      <p>Web designers have to be careful too. Forms can be vulnerable. I do everything I can to prevent the use of these form for anything other than their intended purpose. Unfortunately, hackers are every bit as unrelenting as the minister's family &ndash; and much smarter.</p>
      <p>That said, there are ways to protect both your clients and your forms from hackers. Some are low tech. In the first form, as long as I don't save any email addresses (and I don't), no one can hack into the server and steal them. Some are high tech &ndash; and beyond my skills to write, however there are free programs you can download and use to process your forms.</p>
      <p>The use of one of the three forms above would not be considered a conversion. In fact, this site is unusual in that I am not trying to get visitors to fill out a form; however the ultimate goal of most sites is to build email lists, to request donations, to sell something &ndash; to get <em>conversions</em>.</p>
      <p>All too often web designers spend too much time on bells and whistles and forget that the point of the exercise is to get people to <b>do something</b>. As a rule it's a simple form on a simple page that brings home the bacon.</p>
      <nav class="pvnx"><a href="map-and-area-elements.htm">previous</a> &bull; <a href="form-element.php" class="noshow">the form element</a> &bull; <a href="input-element.php">next</a></nav>
    <div class="glossary">
      <div class="glossaryl">
        <section title="PHP">
          <h2 class="sec"><strong class="define">PHP</strong></h2>
          <p><dfn>PHP is a general-purpose server-side scripting language originally designed for Web development to produce dynamic Web pages.<br>
          <a href="https://en.wikipedia.org/wiki/PHP" target="_blank">wikipedia</a> &middot; <a href="https://php.net/manual/en/faq.general.php">php.net/faq</a></dfn></p>
        </section>
        <section title="Markup Language">
          <h2 class="sec"><strong class="define">Markup Language</strong></h2>
          <p><dfn>A markup language is a language that annotates text so that the computer can manipulate the text.<br>
          <a href="https://webdesign.about.com/od/htmlxhtmltutorials/p/what-are-markup-languages.htm">about.com</a> &middot; <a href="https://en.wikipedia.org/wiki/Markup_Language">wikipedia</a></dfn></p>
        </section>
      </div>
      <div class="glossaryr">
        <section title="Programming Language">
          <h2 class="sec"><strong class="define">Programming Language</strong></h2>
          <p><dfn>A programming language is an artificial language designed to communicate instructions to a computer.<br>
          <a href="https://en.wikipedia.org/wiki/Programming_language">wikipedia</a></dfn></p>
        </section>
        <section title="Javascript">
          <h2 class="sec"><strong class="define">Javascript</strong></h2>
          <p><dfn>A scripting programming language most commonly used to add interactive features to webpages.<br>
          <a href="https://en.wiktionary.org/wiki/JavaScript">wiktionary.org</a> &middot; <a href="https://en.wikipedia.org/wiki/Javascript" target="_blank">wikipedia</a></dfn></p>
        </section>
      </div>
    </div>
      <p class="sm"><b>*</b> Required &ndash; I do not save any email addresses that are entered into this form. <a href="privacy-policy.htm" title="Privacy Policy">Privacy Policy</a>.</p>
      <p class="sm"><b>**</b> The action attribute can call a file other than the one the form is in. I have the PHP code that processes the forms saved in this file but the PHP can be in a separate file if you prefer.</p>
      <p class="sm"><b>***</b> If you look at the source code you won't see the PHP. It's in the file I saved on the server, but that code is <i>executed</i> on the server and only the HTML &ndash; often having been modified by the PHP &ndash; is sent to the client.</p>
      <p class="sm"><b>****</b> Most programming languages used on the net, such as <b>PHP</b>, are called "scripting languages". For most beginners it is a distinction without a difference, but if you are or plan to become a programmer you should know this. To learn more go to: <a href="https://en.wikipedia.org/wiki/Scripting_language" target="_blank">https://en.wikipedia.org/wiki/Scripting_language</a></p>
      <!-- The row on the bottom -->
      <footer> 
      <h2><strong><a href="form-element.php" class="botlink">the form element</a></strong></h2>
      <p>"May the line of least resistance lead me on." Delbert McClinton</p>
      <aside class="blue">
        <p><a href="https://www.bluehost.com/track/html5tutorial/form_txt" target="_blank" class="bluehost">This site is hosted with blue<b>host</b>.</a></p>
    </aside>
      <table class="wd100">
        <tr>
          <td class="sm c wd33"><a href="privacy-policy.htm">privacy policy</a></td>
          <td class="sm c"><a href="about-html-5-tutorial.htm">about html-5-tutorial.com</a></td>
          <td class="sm c wd33"><a href="copyright.htm">copyright</a></td>
        </tr>
      </table>
          <table class="wd100">
            <tr>
              <td class="c">
                <a href="https://www.w3.org/html/logo/" target="_blank"><img class="html5logo" src="https://www.html-5-tutorial.com/images/html5-badge-h-css3-semantics.gif" width="145" height="64" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics"></a>
              </td>
              <td class="cm lr">
                <p><a href="javascript:bookmark_us('https://www.html-5-tutorial.com/','Html-5-tutorial.com - A tutorial for beginners')"><strong>Bookmark html-5-tutorial.com</strong></a><br><span class="xsm">(In Chrome press <strong>Ctrl-D</strong>)</span></p>
              </td>
            </tr>
          </table>
          <p class="copy">You may need to upgrade your browser to <a href="https://windows.microsoft.com/en-US/internet-explorer/products/ie/home" target="_blank">IE 9.0</a>, <a href="https://www.google.com/chrome" target="_blank">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">FireFox</a>.<br>Older browsers, most notably IE 8.0 and earlier, do not support HTML5.</p>
          <meta itemprop="browserRequirements" content="All browsers except IE6 and earlier.">
          <address><a href="copyright.htm">&copy; <script>print_year()</script></a> <a href="https://plus.google.com/114814659207265399196/posts" rel="author" target="_blank">Duncan Aitken</a> &bull; Barrio Jucanya, Panajachel, Guatemala C.A. &bull; <a href="https://www.atitlandesign.com" target="_blank">Atitlan Design</a> &bull; <script>print_mail_to_link()</script></address>
      </footer>
    </article>
  </div>
    <aside>
      <div class="gplus">
        <!-- Place this tag where you want the +1 button to render -->
        <div class="g-plusone" data-size="medium" data-href="https://www.html-5-tutorial.com/"></div>
        <p class="gplus">Be my hero!</p>
        <!-- Place this render call where appropriate -->
        <script>
          (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
          })();
        </script>
      </div>
      <div class="translate">
        <div id="google_translate_element"></div>
        <script>
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en'
            }, 'google_translate_element');
          }
        </script>
      </div>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391688&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <aside class="c">
      <a href="https://www.bluehost.com/track/html5tutorial/a_ad" target="_blank">
        <img src="images/bh-300x250-03-dy.png" class="bluehost" height="250" width="300" alt="bluehost" title="This site is hosted with bluehost.">          <br>
          <span class="bluehost">This site is hosted with bluehost.</span></a>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391689&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391690&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The form element - HTML5 tutorial</title>
    <meta name="description" content="The form element gives website visitors the ability to interact with the site. We know them mostly as simple email forms, but that is just the beginning of what they can do.">
    <!-- The Cascading Style Sheet (CSS) file mycss.css is where I set colors, fonts, spacing etc. - what is called "style". HTML is for "content". -->
    <link rel="stylesheet" href="mycss.css"> 
    <link rel="glossary" href="glossary.htm">
    <link rel="copyright" href="copyright.htm">
    <link rel="prefetch" href="https://www.html-5-tutorial.com/input-element.php">
    <script src="scripts/allscripts.js"></script>
    <!-- The following makes older IEs (< IE9) work with new HTML5 tags. Include it in the head elements just as I do here. -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Google Analytics --> 
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-10200228-1']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'https://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
   </script>
   <style type="text/css">
      span.answerbox { border: 2px solid #23223E; padding: 0 5px 0 5px; }
      table.num {  border-collapse: collapse; border-spacing: 0; }
      table.num div { background-image: url(images/numbers.gif); background-repeat: no-repeat; margin-top: 11px; }
      p.grey, dl.grey dt, dl.grey dd, dl.grey a { background-color: transparent; color: #ececec; }
      div.casea { width: 10px; height: 20px; background-position: -0px; }
      div.caseb { width: 10px; height: 20px; background-position: -40px; }
      div.casec { width: 10px; height: 20px; background-position: -130px; }
      div.cased { width: 10px; height: 20px; background-position: -170px; }
   </style>
  </head>
  <body  itemscope itemtype="https://schema.org/WebApplication" onload="window.scroll(0,800)"><!-- Throughout the site you will see tags with itemscope, itemtype=" " and itemprop=" ". This has to do with Rich Snippets that help with SEO. As a beginner don't worry about them. They are still in development. Hopefully by the time you need to use them they will be easier to implement. -->
    <!-- BuySellAds Ad Code -->
    <script type="text/javascript">
    (function(){
      var bsa = document.createElement('script');
         bsa.type = 'text/javascript';
         bsa.async = true;
         bsa.src = 'https://s3.buysellads.com/ac/bsa.js';
      (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
    })();
    </script>
    <!-- End BuySellAds Ad Code -->
    <div class="left">
    <!-- The row across the top of the page -->
    <header>
    <a href="https://www.html-5-tutorial.com/"><img src="images/html-5-tutorial.gif" alt="HTML5 tutorial - The form element." height="100" width="900"></a>
    </header>

    <!-- The links down the left -->
    <nav>
      <ul>
        <li><a href="https://www.html-5-tutorial.com/">home</a></li>
        <li><a href="start-html5-tutorial.htm">start tutorial</a></li>
        <li><a href="about-html.htm">what is HTML?</a></li>
        <li><a href="about-html5.htm">what is HTML5?</a></li>
        <li><a href="what-its-not.htm">what it's not</a></li>
        <li><a href="doctype.htm"><code>&lt;doctype&gt;</code></a></li>
        <li><a href="html-tag.htm"><code>&lt;html&gt;</code></a></li>
        <li><a href="head-tag.htm"><code>&lt;head&gt;</code></a></li>
        <li><a href="body-tag.htm"><code>&lt;body&gt;</code></a></li>
        <li><a href="h1-h6-tags.htm"><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code></a></li>
        <li><a href="p-tag.htm"><code>&lt;p&gt;</code></a></li>
        <li><a href="ul-ol-tags.htm"><code>&lt;ul&gt;</code>  &amp; <code>&lt;ol&gt;</code></a></li>
        <li><a href="dl-tag.htm"><code>&lt;dl&gt;</code></a></li>
        <li><a href="a-tag.htm"><code>&lt;a&gt;</code></a></li>
        <li><a href="table-tag.htm"><code>&lt;table&gt;</code></a></li>
        <li><a href="strong-and-b-elements.htm"><code>&lt;strong&gt;</code> &amp; <code>&lt;b&gt;</code></a></li>
        <li><a href="div-tag.htm"><code>&lt;div&gt;</code></a></li>
        <li><a href="div-tag-cont.htm"><code>&lt;div&gt;</code> cont.</a></li>
        <li><a href="header-element.htm"><code>&lt;header&gt;</code></a></li>
        <li><a href="nav-element.htm"><code>&lt;nav&gt;</code></a></li>
        <li><a href="article-element.htm"><code>&lt;article&gt;</code></a></li>
        <li><a href="footer-element.htm"><code>&lt;footer&gt;</code></a></li>
        <li><a href="aside-element.htm"><code>&lt;aside&gt;</code></a></li>
        <li><a href="section-element.htm"><code>&lt;section&gt;</code></a></li>
        <li><a href="image-element.htm"><code>&lt;img&gt;</code></a></li>
        <li><a href="image-element-cont.htm"><code>&lt;img&gt;</code> cont.</a></li>
        <li><a href="map-and-area-elements.htm"><code>&lt;map&gt;</code> &amp; <code>&lt;area&gt;</code></a></li>
        <li><strong><a href="form-element.php"><code>&lt;form&gt;</code></a></strong></li>
        <li><a href="input-element.php"><code>&lt;input&gt;</code></a></li>
      <li><a href="domain.php">get a domain</a> <b class="red sm">NEW</b></li>
      <li><a href="server.htm">get a server</a> <b class="red sm">NEW</b></li>
      <li><a href="signup-bluehost.htm">signing up</a> <b class="red sm">NEW</b></li>
        <li><a href="blog.htm">blog</a></li>
        <li><a href="all-html-tags.htm">all HTML5 tags</a></li>
        <li><a href="helpful-links.htm">helpful links</a></li>
        <li><a href="glossary.htm">glossary</a></li>
          <li><a href="contact.php">contact</a></li>
        </ul>
    </nav>
    <article>
      <nav class="pvnx"><a href="map-and-area-elements.htm">previous</a> &bull; <a href="form-element.php" class="noshow">the form element</a> &bull; <a href="input-element.php">next</a></nav>
      <h1 itemprop="name"><strong itemprop="description"><a itemprop="url" href="https://www.html-5-tutorial.com/form-element.php" class="noshow">The form element</a></strong></h1>
      <img itemprop="image" class="showcode" src="images/form-element.gif" alt="The form element" height="217" width="296">
      <p>In general when building a site:</p>
      <dl>
        <dt>You first want to get people <b>to</b> the site.</dt>
          <dd><em>Traffic</em> can come from word of mouth, social media, advertising, search engines, etc.</dd>
        <dt>Then you want to keep them <b>on</b> the site.</dt>
          <dd>You don't want them to <em>bounce</em> &ndash; to visit one page, not find what they are looking for and go somewhere else.</dd>
        <dt>Finally you want them to <b>do</b> something.</dt>
          <dd>You want them to buy a product, make a reservation, register for something, etc. This is called a <em>conversion</em>.</dd>
      </dl>
      <p>Getting conversions often <strong>entails the use of forms.</strong></p>
      <p>No doubt at one time or another you have filled out an online form something like the following:</p>
            <form action="form-element.php" method="post">
        <table>
          <tr>
            <td>
              <p><b>Name:</b></p>
            </td>
            <td>
              <!-- Here I put the input tag in p tags to keep spacing consistent, but they don't need to be in p tags. -->
              <p><input type="text" name="name" size="35" maxlength="35" value=""></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Your email:</b></p>
            </td>
            <td>
              <p><input type="text" name="email" size="35" maxlength="35" value=""> <b>*</b></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><b>Comments:&nbsp;</b></p>
            </td>
            <td>
              <p><textarea name="comments" rows="3" maxlength="100" cols="50"></textarea></p>
            </td>
          </tr>
          <tr>
            <td>
              <table class="num">
                <tr>
                  <td>
                    <div class="casea"></div>
                  </td>
                  <td>
                    <div class="casec"></div>
                  </td>
                  <td>
                    <p><b>+</b></p>
                  </td>
                  <td>
                    <div class="caseb"></div>
                  </td>
                  <td>
                    <div class="cased"></div>
                  </td>
                  <td>
                    <p><b>=</b></p>
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <input type="hidden" name="casea" value="5">
              <input type="hidden" name="caseb" value="4">
              <p class="sm"><input type="text" name="arith" size="2" value=""> This is so I know a human is filling out the form. *</p>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <p><input type="submit" name="submit" value=" Submit "></p>
              <input type="hidden" name="submitted" value="True">
            </td>
          </tr>
        </table>
      </form>
      <p>This form sends you an email. Go ahead and try it.</p>
      <p>Below is the opening tag of the form above.</p>
      <p><code>&lt;form <mark>action="form-element.php"</mark> method="post"&gt;</code></p>
      <p>The <strong>action</strong> attribute tells the browser what to do when the "Submit" button is clicked.</p>
      <ol>
        <li>First it sends a message back to the server with the data that was entered into the form.</li>
        <li>The server then finds the file indicated in the action attribute &ndash; this page/file: "form-element.php".<b>**</b></li>
        <li>It takes the data and does what the <i>instructions</i> in the file tell it to do.</li>
        <li>Finally it sends the page back to the client and the browser reloads it.</li>
      </ol>
      <p id="multiply">You will notice that this page has a ".php" extension, rather than ".htm" like most of the rest of the pages on this site. This page contains both HTML and <span class="define">PHP</span> and therefore has a ".php" extension.<b>***</b> I include PHP code because HTML <b>only displays</b> content. The PHP makes forms <b>function</b>. The <i>instructions</i> mentioned in the list above are written in PHP.</p>
      <p>In computer science terms HTML is a <span class="define">markup language</span>, not a <span class="define">programming language</span><b>****</b> such as <span class="define">Javascript</span> or in this case, <strong>PHP</strong>. The browser knows to display the HTML just as it would with an ".htm" extension.</p>
      <p>HTML can't multiply two numbers. For that you need a <q>programming language</q> such as PHP. However, you can't display content with PHP. That is HTML's function &ndash; with the help of CSS.</p>
            <!-- https://wiki.answers.com/Q/What_does_PHP_stand_for https://php.net/manual/en/faq.general.php -->
      <form action="form-element.php" method="post">
        <p><input type="text" size="3" name="firstnumber" maxlength="8" value="10000000"> <b>x</b> <input type="text" size="3" name="secondnumber" maxlength="8" value="10000000"> = <span class="answerbox">100000000000000</span>
        <input type="submit" value=" Multiply "></p>
        <input type="hidden" name="multiply" value="true">
      </form>
      <p>Let's go through the three steps above to see how this form works.</p>
      <ol>
        <li>When you click "Multiply" the browser takes the contents of the two boxes and sends it to the server.</li>
        <li>The server then finds the file in the action attribute &ndash; again, this page/file: form-element.php.</li>
        <li>Then, following a set of instructions I wrote in PHP, the server does the math and saves the answer.</li>
        <li>Lastly it sends the data back to the client and the page reloads with the answer displayed in the box.</li>
      </ol>
      <dl>
        <dt>To generate the answer box above the server sent:</dt>
          <dd><code>&lt;span class="answerbox"&gt;<mark>100000000000000</mark>&lt;/span&gt;</code></dd>
        <dt>But what I actually wrote is:</dt>
          <dd><code>&lt;span class="answerbox"&gt;<mark>&lt;?php print $answer; ?&gt;</mark>&lt;/span&gt;</code></dd>
      </dl>
      <p>Now is not the time to learn PHP, but it is important to have a general idea of how HTML, CSS and programming languages work together. There are all kinds of programming languages, and I highly recommend learning at least one, but you should know HTML to use those languages to their fullest potential.</p>
      <p>The form element has a second attribute: <code>method=".."</code>. The method tells the browser <b>how</b> to send the content of the form back to the server. The <code>post</code> method, used in the previous two forms, hides the data. The <code>get</code> method appends the data to the end of the URL.</p>
      <p><code>&lt;form action="form-element.php" <mark>method="get"</mark>&gt;</code></p>
      <p>To see a <code>get</code> in action fill in your first name and click "Submit".</p>
      <form action="form-element.php" method="get">
        <p><b>Your name:</b> <input type="text" size="30" maxlength="30" name="your_name" value=""></p>
        <input type="submit" value=" Submit ">
      </form>
      <p class="grey">Hello <b></b>,</p>
      <dl class="grey">
        <dt>Notice that the URL of this page is now:</dt>
          <dd>https://www.html-5-tutorial.com/form-element.php<b></b></dd>
        <dt>You can send that URL in an email or use it in a link on a web page.</dt>
          <dd><a href="https://www.html-5-tutorial.com/form-element.php">https://www.html-5-tutorial.com/form-element.php</a>.</dd>
      </dl>
      <p>While it's good to know what a <code>get</code> is, unless there are overriding reasons not to, I recommend using the <code>post</code> method. The <code>get</code> method is like that weird screwdriver you hardly ever need, but when you do, it's the only tool for the job.</p>
      <p>Unlike TV or print, on the net communication is not a one way street. Visitors can send information back to you via your server. Forms are the principal mechanism web designers use to get clients to do just that. Unfortunately, this opens all kinds of security issues for both visitors and designers.</p>
      <p>While many of you filled out the second and third forms, I imagine most of you were hesitant to fill out the first. For all you know I could be some spammer soon to be sending you emails concerning the estate of my late uncle, the ex Nigerian Minister of Finance. I am not a spammer and my uncle sold tractors for a living &ndash; but the nature of the net is such that you never know.</p>
      <p>Trust is everything. No one with any sense is going to fill out a form without having a reasonable degree of confidence that what they send won't be misused, nor should they. The ongoing &ndash; indeed unrelenting efforts of the dead minister's extended family speaks to the fact that there are plenty of idiots out there, but vast majority of us know better.</p>
      <p>Web designers have to be careful too. Forms can be vulnerable. I do everything I can to prevent the use of these form for anything other than their intended purpose. Unfortunately, hackers are every bit as unrelenting as the minister's family &ndash; and much smarter.</p>
      <p>That said, there are ways to protect both your clients and your forms from hackers. Some are low tech. In the first form, as long as I don't save any email addresses (and I don't), no one can hack into the server and steal them. Some are high tech &ndash; and beyond my skills to write, however there are free programs you can download and use to process your forms.</p>
      <p>The use of one of the three forms above would not be considered a conversion. In fact, this site is unusual in that I am not trying to get visitors to fill out a form; however the ultimate goal of most sites is to build email lists, to request donations, to sell something &ndash; to get <em>conversions</em>.</p>
      <p>All too often web designers spend too much time on bells and whistles and forget that the point of the exercise is to get people to <b>do something</b>. As a rule it's a simple form on a simple page that brings home the bacon.</p>
      <nav class="pvnx"><a href="map-and-area-elements.htm">previous</a> &bull; <a href="form-element.php" class="noshow">the form element</a> &bull; <a href="input-element.php">next</a></nav>
    <div class="glossary">
      <div class="glossaryl">
        <section title="PHP">
          <h2 class="sec"><strong class="define">PHP</strong></h2>
          <p><dfn>PHP is a general-purpose server-side scripting language originally designed for Web development to produce dynamic Web pages.<br>
          <a href="https://en.wikipedia.org/wiki/PHP" target="_blank">wikipedia</a> &middot; <a href="https://php.net/manual/en/faq.general.php">php.net/faq</a></dfn></p>
        </section>
        <section title="Markup Language">
          <h2 class="sec"><strong class="define">Markup Language</strong></h2>
          <p><dfn>A markup language is a language that annotates text so that the computer can manipulate the text.<br>
          <a href="https://webdesign.about.com/od/htmlxhtmltutorials/p/what-are-markup-languages.htm">about.com</a> &middot; <a href="https://en.wikipedia.org/wiki/Markup_Language">wikipedia</a></dfn></p>
        </section>
      </div>
      <div class="glossaryr">
        <section title="Programming Language">
          <h2 class="sec"><strong class="define">Programming Language</strong></h2>
          <p><dfn>A programming language is an artificial language designed to communicate instructions to a computer.<br>
          <a href="https://en.wikipedia.org/wiki/Programming_language">wikipedia</a></dfn></p>
        </section>
        <section title="Javascript">
          <h2 class="sec"><strong class="define">Javascript</strong></h2>
          <p><dfn>A scripting programming language most commonly used to add interactive features to webpages.<br>
          <a href="https://en.wiktionary.org/wiki/JavaScript">wiktionary.org</a> &middot; <a href="https://en.wikipedia.org/wiki/Javascript" target="_blank">wikipedia</a></dfn></p>
        </section>
      </div>
    </div>
      <p class="sm"><b>*</b> Required &ndash; I do not save any email addresses that are entered into this form. <a href="privacy-policy.htm" title="Privacy Policy">Privacy Policy</a>.</p>
      <p class="sm"><b>**</b> The action attribute can call a file other than the one the form is in. I have the PHP code that processes the forms saved in this file but the PHP can be in a separate file if you prefer.</p>
      <p class="sm"><b>***</b> If you look at the source code you won't see the PHP. It's in the file I saved on the server, but that code is <i>executed</i> on the server and only the HTML &ndash; often having been modified by the PHP &ndash; is sent to the client.</p>
      <p class="sm"><b>****</b> Most programming languages used on the net, such as <b>PHP</b>, are called "scripting languages". For most beginners it is a distinction without a difference, but if you are or plan to become a programmer you should know this. To learn more go to: <a href="https://en.wikipedia.org/wiki/Scripting_language" target="_blank">https://en.wikipedia.org/wiki/Scripting_language</a></p>
      <!-- The row on the bottom -->
      <footer> 
      <h2><strong><a href="form-element.php" class="botlink">the form element</a></strong></h2>
      <p>"May the line of least resistance lead me on." Delbert McClinton</p>
      <aside class="blue">
        <p><a href="https://www.bluehost.com/track/html5tutorial/form_txt" target="_blank" class="bluehost">This site is hosted with blue<b>host</b>.</a></p>
    </aside>
      <table class="wd100">
        <tr>
          <td class="sm c wd33"><a href="privacy-policy.htm">privacy policy</a></td>
          <td class="sm c"><a href="about-html-5-tutorial.htm">about html-5-tutorial.com</a></td>
          <td class="sm c wd33"><a href="copyright.htm">copyright</a></td>
        </tr>
      </table>
          <table class="wd100">
            <tr>
              <td class="c">
                <a href="https://www.w3.org/html/logo/" target="_blank"><img class="html5logo" src="https://www.html-5-tutorial.com/images/html5-badge-h-css3-semantics.gif" width="145" height="64" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics"></a>
              </td>
              <td class="cm lr">
                <p><a href="javascript:bookmark_us('https://www.html-5-tutorial.com/','Html-5-tutorial.com - A tutorial for beginners')"><strong>Bookmark html-5-tutorial.com</strong></a><br><span class="xsm">(In Chrome press <strong>Ctrl-D</strong>)</span></p>
              </td>
            </tr>
          </table>
          <p class="copy">You may need to upgrade your browser to <a href="https://windows.microsoft.com/en-US/internet-explorer/products/ie/home" target="_blank">IE 9.0</a>, <a href="https://www.google.com/chrome" target="_blank">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">FireFox</a>.<br>Older browsers, most notably IE 8.0 and earlier, do not support HTML5.</p>
          <meta itemprop="browserRequirements" content="All browsers except IE6 and earlier.">
          <address><a href="copyright.htm">&copy; <script>print_year()</script></a> <a href="https://plus.google.com/114814659207265399196/posts" rel="author" target="_blank">Duncan Aitken</a> &bull; Barrio Jucanya, Panajachel, Guatemala C.A. &bull; <a href="https://www.atitlandesign.com" target="_blank">Atitlan Design</a> &bull; <script>print_mail_to_link()</script></address>
      </footer>
    </article>
  </div>
    <aside>
      <div class="gplus">
        <!-- Place this tag where you want the +1 button to render -->
        <div class="g-plusone" data-size="medium" data-href="https://www.html-5-tutorial.com/"></div>
        <p class="gplus">Be my hero!</p>
        <!-- Place this render call where appropriate -->
        <script>
          (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
          })();
        </script>
      </div>
      <div class="translate">
        <div id="google_translate_element"></div>
        <script>
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en'
            }, 'google_translate_element');
          }
        </script>
      </div>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391688&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <aside class="c">
      <a href="https://www.bluehost.com/track/html5tutorial/a_ad" target="_blank">
        <img src="images/bh-300x250-03-dy.png" class="bluehost" height="250" width="300" alt="bluehost" title="This site is hosted with bluehost.">          <br>
          <span class="bluehost">This site is hosted with bluehost.</span></a>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391689&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <aside>
      <script type="text/javascript" src="//ap.lijit.com/www/delivery/fpi.js?z=391690&u=html5tutorial&width=300&height=250"></script>
    </aside>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>