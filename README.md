# Fiksar landing page

1. Deploy a project
    a. For dev :
    'npm install'  - install all dependencies
    'gulp watch' - run project

    b. To collect :
    'npm install'  - install all dependencies
    'gulp build'  - collect sources to ready project to folder /dist


2. Tasks
    'gulp sass' - collect all .sass to style.css
    'gulp pug-html' - convert .pug to .html
    'gulp min-js' - concat and minify js
    'gulp min-css' - minify css
    'gulp min-image' - compress images
    'gulp px-rem' - convert px to rem
    'gulp clean' - clean /dist before collecting
    'gulp watch' - all tasks + run localhost
    'gulp build' - collect all sources to /dist. This task automatically clean the folder before collecting.


Optional :
    'npm install bower' - install bower for libriares. All libriares install to src/libs
    - e.g. to install last version of jquery 'bower install jquery'