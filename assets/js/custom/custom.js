// MAIN.js
$(function() {
'use strict';

        // Carousel

            var owl = $('.owl-carousel');

            owl.owlCarousel({
                loop: true,
                nav : false,
                autoheight: true,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 1500,
                responsive:{
                    0:{
                        items:1
                    }
                }
            });

        // Video

            if ($('video').length > 0) {
                var video = document.getElementsByTagName('video')[0];
                var playButton = document.getElementById('play-pause');
                var muteButton = document.getElementById('mute');
                // Event listener for the play/pause button
                playButton.addEventListener('click', function() {
                  if (video.paused === true) {
                    // Play the video
                    video.play();
                    // Update the button icon to 'Pause'
                    playButton.innerHTML = '\ue601';
                    playButton.className = 'icon control control__play';
                    playButton.dataset.state = 'playing';
                    console.log('Playing');
                  } else {
                    // Pause the video
                    video.pause();
                    // Update the button icon to 'Play'
                    playButton.innerHTML = '\ue604';
                    playButton.dataset.state = 'paused';
                    console.log('Paused');
                  }
                });
                // Event listener for the mute button
                muteButton.addEventListener('click', function() {
                  if (video.muted === true) {
                    // If is muted, unmute
                    video.muted = false;
                    // Update the button icon to 'Mute'
                    muteButton.innerHTML = '\ue603';
                    muteButton.className = 'icon control control__mute';
                    muteButton.dataset.state = 'audible';
                  } else {
                    // Else mute the video
                    video.muted = true;
                    // Update the button icon to 'Play'
                    muteButton.innerHTML = '\ue602';
                    muteButton.dataset.state = 'muted';
                  }
                });
                // Ended
                if ($("html").hasClass("touch")) {
                    $('#play-pause').text('\ue604');
                }
                video.onloadstart = function() {
                    console.log('Starting to load video');
                };
                video.ondurationchange = function() {
                    console.log('The video duration has changed');
                };
                video.onloadedmetadata = function() {
                    console.log('Meta data for video loaded');
                };
                video.onloadeddata = function() {
                    console.log('Browser has loaded the current frame');
                };
                video.oncanplay = function() {
                    console.log('Can start playing video');
                };
                video.oncanplay = function() {
                    console.log('Can start playing video');
                };
                video.oncanplaythrough = function() {
                    console.log('Can play through video without stopping');
                };
                video.onended = function() {
                    playButton.innerHTML = '\ue604';
                    playButton.className = 'icon paused';
                };
                video.onstalled = function() {
                    console.log('Buffering next frame');
                };
                video.onwaiting = function() {
                    console.log('Buffering next frame');
                };
            }

        // Maps

            // Local/Live
            var jsPath = "/";

            // Staging directory
            // var jsPath = "/talesmith.io/";

            if (co_ordsArr) {
                if (co_ordsArr.length > 0) {

                    $.getJSON('' + jsPath + 'js/world.json', function (data) {

                        $('.map').smallworld({
                            geojson: data,
                            markerColor: '#eb5440',
                            markerSize: 4,
                            markers: co_ordsArr,
                            waterColor: 'transparent',
                            landColor: '#777777'
                        });

                    });

                }//IF
            }


        // console.log('I have ran');

});
