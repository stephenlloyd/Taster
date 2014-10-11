# Builting a Motivation Poster Website in a weekend!

We'll build a website that allows you to create a motivational poster using an image and text that the user inputs.

![twain](https://github.com/makersacademy/course/raw/master/day_one/images/twain.png)

This is what the website will look like when you build it.

![motivational](https://github.com/makersacademy/course/raw/master/day_one/images/motivational_sample.png)

You're strongly encouraged to type in all code instead of copy-pasting it. This will really help your understanding of how everything works.

We can't stress this enough. Copy and Paste is the DEVIL!! Even though at times you will be copying chunks of code, the simple process of typing it yourself will help you learn. Trust us. You can't cut corners.

## What you'll need

1. [Google Chrome browser](http://www.google.co.uk/chrome/). It's very well suited to web development ( _Safari; bundled with your Mac will do fine as well though_ ).
2. [SublimeText editor](http://www.sublimetext.com). This is a very convenient text editor that we'll be using.
3. Make sure you know how to run Terminal (it's already installed on every Mac). Find it in your Applications (in the Utilities folder) and launch it. ![finder](https://github.com/makersacademy/course/raw/master/day_one/images/finder.png)
4. XCode command line tools (:pill: [Installing XCode](https://github.com/makersacademy/course/blob/master/pills/installing_xcode.md) ).
5. Once you have installed XCode, install Heroku Toolbelt from https://toolbelt.heroku.com/ 
6. Install RVM (:pill: [Installing RVM](https://github.com/makersacademy/course/blob/master/pills/installing_rvm.md) ).

## Version 0: Create a walking skeleton

Create a new directory on your desktop called "motivational-posters" (note the hyphen). Launch Sublime Text editor that you installed before and open this directory by choosing File->Open. 

You should see a window like this.

![subl](https://github.com/makersacademy/course/raw/master/day_one/images/subl.png)

This is the directory where all our files for our web page will be stored. Let's begin by creating a file called app.rb. The .rb extension means that this is going to be a Ruby file. Ruby is a programming language that many websites are built with. Today we'll be using a tiny bit of Ruby but our website will be built using mostly Javascript – another programming language.

Right click the folder name and create a new file.

![new_file](https://github.com/makersacademy/course/raw/master/day_one/images/new_file.png)

Sublime Text will create an untitled file first. Press `Cmd-S` to save it as app.rb.

Let's create the most basic web page first. It will show the text `"Hello, world!"`. Put this into the app.rb.

```` ruby
require 'sinatra'

get '/' do
    "Hello, world"
end
````

We'll get back to what this means in a second. Let's see if it works first.

Open the Terminal. It will look like this.

![term](https://github.com/makersacademy/course/raw/master/day_one/images/term.png)

The Terminal is a text-based interface for interacting with your computer. It's also called the command line, the shell or the CLI (command-line interface). It's used by all web developers on a daily basis. It may seem strange to use a text-based interface at first (after all, we've got beautiful graphical interface on a Mac) but it's actually very convenient once you get used to it.

In the Terminal you're always in some directory, just like you're always viewing contents of some directory in Finder. Let's open the directory we need in the Terminal. Type this command:

`cd ~/Desktop/motivational-posters`

Note that there's a space after cd. The cd commands stands for "change directory". After the command is the address of the directory that we just created a few minutes ago. The "~/Desktop" is your Desktop (yes, it's just a normal directory) and "motivational-posters" is what we have created for our project.

Now that we're in the motivational-posters directory, let's install some more software that we'll need. First, type ruby -v to make sure you've got Ruby installed. The Terminal should look like this.

![term_ruby](https://github.com/makersacademy/course/raw/master/day_one/images/term_ruby.png)

In this case, the version of Ruby is 2.0.0.p0. If yours is different, for example, 1.9.3 or 1.8.6 it isn't a problem. If you don't see the version number, it means you haven't got Ruby installed and you need to go back to the installation instructions.

Now let's install the software that we'll need. To build a website, we'll need something called a framework. This is a piece of software that acts as a bridge between your code and the browser. It will read the app.rb file and make sure it's available in the browser. Let's install it. Type this in the Terminal to install a framework called Sinatra.

`gem install sinatra`

You should see something like this (it may take a minute).

![sinatra_gem](https://github.com/makersacademy/course/raw/master/day_one/images/sinatra_gem.png)

Now that you've got Sinatra, let's launch our "Hello, world" website. Type this in the Terminal to run the app.rb file.

`ruby app.rb`

Now you're telling your Ruby to execute the file that we've created earlier.  You should see this in the Terminal (the previous lines that we typed were cleared because they are no longer relevant).

![sinatra](https://github.com/makersacademy/course/raw/master/day_one/images/sinatra.png)

This message means that your website is up and running at the address `localhost:4567` (note the last line). This is a special address that is used for running websites locally. (If your website starts on the address `localhost:3000`, it's ok as well, just use that address). Now open a new browser window and type this address in. You should see "Hello, world".

![localhost](https://github.com/makersacademy/course/raw/master/day_one/images/localhost.png)

If you see this, you've just made your first step towards developing your first website! This doesn't look like a website yet but it's actually a fully functioning website that we'll be extending and improving until we are happy with the result.

Let's get back to the contents of the app.rb file. Here's what it looks like.

````ruby
require 'sinatra'

get '/' do
  "Hello, world"
end
````

As we mentioned above, this is a Ruby file, that is, a programme written in a programming language called Ruby. It's very simple. On the first line we tell Ruby to use the Sinatra framework that we've installed previously. Then, on line 3 we're telling it that when we go to the index page of the website (the last "/" in "localhost:4567/"), it should display "Hello, world" on this page. This is exactly what we're seeing in the browser.

Let's practice changing this page. Go back to the terminal and stop your server by pressing Ctrl-C. You should see "Sinatra has ended his set" message.

![sinatra_stop](https://github.com/makersacademy/course/raw/master/day_one/images/sinatra_stop.png)

Now go back to app.rb in Sublime Text and change the text to "Motivational Posters". Pay attention to the quotes around the text, they are important and they must be the same, that is, either single or double quotes but both of the same type.

````ruby
require 'sinatra'

get '/' do
  "Motivational Posters"
end
````

Now go back to the terminal and start your website again.

`ruby app.rb`

Refresh the page in the browser and you should see the new text.

![motivational](https://github.com/makersacademy/course/raw/master/day_one/images/motivational.png)

**That was all for our first version, great job!**

## Version 1: Let's build the front end

Now we have a very simple but functioning website. Let's add some HTML to it to make in more interesting.

HTML stands for Hypertext Markup Language. This is the language that is used to create webpages. All websites you're using daily are built using HTML.

It's inconvenient to put our HTML right into app.rb. It will be easier to create a separate file. Just like you created app.rb in Sublime Text, create a folder called `views` and a file index.erb inside it. Your project now should look like this.

![index_erb](https://github.com/makersacademy/course/raw/master/day_one/images/index_erb.png)

Why don't we move the text `"Motivational Posters"` from our app.rb into this file?

![index_erb_motivational](https://github.com/makersacademy/course/raw/master/day_one/images/index_erb_motivational.png)

One last thing we need to do is to tell the app.rb file to actually use this file. Update your Ruby code to this.

````ruby
require 'sinatra'

get '/' do
  erb :index
end
````

Line 4 here means: take the contents of index.erb and output it to the browser. What about the views folder? Sinatra looks there by default: it's where most developers using Sinatra keep HTML files, so you don't have to specify it.

Restart your website as you've done before (Ctrl-C and then ruby app.rb again) and refresh the browser. It should look exactly like before.

Now let's add some real HTML into index.erb. Every HTML file must have the following structure.

````html
<!DOCTYPE html>
<html>
<head>
  <title>Title of the website</title>
</head>
<body>
  
</body>
</html>
````

Replace the contents of the index.erb with this HTML code.

````html
<!DOCTYPE html>
<html>
<head>
  <title>Motivational Posters</title>
</head>
<body>
  <h1>Motivational Posters</h1>
  <p>By Tonight I'll have a fully functioning website!</p>
</body>
</html>
````

Go back to the browser (no need to restart the website this time, it's only necessary if you modify app.rb). You should see this.

![localhost_motivational](https://github.com/makersacademy/course/raw/master/day_one/images/localhost_motivational.png)

If you see this, you know you're on the right track: your website is up and running and it loads HTML code from index.erb.

## Version 2: Adding some style

CSS (stands for Cascading Style Sheets) is the technology that is used to define how your website looks. Right now it doesn't look anything special: black text on a white background but if we add a little bit of CSS, it'll be different.

Let's choose the background for our website first. Go to [Subtle Patterns](http://subtlepatterns.com) and choose any background that you like. It will help if your background is light, and not dark. Download the background you chose from the website and unzip it. There will be two images there and a `readme` file. For example, this is the background I chose (unzipped).

![ricepaper](https://github.com/makersacademy/course/raw/master/day_one/images/ricepaper.png)

Take the smaller of the two images (ricepaper_v3.png) in this example and put it in the `public/images` folder in motivational-posters directory (use Finder to do it). You'll need to create the folders `public` and `images` first. After you do this, your project will look like this.

![index_erb2](https://github.com/makersacademy/course/raw/master/day_one/images/index_erb_2.png)

Now let's set this image as the background for our website. Update line 6 in index.erb to do this.

![index_erb3](https://github.com/makersacademy/course/raw/master/day_one/images/index_erb_3.png)

We have just added some CSS code to tell the browser that the body of our page, that is, everything that's visible on the screen, should use the file that we put into the images folder as the background image. Our page now looks like this.

![browser1](https://github.com/makersacademy/course/raw/master/day_one/images/browser_1.png)

I bet you can see where it's going. By adding various CSS rules one after another we will make our website look good in almost no time!

Even though we can put CSS in the HTML file, it's inconvenient. We'll be writing a lot of CSS, so let's put it into a separate file. Create a folder `css` inside the `public` folder and then create a file application.css inside `public/css`. Your project structure will look like this.

![appcss](https://github.com/makersacademy/course/raw/master/day_one/images/appcss.png)

Now let's move our CSS code from the HTML file into here. Remove the CSS from index.erb, so that the `<body>` tag has no attributes:

`<body>`

Then add this CSS into public/css/application.css:

````css
body {
  background-image: url(/images/ricepaper_v3.png)
}
````

Obviously, you'll need to replace ricepaper_v3.png with another filename if you have chosen a different background.

This CSS code tells the browser that this background image should be used for the `body` element in HTML. However, if you refresh your browser right now, there will be no background at all. This is because we haven't told the browser to use this CSS file.

In order to tell the browser to load CSS directives from a different file, we need to link the HTML file to the CSS file. You can do it by adding this line to the <head> section of your HTML (partial index.erb shown):

````html
<head>
  <link href="/css/application.css" rel="stylesheet" type="text/css">
  <title>Motivational Posters</title>
</head>
````

This tells the browser that when rendering this web page, it should use the file application.css in the css folder. It also tells the browser that it's a stylesheet (that is, a file that determines what the webpage looks like) and it's of a CSS type.

If you refresh the browser now, you should see your background again. This time it will be defined in an external CSS file.

![browser1](https://github.com/makersacademy/course/raw/master/day_one/images/browser_1.png)

## Version 3: Adding some logic into the application

Now it's time to add some real content to the website. By now you already have a general understanding of how HTML tags work but if you're confused by anything, please ask.

Let's start by adding the header section with some text to our HTML file. Put this in the `<body>` section of index.erb, deleting what we have there.

````html
<header>
    <h1>Motivational posters</h1>
  </header>
````

Now your webpage should just have one header.

![header](https://github.com/makersacademy/course/raw/master/day_one/images/motivational_header.png)

Let's add some more content. Let's add the first section on our website. The finished section should look like this.

![kitten_select](https://github.com/makersacademy/course/raw/master/day_one/images/kitten_select.png)

It will have a header, some text, an input box, a button, an area for search results and Google's branding in the lower right corner (required by the terms and conditions of Google Image Search).

Let's use the `<section>` tag to create section 1. Put this code directly between the closing `</header>` tag and the closing `</body>` tag.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
</section>
````

It's very similar to the `<header>` element above it but it has two differences. First is that the we're using the `h2` tag for the actual header, instead of `h1`. This will make it a little bit smaller (`h1` is the biggest, `h6` is the smallest). The second difference is that we are giving this section an id of "select-image". The reason is that we'll have several sections and we'll need to differentiate between them later on. We'll be using the id values to refer to elements from CSS files.

Then let's add some text. Let's use the `<p>` tag to add it.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
  <p>Enter the keyword to search for images</p>
</section>
````

Now your web page looks like this.

![select_image](https://github.com/makersacademy/course/raw/master/day_one/images/select_image.png)

Don't worry that it doesn't look exactly like it'll look at the very end. This is because we haven't added the CSS yet. For now let's make sure we have the elements that we need on the page.

Let's now add the input field for our keyword.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
  <p>Enter the keyword to search for images</p>
	<input id="search-term" type="text">
</section>
````

The input field that you can type things in is created by the `<input>` tag. There may be many different types of input tags, the one that looks like a search box is the one that has `type="text"`. We also give it an `id`, so that we could add some CSS later.

Once you have added the input fields, add the button. Not surprisingly, you can use the `<button>` tag to do it. As with other elements, let's give it some `id`.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
  <p>Enter the keyword to search for images</p>
  <input id="search-term" type="text">
  <button id="go-search">Go!</button>
</section>
````

These are all elements that we'll need to search for images but we don't have any place to display what we'll find. Let's create an empty element for that.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
  <p>Enter the keyword to search for images</p>
  <input id="search-term" type="text">
  <button id="go-search">Go!</button>
  <div id="search-results"></div>
</section>
````

The `<div>` element is just a generic element without any special significance. Since it's empty, it won't be visible on the page but it's important it exists because we'll be putting the search results in there. Last, but not least, let's add another empty element for Google branding. This is the requirement of Google Image Search.

````html
<section id="select-image">
  <h2>Step 1. Select an image</h2>
  <p>Enter the keyword to search for images</p>
  <input id="search-term" type="text">
  <button id="go-search">Go!</button>
  <div id="search-results"></div>
  <div id="branding"></div>
</section>
````

So, this is what our application looks like right now.

![select_image_2](https://github.com/makersacademy/course/raw/master/day_one/images/select_image_2.png)

### Adding some Javascript

Javascript is the programming language that the browser uses. While Ruby is used by your computer (what you run in the Terminal), Javascript is run by your browser right inside of the web page, so you can use it to add dynamic behaviour to your pages.

In this case we'll add some Javascript to fetch the images from Google Image Search and display them on our page.

Let's begin by creating one more folder, `public/javascript`, for our javascript files. Create two files inside: `support.js` and `application.js`.

The first file, `support.js` will contain some javascript that we wrote for you for this project. It is slightly more complex than the other stuff, so we'll leave it until the end. This file does two things: actually performs a Google Image Search and saves the parameters of the form in the url, so we could tweet it later without losing out motivational image (we'll get to this functionality later).

For now just take the contents of this file from [Github](https://github.com/makersacademy/course/raw/master/day_one/support.js) and copy-paste it into the `support.js` file in your project - don't worry about using Copy-Paste just this once :). Leave the `application.js` empty for a moment.

Now let's link our JS files to the HTML file using a very similar technique that we used to link CSS files to HTML. Add these four lines into the `<head>` section of your index.erb.

````html
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script src="/javascript/support.js"></script>        
<script src="/javascript/application.js"></script>
````

Now your `<head>` section looks like this. The first `<script>` tag links to the google server that will actually perform the image search. The second `<script>` tag links to [jQuery](http://jquery.com), a widely used Javascript library that simplified many operations.

````html
<head>
  <link href="/css/application.css" rel="stylesheet" type="text/css">        
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
  <script src="/javascript/support.js"></script>  
  <script src="/javascript/application.js"></script>
  <title>Motivational Posters</title>
</head>
````

However, even though the code is loaded as part of the page, it's inactive right now because we never executed it. Let's see how we can do it.

We want our images to be found when the user clicks the button. The Javascript way of doing it looks like this:

````javascript
$(document).on('click', '#go-search', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});
````

So, what's going on here? In plain English, this should be read like this:

> When an element with the id of "go-search" is clicked in the document, a block of code (function) should be executed that will find images on google using the keyword from the field with id of "search-term" and put them in the area with id of "search-results".

Sounds complex, right? It's actually simpler than it seems. Let's break it down into pieces.

To determine what to do when some event happens, we use this Javascript:

````javascript
$(document).on(event, element, function() {
  // what to do when this event happens on this element
});
````

In this case we want to find images when a "click" event happens on the element with id "go-search". Remember we were giving many elements an `id`? That's exactly what they are needed for: to reference the elements later.

If we want to reference an element by `id`, we just put a hash in front of a name. We call this a **CSS selector**.

So, if we want to do something when a button with a specific id is clicked, we write:

````javascript
$(document).on('click', '#go-search', function() {
  // the action to execute
});
````

Now, what do we want to happen? We want to search Google Images for a given keyword and show the results. Remember we created an input field for the keyword?

````html
<input id="search-term" type="text">
````

It has the `id="search-term"`, so we can reference it using this id to get it's value. To do this, we can use this piece of Javascript.

````javascript
$('#search-term').val()
````

This code means "Take element with id of 'search-term' and give me its value, that is, what's typed inside".

Where do we put the results? Again, remember we created a special area for them?

````html
<div id="search-results"></div>
````

As you can probably guess by now, we can reference this area like this.

````javascript
$("#search-results")
````

Now we have everything we need to tell our browser to get the images from Google and show the results.

````javascript
findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
````

This code asks the browser to go find images on google using whatever is typed into `#search-term` and put the results into `#search-results`. Makes sense?

Now, let's put it all together, so that this code was executed only when the button was pressed.

````javascript
$(document).on('click', '#go-search', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});
````

Now put the code above into application.js and save the file. Refresh your browser, enter the search term and you'll see the results!

![browser2](https://github.com/makersacademy/course/raw/master/day_one/images/browser_2.png)

Impressive, isn't it? Especially that we did very little work to achieve this result.

It still doesn't look exactly like we want it to look at the very end but we'll fix it soon.

## Version 4: Final touches and "getting it out there"

Having a website on your local computer is great but you really want it to be available to everyone on the Internet. Let's deploy it to a remote server, so that you could access it from any computer.

Don't worry that it isn't finished yet. We'll deploy it first to make sure everything is set up correctly and then we'll deploy the updates once we finish the work.

### Register with Heroku

We'll be deploying our website to a platform called [Heroku](http://heroku.com). It's an US company providing free hosting for small websites. The process of putting your website online used to be convoluted but now thanks to Heroku and similar companies it's actually really simple.

Go to [Heroku](http://heroku.com) and register for a new account. Note your email and password, you'll need it in a second.

Once you have the username and password from the website, go to the terminal and run this command to check that [Heroku Toolbelt ](https://toolbelt.heroku.com/)is installed correctly.

````
heroku --version
````

You should see something like

````
heroku-gem/2.35.0 (x86_64-darwin12.3.0) ruby/2.0.0
````

If you get "command not found" message, you will need to install [Heroku Toolbelt ](https://toolbelt.heroku.com/).

You should also check that you have a program called git that is necessary to send your website to Heroku. Run this in the terminal.

````
git --version
````

You should see something like

````
git version 1.7.12.4 (Apple Git-37)
````

Once you have verified that you have heroku and git locally, we need to start preparing for deployment.

### Prepare the project for deployment

We'll need to create two additional files in our project that will be required for deployment.

The first file describes which libraries we use in our project. In our case we're using only one external library – Sinatra (remember you did "gem install sinatra"? That's when we installed it). Create a file called Gemfile ( **it must have a capital G**) in the root directory of the project. Put the following in it:

````ruby
source "https://www.rubygems.org"
gem "sinatra"
````

This means that we're using a single library (or 'gem', in Ruby terminology) called 'sinatra' and it should be downloaded from rubygems.org.

Once you've done that, you need to run this command

````
bundle install
````

If you get the message "bundle: command not found", then we need to install this utility first. Run this:

````
gem install bundler
````

Then, retry running

````
bundle install
````

This will create a Gemfile.lock file that locks downs the versions of your gems (libraries) that will be installed on the remote server. 

The second file we'll need will tell Heroku how to start our website. Create a file called config.ru (all lowercase) and put the following two lines inside:

````ruby
require './app'
run Sinatra::Application
````

This means that to launch this website we need to run a Sinatra application located in `app.rb`.

Finally, we need to prepare our files for deployment. To do this, execute the following commands **while being in the motivational-posters directory in the Terminal** (to explain what exactly is going on here is outside the scope of this first day but we will go through all of this and much more during the full 12 week course at Makers Academy). Type all symbols exactly are they appear (dot, hyphen, both apostrophes).

````
git init
git add .
git commit -m 'first version'
````

### Going live!

Now our files are all bundled together and are almost ready to be sent to Heroku. Now we need to login to Heroku from the terminal. Type

````
heroku login
````

Heroku then will ask you for your username and password (the one that you've set when you registered on the website). It will also ask you if you want to generate a public key (say that you do). After you enter the username and password, you'll be able to create your new website at Heroku. Type this

````
heroku create 
````

Finally, we're ready to deploy. Type this command into the terminal. At this point your website will actually be sent to the web server and become live.

````
git push heroku master
````

You should see something like this as an output.

````
Counting objects: 13, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 675 bytes, done.
Total 7 (delta 4), reused 0 (delta 0)

-----> Ruby/Rack app detected
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using Bundler version 1.3.2
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin --deployment
       Using rack (1.5.2)
       Using rack-protection (1.5.0)
       Using shotgun (0.9)
       Using tilt (1.4.1)
       Using sinatra (1.4.3)
       Using bundler (1.3.2)
       Your bundle is complete! It was installed into ./vendor/bundle
       Cleaning up the bundler cache.
-----> Discovering process types
       Procfile declares types     -> (none)
       Default types for Ruby/Rack -> console, rake, web

-----> Compiled slug size: 25.1MB
-----> Launching... done, v7
       http://tech-bikers-demo.herokuapp.com deployed to Heroku

To git@heroku.com:tech-bikers-demo.git
   fc4d30c..8bdc99d  master -> master
````

If you see it, it means that the deployment went successfully. If you see an error, you're going to have to start Googling the error you get and spending some time on Stack Overflow. Until you see an output like the one shown above, it hasn't worked. Keep trying and don't give up. You need persistence when learning to code :)

Finally, once you've got the confirmation that the app has deployed to Heroku (as per line 25 above), you can type:

````
heroku open
````

into the Command Line and it will be launched in the browser! It should look exactly the same as on your local machine but this time it will have a public URL that you'll be able to use from any computer.

### The second section

Let's now add the second section. It's very similar (actually, much simpler) to the first section, so you already understand how everything works.

````html
<section id="add-text">
  <h2>Step 2. Add Text</h2>
  <input id="text" type="text" value="Curiosity is one of the great secrets of happiness">  
</section>
````

Add it right below the first section in index.erb. We're ignoring the CSS for now because we want to make the website work first and then we'll make it beautiful.

Now, if you refresh the page, it will have both sections in it.

![section_2](https://github.com/makersacademy/course/raw/master/day_one/images/section_2.png)

### Adding the workspace

The third section is very similar but slightly more complex. Here's the first bit. Put this into your index.erb.

````html
<section id="style-image">
  <h2>Step 3. Style it!</h2>
  <div id="workspace">
    <p id="caption"></p>
  </div>
</section>
````

There's nothing new here. First we create a new header ("Step 3. Style it!") and then we create a new area (workplace) where our image and its caption will be. Since the caption needs to be on top of the image, let's put inside the workplace. However, since there's nothing inside yet, it will be invisible (just like our search results area was invisible in the first section).

![section_3](https://github.com/makersacademy/course/raw/master/day_one/images/section_3.png)

### Styling the workspace

Let's now get back to CSS. Our workspace where the image with the caption will appear had a thick dashed red border around it. Let's add some css to style it. Put this into application.css.

````css
#workspace {
  width: 600px;
  min-height: 300px;
  border: 5px dashed red;
  margin: 0 auto;
}
````

This CSS means that the element with the id of "workspace" will have the width of 600 pixels, the minimum height of 300 pixels, it will have a 5 pixels dashed red border around it and it will be centred (margin: 0 auto; means that the space on the left and on the right will be the same, that is, it will be centred).

Now the page looks different. Our workspace is visible: it has dimensions, a border around it and it's centred horizontally.

![css](https://github.com/makersacademy/course/raw/master/day_one/images/css.png)

Now it's a good time to add some Javascript to it. We want the image to be loaded into the workspace after it's thumbnail is clicked. Remember how we dealt with the button click event before? This time it will be very similar. Here's the code.

````javascript
$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  var img = $("<img>").attr('src', url);
  $("#workspace").append(img);
});
````

Let's break it down line by line. You are already familiar with the first line. It says that when an element `#search-results img` (that is, any image inside the search results area) is clicked, the code on lines 2-5 should be executed.

The line 2 simply reads the address of the thumbnail ( $(this) means the thumbnail that was clicked) and saves it into a variable called url. Line 3 finds all images inside #workspace and removes them. Line 4 creates a new empty image element and loads the image from the url variable (from line 2) into it. Finally, line 5 appends the image that we created on line 4 to the workspace.

When we click a thumbnail for the first time, the image is not removed from the workspace because it doesn't exist. However, a new one is created. When we click another thumbnail, the existing image is removed and a new one is created.

Add the javascript code that we just discussed to your application.js file. Then add this CSS into application.css.

````css
#workspace img {
  width: 600px;
}
````

This code sets the width for the image inside the workspace. If you don't do this, then large images will "overflow" the workspace. We want all images to be exactly inside the workspace, not larger or smaller.

Save all files and refresh your browser. Now, if you search for an image and click one of the results, it will be loaded into the workspace.

![css2](https://github.com/makersacademy/course/raw/master/day_one/images/css_2.png)

So, loading image into the workspace works. However, what is the extra space between the image and the red border? This is our caption that we put into the workspace but it should be placed on an image, not above it. To fix this, let's add a bit more CSS into application.css.

````css
#caption {
  position: absolute;
  top: 10px;
  left: 10px;
}
#workspace {
 position: relative;
}
````

This code tells the browser that the `#caption` element must be positioned absolutely, that is, on top of other elements, not alongside them. Read more about positioning in HTML & CSS or ask any of the instructors. The other two properties set its location: 10 pixels from the left of the workspace and 10 pixels from the top of the workspace.

The reason we set the position to relative for `#workspace` is because this tells the browser what top and left properties refer to. Because of this CSS code, the browser will know that #caption needs to be 10 pixels to the right and 10 pixels below the upper-left corner of `#workspace`.

However, #caption is invisible because there's no text inside. We want the text that we've entered on step 2 to be appear in the caption. To do this – you guessed it right – we need to use some javascript to listen for the event of entering the data in the input box on step 2.

Do you remember that we gave that input box the id "text"? Let's listen for the "input" event that happens every time something is typed in the input box. Put this in your application.js.

````
$(document).on('input', '#text', function() {
  $("#caption").text($(this).val());
});
````

This code is waiting until something is typed in the `	#text` element and when it happens, it takes the text from there ( `$(this).val()`) and puts it into `#caption`. This works but the caption is small and hardly noticeable.

![css3](https://github.com/makersacademy/course/raw/master/day_one/images/css_3.png)

Let's make it bigger! Add the following CSS.

````css
#caption {
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 0 5px rgba(0,0,0,0.4);
  width: 400px;   
  font-size: 32px;
  color: red;
  margin: 0;
}
````

This makes `#caption` bold, sets the font as red Helvetica size 32, sets the overall width of 400 pixels with no margin around it and adds a shadow. In CSS, rbga(0,0,0,0.4) means black shadow that is 40% opaque. The name rgba stands for red-green-blue-alpha, so the four numbers refer to the amount of red (0), green (0), blue (0) and alpha, or transparency (0.4). If you never saw CSS colours. The reason we add a shadow is because it makes the text a tiny bit more readable.

Now the caption is much more noticeable.

![css4](https://github.com/makersacademy/course/raw/master/day_one/images/css_4.png)

### Adding image editing controls

By now our website starts to resemble the end product. Let's add the image editing controls. You've already seen how to add some input elements to enter text. The input elements to enter numbers and drop-down boxes are not that different. So, here's the set of elements we're about to create.

![controls](https://github.com/makersacademy/course/raw/master/day_one/images/controls.png)

They are just below the workspace on the webpage and they HTML code for them will be just below the `#workspace` element. First, let's add a "container" element with id of "controls" just below the workspace element.

````html
<div id="workspace">
  <p id="caption"></p>
</div>
<div id="controls">
</div>
````

Then let's put the first input for the left offset into the `#controls`.

````html
<div id="controls">
  Left: <input type="number" value="10" id="left">
</div>
````

This creates an input box of type "number" (as opposed to "text" that we've been using so far for keyword and text in the previous sections). This means that it behaves just like the "text" input but it also has two small arrows inside it that allow you to increase or decrease the number. Now our page looks like this.

![controls_2](https://github.com/makersacademy/course/raw/master/day_one/images/controls_2.png)

Adding other number controls is very similar.

````html
<div id="controls">
  Left: <input type="number" value="10" id="left">
  Top: <input type="number" value="10" id="top">
  Width: <input type="number" value="400" id="width"> 
  Size: <input type="number" value="32" id="size">
</div>
````

You can see them on the screen straight away.

![controls_3](https://github.com/makersacademy/course/raw/master/day_one/images/controls_3.png)

Adding drop-down boxes is very similar. Drop-down lists are created using the <select> tag with every item in the list defined by the <option> tag inside. Let's add the drop-down list for selecting the colour. Add this inside our #controls area.

````html
Colour: <select id="colour">
          <option>red</option>
          <option>green</option>
          <option>white</option>
          <option>black</option>
          <option>blue</option>
          <option>yellow</option>
          <option>gray</option>
          <option>orange</option>
        </select>
````

If you've done everything correctly, you should see it in your browser.

![controls_4](https://github.com/makersacademy/course/raw/master/day_one/images/controls_4.png)

Add the second dropdown box using a very similar code.

![controls_5](https://github.com/makersacademy/course/raw/master/day_one/images/controls_5.png)

Now we have all elements that we need for controlling our image but they aren't active yet. Changing the values does nothing to the position or the style of the caption. We'll fix this in a second.

### Activating image controls

To make sure the text on the image is updated when the controls are changed, we need to add some Javascript. As before, we'll be listening for "events" and executing some code to update the way the text looks when they happen. Let's start the the first input control that is responsible for the left position of the text. The Javascript we'll be using should be familiar to you by now. Put this code in the application.js.

````javascript
$(document).on('change', '#left', function() {    
  $("#caption").css("left", $(this).val() + 'px');
});
````

In plain English this means that when the element with an `id` of "left" changes (that is, triggers the event "change"), then the "left" CSS property of the element with id of "caption" will get the value (`.val() + "px"`) of the element that was changed (`$(this)`). Try it in the browser. Now, if you change the value of the input, it will update the position of the caption. 

**Try it!**

![try](https://github.com/makersacademy/course/raw/master/day_one/images/try.png)

You can probably write the javascript code for other fields without further help but, just in case, here's the code for other fields.

````javascript
$(document).on('change', '#top', function() {
  $("#caption").css("top", $(this).val() + 'px');
});

$(document).on('change', '#width', function() {
  $("#caption").css("width", $(this).val() + 'px');
});

$(document).on('change', '#size', function() {
  $("#caption").css("font-size", $(this).val() + 'px');
});

$(document).on('change', '#colour', function() {
  $("#caption").css("color", $(this).val());
});

$(document).on('change', '#align', function() {  
  $("#caption").css("text-align", $(this).val());
});  
````

The last two event handlers don't need "+ 'px'" bit because the colour and alignment are not measured in pixels, unlike the position (left and top), the width and the font size.

### Adding the tweet button

Now that we've got the main functionality working, let's add the tweet button! Let's get the code for the button from Twitter. Go to google and search for "tweet button code". The first link should point to [Twitter Buttons](https://twitter.com/about/resources/buttons) page.

![twitter](https://github.com/makersacademy/course/raw/master/day_one/images/twitter.png)

Select the first button (share a link) and leave all options default except the tweet text. Set it to "I built a 'Motivational Posters' page today here at @makersacademy!".

![twitter2](https://github.com/makersacademy/course/raw/master/day_one/images/twitter_2.png)

On the right you'll see the resulting HTML code that you need. Copy it to the index.erb file right after `#controls` putting it into its own div element with the id of "twitter".

````html
<div id="twitter">
    <a href="https://twitter.com/share" class="twitter-share-button" data-text="I built Motivational Posters page today @makersacademy!">Tweet</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</div>
````

Refresh the page. Now you should see the tweet button below.

![twitter3](https://github.com/makersacademy/course/raw/master/day_one/images/twitter_3.png)

If you click it, you'll notice that the URL of the page isn't included as part of the tweet. This is because Twitter detects that you're using a local url that isn't accessible by other people (that is, you're just running a website on your computer) and doesn't include it. This shouldn't be a problem after you deploy it to Heroku.

### Adding the footer

Let's add the final section on the page: the footer. Add its HTML code at the very end of your <body> section in index.erb, after all other content. By now it should be clear what this HTML code does.

````html
<footer>
  <a href="http://www.makersacademy.com/"><img src="http://www.makersacademy.com/images/logo.png"></a>
  <div>
    I built this page during my first day at 
    <a href="http://www.makersacademy.com">Makers Academy, a highly selective 12 week coding course in London</a>.
  </div>
  <div>
    This page uses Google Image search, Ruby, Sinatra, Javascript, jQuery, HTML and CSS.
  </div>
</footer>
````

Now we can see the footer on the page (but it's still completely un-styled). The reason we're putting un-styled content on the page before writing CSS is that it's easier to write CSS once you have the elements it will apply to. Otherwise you'd be writing CSS in the dark.

![style](https://github.com/makersacademy/course/raw/master/day_one/images/style.png)

### Completing the styling

So, the last bit of development we need to do is completing the styling to make sure the website looks good.

First, let's make sure everything is nicely centred. Remember how we set the background for the page?

````css
body {
  background-image: url(/images/ricepaper_v3.png)
}
````

Let's expand this CSS rule by adding a few more properties.

````css
body {
  text-align: center;
  background-image: url(/images/ricepaper_v3.png);
  color: gray;
  font-family: Helvetica, Arial;
  margin: 0;
  padding: 0;
}
````

This will make everything in the `<body>` tag (that is, on the page) nicely centred, the text will be grey, the font used will be Helvetica (and if it's not available for some reason, Arial), and the page will not have any margin or padding on the side. You can see the effect straight away.

![style2](https://github.com/makersacademy/course/raw/master/day_one/images/style_2.png)

Now let's add some colour to the header. Add this CSS.

````css
header {
  padding: 15px;
  background-color: rgba(255,255,255, 0.7);
  box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}
````

This makes the header get some padding, so the text is not very close to the edge of the page. It also applies some background colour. Here, `rgba(255,255,255, 0.7)` means white colour with the opacity of 70%. Finally, we apply some black shadow that's 3 pixels wide and 30% opaque. It will give the header some volume. 

You can see the result straight away.

![style3](https://github.com/makersacademy/course/raw/master/day_one/images/style_3.png)

Now let's add some styling to the first section (Step 1). It has the id of "select-image". Let's give it some background and some padding, like we've done with the header.

````css
#select-image {
  background-color: rgba(255,255,255, 0.3);
  padding: 10px;  
}
````

The `rgba(255,255,255,0.3)` means white background with the opacity of 30%.

![style4](https://github.com/makersacademy/course/raw/master/day_one/images/style_4.png)

Awesome, it's beginning to take shape. Let's continue the styling. What about the second section? It needs some colour and padding too. This time let's give it a different colour. If we mix green and blue but leave out red, then the result will be an aqua (greenish-blue) colour. Let's set this background with a very low opacity, to show just a shade of this colour.

````css
#add-text {
    background-color: rgba(0,255,255, 0.02);
    padding: 10px;
    box-shadow: 1px 0 3px rgba(0,0,0, 0.3); 
}
````

![style5](https://github.com/makersacademy/course/raw/master/day_one/images/style_5.png)

Let's also make the input box wider and set the alignment to "center".

````css
#add-text input {
  width: 600px;
  text-align: center;
}
````

![style6](https://github.com/makersacademy/course/raw/master/day_one/images/style_6.png)

Let's also make our button and all the input fields slightly larger by increasing the size of the font.

````css
input, button {
    font-size: 16px;
}
````

![style7](https://github.com/makersacademy/course/raw/master/day_one/images/style_7.png)

Now the only section left un-styled is "Step 3" (apart from the footer). Let's add some padding, background and shadow to it as well.

````css
#style-image {
    background-color: rgba(255,255,255, 0.7);
    padding: 10px;  
    box-shadow: 1px 0 3px rgba(0,0,0, 0.3); 
}
````

![style8](https://github.com/makersacademy/course/raw/master/day_one/images/style_8.png)

Now the section itself looks a little bit better but the contents are a mess. Let's style the controls.

First, some padding and the font size.

````css
#controls {
  padding: 10px;
  font-size: 14px;
}
````

Then, let's make the inputs of type "number" fairly narrow.

````css
input[type="number"] {
  width: 50px;
}
````

And now it looks exactly like we want it to be.

![style9](https://github.com/makersacademy/course/raw/master/day_one/images/style_9.png)

Finally, the footer. The content is there but it looks all over the place. First, the familiar tricks: background, shadows, padding, text alignment.

````css
footer {
  background-color: rgba(255,0,255,0.01);
  padding: 10px;  
  text-align: left;
  box-shadow: -1px 0 5px rgba(0,0,0, 0.3);
}
````

Now it looks slightly better but not quite right. What we want to see is the Makers Academy logo on the left with a bit of space between it and the text. We can achieve this effect by setting the float CSS property and applying some margin on the right.

````css
footer img {
  float: left;
  margin-right: 40px;
}
````

We've achieved this effect with this CSS but the lines of text are a bit too close together. Since both lines of text are in their own elements, divs, we can give them some space by adding some margin on above and below.

````css
footer div {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;
}
````

Actually, there's a shortcut for this code. You can write just a single line of CSS code achieving exactly the same effect. Pause and think for a second how it works.

````css
footer div {
  margin: 10px 0;
}
````

Cool! Now our footer looks much more organised.

![style10](https://github.com/makersacademy/course/raw/master/day_one/images/style_10.png)

**And, we're done with the styling!**

## Last Task!

Now, this is where it gets interesting!

- Deploy the website to Heroku. You'll need to make sure it works locally, then add all files to git ("git add .", "git commit -m 'message'") and finally "git push heroku master". Once you made sure it works, tweet it, you've built something cool – let friends know :)
- If you just went through the tutorial copy-pasting the code and not thinking much about how it works, go back and try to understand why it works the way it does. Can you tell why the dashed border is red? Why it's thick and how thick it is? What piece of code is responsible for loading the image into the worskpace when you click a thumbnail? What's the difference between the input fields of type "text" and "number"? What makes the Makers Academy logo to be on the left of the text in the footer, and not above it?
- The exercises below are meant to challenge you to find answers to programming problems. Try to do them and it you can't find a solution!
- Some exercises are easier than the others. If one of them seems hard, try another one!

## Extra Exercises

Finally, once you are really comfortable with the existing codebase, do the following exercises. Many of them will involve some googling around to learn something new, others will involve going back to this tutorial, as well as HTML & CSS overview.

- Add more colours into the drop-down menu. Make sure there are lots of colours to choose from.
- Change the background colours of the sections to something new, don't use the colours we've just used. Play with the opacity values.
- When the thumbnails are shown, they look rather dull: all together, without borders or shadows, without any space in between. How can you make them look better?
- When you enter the keyword and press Enter, the search isn't performed by default. What if you add a Javascript event to listen for when you hit "Enter" in the keyword input field? Then, when this event happens, you could kick off the image search. You'll probably need to google a little bit to find out how to listen for this event (stackoverflow.com is the best source of programming tips).
- Right now we're using Helvetica as the font for the page. Find out how to use a different font. What fonts are available in every browser by default? Change the font to one of them.
- Can you find out how to download an exotic font, add it to the project and apply only to the h1 header on the page using CSS?
Right now the "Powered by Google" logo is right-aligned. Can you make it centred?
- Add your name to the footer, so that everyone knew who built this site!
- In the footer we're listing the technologies used. Can you find their websites and add the links in the footer?
- We've got the tweet button on the page that we've got from the Twitter website. Can you find the code for the Facebook like page? (This may be a bit tricky, it may involve creating an "application" on Facebook but it's actually much easier than it sounds).
- What other text properties, apart from position, colour, alignment and font size can you think of? Can you add them to the page and make them work with javascript?
- Find a website that allows you to generate a logo, create one for the page and add as an image to the header.
- Find a website that allows you to generate buttons, create a beautiful "Search" button and replace our plain and dull "Go" button.