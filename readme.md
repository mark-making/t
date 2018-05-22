# Install

* You will need [Ruby](https://www.ruby-lang.org/en/documentation/installation/) – (v2.4.1)
    * You can use your preferred method of switching/managing Ruby versions
* Install Gems with [Bundler](http://bundler.io/#getting-started)
    * `bundle install`
* Install packages with [Yarn](https://yarnpkg.com/en/docs/install)
    * `sudo yarn`

## Develop

### Jekyll

* **Serve**
    * `bundle exec jekyll s --livereload --config _config_dev.yml`
* **Serve – (Emulating production environment)**
    * `JEKYLL_ENV=production bundle exec jekyll s --livereload --config _config_dev.yml`

### Gulp

* `gulp`
    * (Default task for development)
    
## Production

### Jekyll

* **Build**
    * `bundle exec jekyll b --config _config.yml` 
    
### Gulp
    
* `gulp build`
    * (Build task) 
