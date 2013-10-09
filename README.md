UDj
===
---

Using Git
---
I strongly encourage you to do some research and at the very least, complete a few of the lessons at [git immersion](http://www.gitimmersion.com). You will probably be using the Github app to manage your repository, which works fine, but I urge you to use the command line interface. It will help you understand git better and improve your knowledge on terminal (or *command prompt*) syntax.

You obviously do not need to know every in and out of git to work on this project, but consider the fact if you plan on getting into any sort of professional programming in the future, you will need to know how git works (or a similar version control system, like subversion). Now is a great time to learn.

### Windows Users ###

If you opt to use the command prompt for git (way to go!) I suggest you install [Cygwin](http://cygwin.com/install.html). Cygwin is basically terminal for Windows. You can use it just like you would use a terminal on linux (which, like git, is a great thing to learn how to use) and create aliases for short commands which I get into below.  
You can obviously just use the command prompt but it sucks and you're on your own.

### Mac Users ###

You already have Terminal in Applications/Utilities and you should use that.

### Terminal and Cygwin ###

Basic terminal navigation is easy. You start out in the directory ```~/``` and it points to ```/Users/yourusername/``` on mac and somewhere else on Windows (I'm not sure but it doesn't really matter). Here's just a quick list to help you get started:

* You have what is called a pwd, or present working directory. This is where you currently are in the terminal.
* Type ```ls``` to list files in your pwd. Try ```ls -a``` or ```ls -la``` to list hidden files and more information.
* Type ```cd any/file/path``` to move your present working directory to any/file/path. For example if I start out in /Users/matthew and do ```cd Documents``` I will end up in /Users/matthew/Documents.
* You can use the tab key to autocomplete the names of files in your pwd. For example if I started in ~/ and typed ```Doc``` and pressed tab, it would autocomplete to ```Documents```. Press tab twice to view all autocomplete options.
* ```mkdir``` make a new directory
* ```touch``` make a new empty file
* ```cp``` copy a file
* ```mv``` move or rename a file
* ```rm``` remove a file.

A few recources on terminal usage [here][1] and [here][2].

[1]: http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line
[2]: http://www.dummies.com/how-to/content/how-to-use-basic-unix-commands-to-work-in-terminal.html

#### .gitconfig ####
Git uses a configuration file called ```.gitconfig``` located in $HOME. This is typically ```/Users/username/``` but you can find out what it points to from a terminal (or command prompt) by typing 
    
    echo $HOME

You should edit ```.gitconfig``` and add the following (from git immersion):

    [alias]
      co = checkout
      ci = commit
      st = status
      br = branch
      hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
      type = cat-file -t
      dump = cat-file -p

This creates aliases in git that you can use for convenience. For instance, to check status you just type ```git st```. The ```git hist``` command is especially useful because it displays the log in a nice readable format.

#### .bash_profile ####

In your home directory (```~/```) you have a file called ```.bash_profile``` that gets executed every time you open a new shell. In this file you can do all kinds of things but for us it is useful to have a few shortcuts to git commands. I have the following in my ```.bash_profile``` (from git immersion):

    alias gs='git status '
    alias ga='git add '
    alias gb='git branch '
    alias gc='git commit'
    alias gd='git diff'
    alias go='git checkout '
    alias gh='git hist'
    
If you have a terminal window open, close it and open a new one or type ```. ~/.bash_profile```. Now you can just do ```gs``` or ```gb``` without having to type out git. This is pretty essential if you are going to use the command line interface as it gets extremely annoying typing out ```git status```.

#### Cloning the repository ####
    $ git clone https://your_cloudforge_username@udj.git.cloudforge.com/udj.git
replacing 'your_cloudforge_username' with (obviously) your cloudforge username. You'll then be prompted for your password and the repository will sync. This should be run in a sensible directory, like Documents. When you run this, it will create a folder wherever your present working directory is. For example, if you ```cd``` to Documents, Documents/udj will be created with our git repository inside.

Once you've installed git and cloned the repo, you can sync the latest source from cloudforge by doing

    $ git pull origin master

**Before you commit any changes at all, make sure you are not in the master branch.** The first thing you should do before making any changes or adding anything at all is make a new topic branch. You can do this with

    $ git branch branch_name
    $ git checkout branch_name
replacing branch_name with whatever you want.

Now you can do whatever you want and commit changes to your own branch without messing with the master branch. **Only finished and/or _working_ components should be committed to master.**

You can push your branch to the remote repository by doing

    $ git push origin branch_name

```origin``` is the name of our remote repository, the original source of your local repository (hence the name).

**Read the damn [git immersion](http://www.gitimmersion.com)!**

Project Overview
-----

So far we have a simple local server set up with a bootstrap template. If you want to run it you need to do a few things. To simply check out the template, open www/index.html in your browser.

1. First of all install node. Either download it from [here](http://nodejs.org/download/ "Download node.js"), or if you are on Linux or Mac (assuming you have Xcode installed) you can do this in terminal:
	
    ```
    $ git clone git://github.com/ry/node.git
    $ cd node
    $ ./configure
    $ make
    $ sudo make install
    ```
    
	If you opt to install with terminal you might need to install a few dependencies. See [here](http://howtonode.org/how-to-install-nodejs "How to install node").
	
2. You need to install express to run the server. Simply run this from the root of the repository:
 
	```
	$ npm install
	```
    
3. Once you have node installed simply run this from the root of the repository:

	```
    $ node server.js
    ```
then go to [http://localhost:3000](http://localhost:3000) to see it in action. So far we have a barebones bootstrap template running. In order to stop the server, you have to type ```Ctrl-C``` (this kills processes running in the command line).

4. That's it... what did you expect? Do some reading:
	- [Best place to start](http://www.nodebeginner.org/)
	- [An example using express](http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/) (which we will be using)
	- [A lot of resources here](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js)

These are all node resources, which is good to learn about but there are many more components to our web app. Node is used for our server-side computation, but the UI and frontend will be a combination of html and JavaScript using backbone.js and bootstrap.js. Backbone is a front-end framework for client-side (browser) computation, bootstrap is a UI framework. Here are some starting points as far as those are concerned:

- [Backbone](http://www.google.com/search?q=backbone+js)
- [Bootstrap](http://www.google.com/search?q=bootstrap+js)
