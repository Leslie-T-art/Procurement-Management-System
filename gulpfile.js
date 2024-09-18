const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Leslie Chihwai licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * Purity UI Dashboard - v1.0.1
      =========================================================
      
      * Product Page: https://www.linkedin.com/in/leslie-chihwai-284515170//product/purity-ui-dashboard
      * Copyright 2023 Leslie Chihwai (https://www.linkedin.com/in/leslie-chihwai-284515170/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by Leslie Chihwai & Coded by Simmmple
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Leslie Chihwai licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--
      /*!
      
      =========================================================
      * Purity UI Dashboard - v1.0.1
      =========================================================
      
      * Product Page: https://www.linkedin.com/in/leslie-chihwai-284515170//product/purity-ui-dashboard
      * Copyright 2023 Leslie Chihwai (https://www.linkedin.com/in/leslie-chihwai-284515170/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by Leslie Chihwai & Coded by Simmmple
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */
      -->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Leslie Chihwai licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * Purity UI Dashboard - v1.0.1
      =========================================================
      
      * Product Page: https://www.linkedin.com/in/leslie-chihwai-284515170//product/purity-ui-dashboard
      * Copyright 2023 Leslie Chihwai (https://www.linkedin.com/in/leslie-chihwai-284515170/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by Leslie Chihwai & Coded by Simmmple
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
