UDj
===
---

Git
---

Assuming you have git installed, you can do

    $ git clone https://your_cloudforge_username@udj.git.cloudforge.com/udj.git
replacing 'your_cloudforge_username' with (obviously) your cloudforge username. You'll then be prompted for your password and the repository will sync. If you are using windows github app then it's really straightforward. I recommend using the git command line interface until you are familiar with how git works but you can do whatever you want. Oh and if you haven't checked out [git immersion](http://www.gitimmersion.com) you should do that too.

Once you've installed git and cloned the repo, you can sync the latest source from cloudforge by doing

    $ git pull origin master

**Before you commit any changes at all, make sure you are not in the master branch.** The first thing you should do before making any changes or adding anything at all is make a new topic branch. You can do this with

    $ git branch branch_name
    $ git checkout branch_name
replacing branch_name with whatever you want.

Now you can do whatever you want and commit changes to your own branch without messing with the master branch. **Only finished and _working_ components should be committed to master. Read the damn [git immersion](http://www.gitimmersion.com)!**

Project Overview
-----

So far we have a simple local server set up. If you want to run it you need to do a few things.

1. First of all install node. Either download it from [here](http://nodejs.org/download/ "Download node.js"), or if you are on Linux or Mac (assuming you have Xcode installed) you can do this in terminal:
	
    ```
    git clone git://github.com/ry/node.git
    cd node
    ./configure
    make
    sudo make install
    ```
    
	If you opt to install with terminal you might need to install a few dependencies. See [here](http://howtonode.org/how-to-install-nodejs "How to install node").
    
2. Once you have node installed simply run this from the root of the repository:
	```
    $ node server.js
    ```
then go to [http://localhost:3000/hello](http://localhost:3000/hello) or [http://localhost:3000/goodbye](http://localhost:3000/goodbye) to see it in action. 

3. That's it... what did you expect? Do some reading:
	- [Best place to start](http://www.nodebeginner.org/)
	- [An example using express](http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/) (which we will be using)
	- [A lot of resources here](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js)

These are all node resources, which is good to learn about but there are many more components to our web app. Node is used for our server-side computation, but the UI and frontend will be a combination of html and JavaScript and I have narrowed down the front-end framework to either Backbone.js or Bootstrap.js, input on those is welcome. Here are some starting points as far as front-end is concerned:

- [Backbone](http://www.google.com/search?q=backbone+js)
- [Bootstrap](http://www.google.com/search?q=bootstrap+js)
