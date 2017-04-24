# polymer-lightbox-gallery

a [Polymer](https://www.polymer-project.org/) implementation of [Digitec](https://www.digitec.ch/)'s product lightbox system.

## motivation

I wanted to create a similar user experience as  [this lightbox/gallery system](https://www.digitec.ch/de/s1/product/corsair-gaming-k55-rgb-usb-ch-kabel-tastatur-5992745) provides. And I wanted to use Polymer as library because web components rule.

## features
* clicking on a _medium_ image element in the gallery opens the lightbox scrolled to the related _large_ image
* clicking on the _X_ closes the lightbox
* clicking outside the lightbox closes the lightbox as well
* hitting the back button of the browser closes the lightbox too (no page reload)
* both the _medium_ and the _large_ slideshow have an infinite navigation: Clicking "next" on the last item will bring you to the first item and vice versa.
* _thumbnail_ images in the lightbox are clickable and a click results in a scroll to the related _large_ image
* in the lightbox keyboard navigation is possible (arrow right / arrow left)
* the lightbox is responsive and responds to browser-width changes

## requirements

* installed _node_ and _npm_
* globally installed _gulp_: `npm install -g gulp`
* globally installed _bower_: `npm install -g bower`

## setup

### viewing

* clone this repository: `git clone https://github.com/jule256/polymer-lightbox-gallery.git` and change to that local repository
* get node dependencies (once): `npm install`
* get bower dependencies (once): `bower install`
* compile the _scss_ files: `gulp compile-sass`
* start the Polymer server: `polymer serve`
* open your browser and go to _[http://localhost:8080/](http://localhost:8080/)_

### developing

* clone this repository: `git clone https://github.com/jule256/polymer-lightbox-gallery.git` and change to that local repository
* get node dependencies (once): `npm install`
* get bower dependencies (once): `bower install`
* start the _scss_ compile and watch task: `gulp sass-compile-and-watch`
* start the Polymer server: `polymer serve`
* open your browser and go to _[http://localhost:8080/](http://localhost:8080/)_
* open your favorite IDE/Editor and start editing

## possible improvements

* full responsive design (lightbox should be screen filling below a certain width)
* horizontal swiping to go to the next/previous image
* improve infinite navigation by getting rid of the left-scroll when clicking "next" on the last element (duplicate first DOM element after the last DOM element?)
* unit testing for every Polymer component
* code style checking (gulp task)
* in the lightbox, the (re-used) stage should not display the mouse-cursor "pointer" on hovering a _large_ image
* in the [Digitec's product lightbox system](https://www.digitec.ch/de/s1/product/corsair-gaming-k55-rgb-usb-ch-kabel-tastatur-5992745) the next/previous arrows of the gallery and lightbox have different sizes