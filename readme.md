#Talesmith

The website for Martin Williams.

##Features:

* ###[Grunt](http://gruntjs.com/)
* ###[Bower](http://bower.io/)
	* ###[jQuery](https://github.com/jquery/jquery)
	* ###[Modernizr](https://github.com/Modernizr/Modernizr)
	* ###[Normalize(sass)](https://github.com/JohnAlbin/normalize-scss)
	* ###[Semantic.gs](https://github.com/tylertate/semantic.gs/)
	* ###[Vide](https://github.com/VodkaBears/Vide)
	* ###[Picturefill](https://github.com/scottjehl/picturefill)
* ###[Jekyll](http://jekyllrb.com/)
* ###[KSS Style guide](http://warpspire.com/kss/)

##Folder Structure:

	talesmith
	│
	├─ _serve (dev)
	│
	├─ _site  (dist)
	│
	├─ assets
	│  │
	│  ├─ bower (command:bower install)
	│  │
	│  ├─ fonts
	│  │
	│  ├─ img (raw images to be optimised)
	│  │
	│  ├─ js
	│  │
	│  ├─ scss
	│  │
	│  ├─ video
	│
	├─ jekyll
	│  │
	│  ├─ _data
	│  │
	│  ├─ _includes
	│  │
	│  ├─ _layout
	│  │
	│  ├─ _data
	│  │
	│  ├─ _posts
	│  │
	│  ├─ _work
	│
	├─ run_control

##Installation:

###Tools for the job:

* [Git](http://git-scm.com/doc/)
* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com/getting-started)
* [Bower](http://bower.io/)
* [Jekyll](http://jekyllrb.com/)
* [Terminal notifier](https://github.com/alloy/terminal-notifier) - For grunt:growl

###Setup:

* **Navigate** to your working directory
	* `cd /path/to/your/project`
* **Install** [Node Package Manager](https://www.npmjs.org/doc/install.html)
	* `sudo npm install`
* **Install** Bower components
	* `bower install`

###Jekyll:

####Serve:
command: `jekyll serve --config _config_dev.yml`

####Build:
command: `jekyll build --config _config_dist.yml`

###Grunt tasks:

* **Grunt Develop**
	* `grunt develop`
* **Grunt Build**
	* `grunt build`

##Things to do

* ~~Strikethrough something~~