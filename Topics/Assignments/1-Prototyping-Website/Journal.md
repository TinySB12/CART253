# Reflective Journal
## 9/10/2026
So, the last time I did any coding was back when I was studying in Lasalle College in 2020 - 2021.

I remember catching onto the mechanics really quickly back then! I procrasinated on my final project but I still managed to code three pages in less than a day two days before submission. I don't remember HOW I did it (and I don't plan on procrastinating again if I can help it) but I remember enjoying it!

I've never used VS code or Github, and some of the work I had to do today had me fumbling. Having instructions and guides to follow has definitely been helpful, though! I've already learned how to make tables and remembered how to add banners and everything. It was quite fun making my own banner for my page! I'm hoping I can add more little personal quirks here and there as the class continues! Very excited!

## 22/9/2026
Topic of this entry: My Prototypes - Instructions

Okay, note to self: Don't take a bigger bite than what you have learned.
I don't know why I thought making a character's eyes follow my cursor was going to be something so complicated. The "One Is Watching" project slowed me down the most for this submission, and me, being the silly person I am, refused to give up on it until I could make it work. This made it so that I had far less time for my other two prototypes... and I couldn't solve why my first prototype isn't working like I want it to. Hopefully this is okay to submit??? (I also don't really know what I'm supposed to do for the style guide.)

Either way, this was still really fun to dabble into! Coding so far has had this strange grip on me where when I start something, I just struggle to stop it or take a step back to give my head a rest before I keep going. I know this isn't like the HTML I learned back in college, and honestly that might just be the problem. /silly

## 30/9/2026
Topic of this entry: My prototypes - Variables

I didn't learn my lesson LOL. (Spoilers I ended up using conditions before the class that's gonna teach us conditions) But I have to say, so far I've had the most fun with variables. I decided I'm not gonna try drawing a whole character for any of these anymore since just drawing One (the character in "One Is Watching") took so much energy out of me. Instead I'm just gonna start with some orbs for all of these!

For this one, I decided to actually put down my ideas for each prototype before I went to figure out exactly how to do them. I wanted one where orbs would orbit my cursor, one where an orb would bounce around the canvas like a logo, and one where the orb will chase my mouse but with a delay.

They're all really simple, but the way I see it, these are all going to be the building blocks for something much bigger in the future. I think that's the point of these prototypes, right? They're small because the goal is to learn a little at a time, but also to experiment. I mean, even despite this I still ended up coding one lesson ahead, soooo, lesson failed successfully??

I had to use sin() and cos() for "Orbit", which I wish I didn't because I want to stick to math I can actually visualize. Trigonometry is not something I have explored in a hot minute. I'm gonna remember the formula but I still don't know why it works.

## 6/10/2026
Topic of this entry: My prototypes - Conditionals

Orbs, orbs, orbs my beloved. Figuring out what to do for these three was actually a challenge, NOT because I didn't have ideas for them, but because I had to actively hold myself back from dabbling too far into the sun. If I make my prototypes too challenging I get too intimidated to try and do them. For example: One of the prototypes I wanted to do was to have multiple bubbles float up in a randomized fashion from the bottom of the canvas to the top, and have them pop if the mouse touches them. This once again would have treaded into territory I had not yet explored, and while I would have loved to explore this, I've realized that I'm going to need a lot more time than just a week to do it.

I kind of want to try and code something more challenging rather than code 3 separate things each time. While it is fun when I succeed, it feels like I could be doing so much more. I wish the incentive to push boundaries was a little stronger with these assignments from this point on, though I understand why they aren't, since this is technically still an intro class.

My favorite one out of the three prototypes I made for this one is "No Touchie" because it feels very stimmy :>

## 21/10/2026
Topic of this entry: My prototypes - Events

This assignment gave us 2 weeks to work with. I was quite fond of the amount of time I had to think and process my different ideas for this one, especially considering how much more in depth you can go with coding events. This allowed me enough time to plan and code a functionable enough prototype of a game, using everything I have learned and used in my previous prototypes, as evident by Project_2_Eat_To_Grow_Bigger. I find myself craving one final assignment to work on where I can allow myself more time to polish and add to a simple game prototype without having to remind myself that this assignment isn't asking me for anything complicated.

I think so far I have had the most fun with this assignment! I also was weirdly the most comfortable with it. I'm finally starting to find my own style of coding, and I've noticed that I have a big habit of giving every single feature its own function before I call them in function draw(), which usually works but sometimes it doesn't and I'm still learning why and why.

I'm excited for the next prototype assignment! And hopeful for an extended time limit to finish it.

## 30/10/2026
Topic of this entry: My prototypes - Functions

So since I've been informed that the purpose of this journal is to NOT liveblog my reactions to the assignments but to also discuss the process of how I proceeded with each prototype, I'm gonna try and be more organized with my thoughts. No promises though!

So my first prototype in the list was honestly purely me re-learning the material. I had struggled with understanding how the parameters worked when it came to passing values around, so I rewatched some of the learning material and ended up having to ask for advice again in class. I eventually figured things out and decided to just polish my dabble a bit and use parameters to change the colors of my shapes with a click. Nothing too exciting with this one but it was an important stepping stone for my upcoming prototypes.

My second one was me getting distracted from the learning material when I first started it. I wanted to make a simple drawing program! So I started with all the basics that I knew and I basically had a functioning prototype! Only issue was I had forgotten to use parameters. So I admittedly had to figure out HOW to use parameters for this one and I ended up using it in my function ChangeColor! I also successfully passed my first proper objects in this one! It was very satisfying to figure out how passing objects worked in this.

And finally, we come back to No Touchie V2, which as the name implies is the second version of a prototype I made for my conditionals! Except this time it includes other shapes! I think I truly grasped everything the class was trying to teach me about using parameters and functions in this project. I managed to code a function for calculating the distance between my cursor and the shape and use return value correctly in my first try. I managed to make a function that could target ANY of my three shapes rather than having one for each separate shape, and I was able to use parameters to EASILY draw ANY shape with my drawShape function by giving my different shapes a "type". Needless to say I'm very satisfied with it all.

## 06/11/2026
Topic of this entry: My prototypes - Arrays

This is a late entry. But I am going to focus on the progress of how I did each prototype.

Starting with my first one, I was actually inspired by the Arrays Challenge with all the bouncing balls across the canvas, and I wanted to try a different approach with it. I wanted to imitate gravity and have the balls accelerate in speed the further they fell and have a bigger bounce off the bottom of the canvas, and slowly begin bouncing shorter and shorter until they stopped. I did this by giving my ball(or orb object as they're called in the script) both a gravity property as well as bounce. Gravity is slowly added to their yspeed and bounce only gets applied when the orb's x + the radius of the eclipse hits the maxiumum Y of the canvas. Like the challenge (and because I also wanted to try and use a loop for all of these prototypes, even despite loop prototypes being taken off of the syllabus), I used a For loop to have this effect be applied to every orb that would be spawned. For the array part, I created an orbs[] array to push my objects into it with every key press (since the orbs spawn with your mouse click, as your mouse position).

One interesting thing that I wasn't expecting to stumble upon, however, was when my browser began slowing down and crashing when I spawned too many orbs. This is how I came up across splice, which allowed me to set a maximum amount of objects within my array, by using a condition that if the length of my array reached a certain number, that the last object would be removed. Learning splice here comes up in my next prototype as well in a very fun way I'm excited to share.

Orb Runner, my second prototype is actually inspired by the offline browser game Dino runner. I was curious if I would be able to put the obstacles within an array while coding it. Doing this one was very fun because it made me realize that I could in fact make my own dino runner inspired game in the future if I so wished.

I started this one with my obstacles array and writing my data and variables for the player. I've noticed that I begin most of my scripts by putting down the data first before I try to actually draw them. Something worth keeping in mind. I also fumbled a lot with where I wanted the ground to be and how I wanted everything to be placed on my canvas when it did come to coding it.

I used what I had learned in my first arrays prototype to code in a "jump" rather than "bounce" for my player ellipse. Using gravity, I gave it the same effect of slowly falling down after bouncing up to give the impression of a smooth arc motion to the action. I once again used a For loop to spawn my obstacles and have them move across the screen, while also using a "check colission" function I coded earlier to have the script check and see if the player ellipse's x + radius came into contact with my rectangle obstacles, to which it will trigger a GameOver! screen.

And using splice and another For loop, I was able to code something that would remove my objects from the array once they went off screen. If you use console.log on the length of my array, you will see this happening which I think is very cool!

And for my last prototype, Particles, I was inspired by my "No Touchie" series, except this time I wanted the objects to move AWAY rather than shrink. This one was simpler to do, but I enjoy its visuals the most.

Same beginning, start with making an array for my particles, set a max amount of particles and make a variable for the particles. I eventually move my variable for the particles within a function dedicated to creating them. (I forgot to mention that I ended up doing this for the previous one as well for the obstacles). 

I had the spawn particles be put in setup because I wasn't sure how else to make them only spawn once, and I had every spawned particle be stored within the particles array. And then, using a For loop (we love For loops in this house) I had every single one of them move away from my mouse after reaching within a certain radius of it that I had set in a variable as well. To make the motion feel smooth, I multiplied their x and y speed by 0.05 before they'd be applied to their x and y position, and for when they'd move back to their original position, I used lerp.

Not much else to say about this last one other than I really like how the final result looks and feels.

## 23/11/2026

Topic of this entry: Final Project - Week 1

I know this is on a monday, but I was quite occupied last week and had been hoping to have more progress done before I wrote my entry and ended up miscalculating a lot of things. Whoops!

I admittedly didn't spend as much time working on my final project as I would have liked on my first week, but I am very happy with what I DID make progress with. I know what I am going to be coding and going to the workshop class I was able to get the confirmation and a lot of good advice from my professor on how to make some parts of it work, as well as a green light for my idea in the first place which is the biggest most important part of this at all.

I am going to be making a simple farmer game. Main goal is to have a farmer who buys from a market, plants seeds and waits for the crops to grow and then goes and sells them back to the market to buy more, better seeds. There's going to be three locations that the farmer switches to by walking up and down a path which will then make the different areas spawn in. I DO need to figure out how to have the different loaded areas NOT interfer with the other locations, especially for the crops while they are growing but before I do that I want to have at least ONE location done.

Still, it's nice to know what I'm going to be working towards! Wished I had more to share but I didn't end up working too much on the script other than setting down my data and drawing the farm location without any interactions possible yet. I still need to draw my player as well. 


