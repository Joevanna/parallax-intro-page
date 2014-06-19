<!-- General structure -->

This application is formed by 4 sections in total, a slider, two sections with a static background image and a last one with an HTML5 video.

All the styling was made using Sass. I have created a basic structure so that in future you can easily add files there if needed.

In modules you can find the file with the actual styling of the page, while in the folder utilities there is styling for the grid, normalize, breakpoints and a file for variables. Everything is imported in "main.scss".

In the js folder there is the main js file with the functionality to trigger the plugins, jQuery and the two plugins.

A new section can be added just by copying the <section> and everything that is included inside the container div.

The slider sits on top of the container, but the structure on each slide is exactly the same as the other sections.

<!-- Section structure -->
Each section contains two main divs: a first one for the background and a second one as an overlay for the static content palced on top.

Every section has the class "scene" to allow the plugin parallax.js to detect it. 

Inside every section there is a div with two common classes ("bg" and "layer") and a unique class which allows to change the background of it as we want. ---> <div class="bg layer">

If a static background is used, the <div class="bg layer"> will not need any other element in it, as the background will be assigned through css. In case of a video, simply put the code for the video inside it like in the last <section>.

The <div class="overlay"> contains all the content which sits on top of the background image and the video. 

The content is placed inside a grid, which centers everything and resizes accordingly to the device. The grid is divided into 12 columns, and for every element to work with the grid, simply add the class grid-(number) and it will be automatically placed. If you need spaced from one element to another, use offset-1 before or the class grid-. An example can be found in every section in the index.html.

<!-- PARALLAX.js -->

For the gyroscope function on the background, I have included the plugin parallax.js.

For it to work, we need to apply the class "scene" to every section, and the class "layer" to our elements inside( in our case the two main <div>).

The two <div> need also the "data-depth" attribute for the gyroscope to work. the background div has got <div data-depth="60">, while the content one has got <div data-depth="00">. This allows the gyroscope to move the background without touching the content, which has 0 depth and won't move. The numbers can go from 0 to 100.

To trigger the gyroscope, we just need to use it as a plugin $('.scene').parallax();

We can pass different attibutes to calibrate th gyroscope on the x and y axis, here there is the complete list https://github.com/wagerfield/parallax.









