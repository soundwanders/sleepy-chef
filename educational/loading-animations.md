The `Animations` component is a page transition animation, created using the Framer Motion library, which shows an egg that drops and bounces, then reveals the yolk inside.

`Animations` uses the useMotionValue and useTransform hooks from Framer Motion to control the egg's position and opacity.

The component defines two states: showYolk, which determines whether the yolk should be shown, and y, which represents the vertical position of the egg.

The MotionValue called eggOpacity is derived from the value of the y MotionValue (the y position of the Egg). 

The useTransform function maps the range of y from [0, 100, 120, 130, 140] to [1, 1, 0, 1, 0]. This means that as the y position of the egg changes during the animation, the eggOpacity will transition from 1 to 0 to 1, creating a fade-out and fade-in effect for the egg.

When y is between 100 and 120, eggOpacity will be 1, which means the egg will be fully visible. When y is less than 100 or greater than 120, eggOpacity will be 0, which means the egg will be invisible.

The onAnimationComplete function is called when the animation is finished, and it sets the showYolk state to true after a 100 millisecond delay that is assigned using setTimeout.

The motion.div related to the Egg image defines an animated div that moves from its initial position, specified by style={{ y }}, to a new position, specified by animate={{ y: 200 }}. The y value is controlled by the useMotionValue(0) hook and represents the vertical position of the motion.div.

The transition prop defines the animation transition that occurs when the motion.div moves from its initial position to the new position. In this case, the transition is set to have a duration of 1 second and an ease-out easing function. The times and keyframes arrays define a multi-step animation where the motion.div moves up and down a few times before settling into its final position, simulating the egg falling, then bouncing and settling into its final resting place before it disappears and the yolk image appears.

The onAnimationComplete prop specifies a callback function that gets called when the animation is complete. In this case, it sets the showYolk state to true after a delay of 100 milliseconds using the setTimeout function, which, you guessed it, shows the yolk image. Nice!

The motion.img elements represent both the egg and yolk images, and they use the opacity and display CSS properties to control their visibility. When the animation is finished, the egg disappears and the yolk appears in its place.

The second animation is the same exact egg dropping and bouncing animation, but the yolk does not appear. This secondary animation is used in place of a progress bar or similar loading device on the search results page. Since UseSWR loads data at blazing fast speeds, the search results loading animation will not always be displayed.

Overall, it is a relatively simple page transition animation which I hope will serve as a useful example for somebody interested in working with the framer-motion library.
<br><br>

## Process Notes

Using the Framer Motion library to create an animation of an egg breaking and revealing a yolk. Here's what's happening:
- useMotionValue(0) creates a motion value that we'll use to animate the position of the egg. y is the current value of that motion value.
- useState(false) creates a state variable that will be used to determine when to show the yolk. showYolk is the current value of that state variable.
- useTransform(y, [0, 100, 120, 130, 140], [1, 1, 0, 1, 0]) creates a transform that maps the y value to an opacity value for the egg. 
- When y is between 0 and 100, the opacity is 1 (fully visible). When y is between 120 and 130, the opacity drops to 0 (fully transparent). 
- Then it goes back up to 1 between 130 and 140 before disappearing again.
- onAnimationComplete is a function that will be called when the animation is finished. It sets showYolk to true after a short delay.
- The motion.div component wraps everything and is used to animate the position of the egg. The animate prop specifies the final position of the egg (y=200), 
- the transition prop specifies the animation parameters (duration, easing, etc.), and the style prop applies the y value to the position of the egg.
- There are two motion.img components inside the motion.div component. The first one displays the egg and uses the opacity value from eggOpacity.
- The display property is set to "none" when showYolk is true so that it disappears when the yolk appears. 
- The second motion.img component displays the yolk and is only shown when showYolk is true.

__________________


useTransform is a function from the Framer Motion library that allows you to map a value from one range to another range. In this case, y is the current position of the egg during its animation, and it is being mapped to a range of opacity values.

In our use-case, the input range is y, which is the vertical position of the falling egg. The output range is an array of opacity values [1, 1, 1, 1, 1], which means that the opacity of the egg will always be 1 (100% opacity) while it is falling and bouncing, and will only disappear once the yolk's state is set to visible.

__________________


The keyframes property is used to define a series of values that the animated property will take during the animation. In this case, the animated property is y, which controls the vertical position of the motion div.

The keyframes property defines an array of values that the y property should take at specific points in time. In this particular example, the keyframes array has five values: 0, -300, 0, -100, 0.

- At 0 (the beginning of the animation) the y property is set to 0, which means .
- At time 0.2 (20% into the animation), the y property is set to -300. This means that the motion div has been translated 300 pixels upwards from its original position.
- At time 0.5 (50% into the animation), the y property is set to 0 again. This means that the motion div has returned to its original position.
- At time 0.8 (80% into the animation), the y property is set to -100. This means that the motion div has been translated 100 pixels upwards from its original position.
- At time 1 (the end of the animation), the y property is set to 0 again, which means the motion div has returned to its original position.

The entire sequence creates a bounce effect as the egg falls and bounces, then finally the yolk appears.