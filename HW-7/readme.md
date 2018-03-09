Katherine Holmgren, 50

[HW-7 sketch](https://katholmgren.github.io/120-work/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

Lines 2-10 are setting the global variables for the sketch-- specifically for the bouncing ball. Line 4 sets the ball diameter to 40 and line 5 and 6 set the starting position of the ball on the canvas to the point (10, 10). Line 7-10 are values of 1 that will later be reassigned to the ball position to make it move.

Lines 12-15 are the setup block. Line 13 creates a canvas the width of the window by a height of 400 pixels. Line 14 sets the background to white. Calling this function in the setup block makes the background only draw itself once, meaning it will not replace itself as if it was in the draw block. This leaves a trail for the ball.

Lines 19-34 are the draw block. The draw function is called in line 19, then the values are updated in lines 21-22. Line 21 (ball.x += ball.delta_x * ball.scale_x) means that the position ball.x (10) is taking ball.delta_x (1) multiplied by ball.scale_x (1) and then reassigning it back to itself (ball.x). This happens repeatedly because it is in the draw loop. Doing the same thing with ball.y in line 22 makes the ball move diagonally.

Lines 25-27 is a boolean expression that keeps the bouncing ball between 0 and the width of the canvas. It is saying that if ball.x is greater than the width or if it is less than 0 (if this is true), then ball.delta_x will change to -1 * ball.delta_x. Otherwise, the expression is false and the ball will still increase in position by one pixel.

Lines 28-30 is also a boolean expression, and it keeps the bouncing ball between 0 and the height of the canvas. It does the same thing as lines 25-27 but on the y scale. Multiplying by -1 makes the speed inverse. That is why it changes direction when it hits the border of the canvas.

Line 32 and 33 make an ellipse from previously declared variables. ball.x and ball.y are x and y positions that have been updated to reposition with every passing of the draw loop. By inputting these values for the x and y of the ellipse, it makes the ellipse move. ball.width is the diameter of the ellipse (40 pixels).

Lines 36-39 are the mousePressed block. If the mouse is pressed once, the ball.scale_x and ball.scale_y will update. Line 37 takes mouseX number from 0 to width and adjusts it to .5 and 10. Because ball.delta_x was multiplied by ball.scale_x in the ball.x variable earlier, ball.x will change speed when the mouse is clicked. By pressing on the right side of the canvas, the ball will be multiplied by 10. By pressing the left side of the canvas, the ball will be multiplied by .5 and will be much slower.

Adding the same thing for ball.scale_y will make the ball be multiplied in the y section too, making the ball bounce vertically just as much as it does horizontally. Now the ball will be faster and slower when the mouse is pressed in the top left corner or the bottom right-hand corner because both scales are taking place.

It changes direction when the mouse is clicked because it is included in the boolean expression in lines 26 and 29. It is multiplied by ball.delta which changes the direction from -1 to an altered negative value.


## How I altered the sketch

I altered the sketch by changing it to a MouseIsPressed centered sketch instead of a MousePressed sketch. When the mouse is pressed, there is an orange background, a randomly changing fill for the bouncing ellipse, and a faster speed. Along with this is the text "GROOVY!"

Otherwise (else), there is a blue background, a randomly changing blue fill for the bouncing ellipse, and a slower speed. There is the text "c o o l" in the background. There is also a rollover for the "cool" portion of the sketch that makes the bouncing ball turn red.

I also had the background in the draw loop for my sketch which takes away the trail of the bouncing ball.
