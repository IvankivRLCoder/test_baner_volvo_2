"use strict";var box = ".quote";TweenMax.from('#ask_1', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:0.5});TweenMax.to('#ask_1', 1,{opacity:0, delay:2.5});TweenMax.from('#ask_2', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:3});TweenMax.to('#ask_2', 1,{opacity:0, delay:5});TweenMax.from('#ask_3', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:5.5});TweenMax.to('#ask_3', 1,{opacity:0, delay:7});TweenMax.to('#img_1', 1.5,{right:0, ease:Power0.easeNone, delay:5});TweenMax.to('#img_1', 2.5,{left:0, ease:Back.easeOut.config(1), delay:8});TweenMax.to('#img_2', 1.5,{left:-1, ease:Back.easeOut.config(3), delay:8.2});TweenMax.to('#img_3', 1.5,{bottom:0, ease:Back.easeOut.config(3), delay:8.5});TweenMax.from('#ask_4', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:9.5});TweenMax.to('#ask_4', 1,{opacity:0, delay:12});TweenMax.to('#img_1', 2,{left:513, ease: Bounce.easeOut, delay:12.5});TweenMax.to('#img_2', 1.5,{left:512, ease: Power4.easeInOut, delay:13.5});TweenMax.to('#img_3', 1.5,{left:513, ease: Power4.easeInOut, delay:13});TweenMax.from('#ask_5', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:15.5});TweenMax.to('#ask_5', 1,{opacity:0, delay:17.5});TweenMax.to('#img_1', 2,{left:0, ease:  Elastic.easeOut.config(1, 1), delay:18.5});TweenMax.to('#img_2', 2,{left:0, ease:  Power4.easeInOut, delay:17.5});TweenMax.to('#img_3', 2,{left:4, ease:  Power4.easeInOut, delay:17.7});TweenMax.to('#img_4', 2,{right:0, ease:  Power4.easeInOut, delay:20});TweenMax.to('#img_5', 2,{top:15, rotationX:360, ease:Elastic.easeOut, delay:23});TweenMax.to('#img_4', 2,{right:-800, ease:  Power4.easeInOut, delay:27});TweenMax.to('#img_5', 2,{right:-105, rotationX:360, ease:Elastic.easeOut, delay:27});TweenMax.to('#img_6', 2,{right:0, ease:  Power4.easeInOut, delay:29})TweenMax.to('#img_6', 2,{right:-800, ease:  Bounce.easeOut, delay:33});TweenMax.to('#img_7', 2,{right:0, ease: Power4.easeInOut, delay:34});TweenMax.to('#img_7', 2,{right:-800, ease:  Bounce.easeOut, delay:38});TweenMax.to('#img_8', 2,{right:0, ease:  Power4.easeInOut, delay:39});TweenMax.to('#img_8', 2,{right:-800, ease:  Bounce.easeOut, delay:43});TweenMax.to('#img_9', 2,{right:0, ease: Power4.easeInOut, delay:44});TweenMax.to('#img_9', 2,{right:-800, ease:  Bounce.easeOut, delay:49});TweenMax.to('#img_1', 2,{left:-600, ease:  Power4.easeInOut, delay:49.8});TweenMax.to('#img_2', 2,{top:-100, ease:  Power4.easeInOut, delay:49});TweenMax.to('#img_3', 2,{bottom:-50, ease:  Power4.easeInOut, delay:49.3});TweenMax.from('#ask_6', 1.5, {scale:0, y:50, rotationX:360, ease:Elastic.easeOut, delay:51});TweenMax.to('#ask_6', 1,{opacity:0, delay:53});TweenMax.to('#img_10', 2,{backgroundColor:'#607D8B', right:0, ease: Power4.easeInOut, delay:53.5});function hov1() {    TweenMax.to('.quote', 0.3, {fontSize: 55, ease:Back.easeOut});}function hovOut1() {    TweenMax.to('.quote', 1, {fontSize: 40, ease:Elastic.easeOut});}