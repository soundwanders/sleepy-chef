## __Let's Talk Loading Animations__
<br>

__Egg Yolk Search Submission Animation__

For our searchbar submission animation, we bring in the big dog EggYolk, which replaces our 'Submit' button with an egg yolk, but only if the form submission is successful. The egg yolk and button's visibility is controlled by the state [showYolk, setShowYolk] which is initialized as 'false'. If showYolk is true, we render a motion.div element (from the framer-motion library) which contains the egg yolk image. 

The whole purpose is to serve as a visual cue to the user that their search was accepted. A successful submission sets showYolk to true, the yolk image appears, then off to the results we go. Here's the simplified run-down:

1. The motion.div element has an initial state that sets the opacity and scale to 0.

2. The motion.div element has an animate state that sets the opacity and scale to 1.

3. The motion.div element has a transition property that sets the duration of the animation to 0.3 seconds.

4. When the EggYolk component is mounted, the motion.div element will be hidden.

5. After a successful form submission, the showYolk state variable will be set to true, causing the EggYolk component to be rendered.

6. When the motion.div element is rendered, it will transition from an initial state of opacity and scale 0 to an animate state of opacity and scale 1 over a duration of 0.3 seconds.

7. As the motion.div element scales up, the img element inside of it will also scale up and display the egg yolk image.

<br>
__________________
<br>

__Happy Egg Loading Animation__

The HappyEgg component is a little bit more complex. We display a loading animation while the user waits for search results. Hopefully they won't have to wait too long. Here's the play-by-play:

1. The HappyEgg component is defined as a functional component that returns some JSX.

2. Inside the component, there are two variables defined using the useMotionValue and useTransform hooks from the framer-motion library.

3. We define the 'y' variable, which is the vertical position of the egg image.

4. The second variable, eggOpacity, uses the y value to set the opacity of the egg image. When y is between 0 and 100 or between 130 and 140, the opacity is set to 1, but when y is between 120 and 130, the opacity is set to 0.

5. The component returns a div element wrapped in a motion.div component from framer-motion.

6. The motion.div is given our lovely `animate` prop that sets the y position of the egg image to 200. This causes the egg image to bounce up and down. We'll smooth out the bouncing later so we don't run into a Humpty-Dumpty sort of situation.

7. The transition prop of the motion.div component specifies the duration of the animation, the easing function, and the keyframes to use during the animation.

8. We define our keyframes in an array with several values to smooth out the animation. No sudden movements, egg.

9. The motion.img component inside the motion.div renders the image of our happy bouncing egg until our recipe data is fully loaded.

<br>

That's a wrap. Thanks for reading!