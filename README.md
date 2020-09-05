This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to save myself a some time.

This was actually my first time touching React in about 4 years, which basically means re-learning it entirely. I had a lot of fun with it!

## General
I made some decisions pretty early to allow me to engage with the language better, complete the tasks, while avoiding some pitfalls that would probably have slowed me down.

I'm not using Redux for this reason. It wasn't necessary, given the simplicity and scale, and the learning curve would've been too intense upfront. I also didn't add a router, though this would probably actually be my priority over Redux, as being able to create query strings for users to bookmark and share images/pages would be an enrichment most users would appreciate.

I'm using `dotenv` to hide the API key, which is probably a given.

I also chose to work with sass because it reduces a lot of the clutter on styling, and it's just a preference.

The file structure began pretty ambitiously as I thought I'd have to seperate out a few more things, but I cleaned it up to make it nice and simple, given it has no router/store. I also removed a bunch of the chaff that came with `Create React App` as I wasn't using it, and it seemed like too much clutter.

## Photo Showcase
The photo showcase design is built using `justified-layout` + `react-justified-layout`, which was originally provided by Flickr. I tried a few other packages that promised similar things, but ended up using this one because it actually worked and required the least amount of legwork to get up and running.

I chose an infinite scroll because it replicates how your present site does it, but also because it encourages stickiness with users, as they can continue browsing without another prompt.

It's a pretty straight-forward UI/UX. A fixed nav allows you to filter on the fly without needing to scroll, and I wanted a bit more visual breathing room around the photos, so I gave it some extra space on the outside.

The photos in the album view don't scale on resize to ensure that when users are looking through photos they don't accidentally lose their place when the images shuffle on the resize.

I added a selector for "Features" as well as a toggle for NSFW. I considered adding a filter on category, but my playing around with the exclude while making the NSFW button revealed that the exclude query doesn't presently work, and I didn't want to create bloat to showcase something on principle. 

The mobile designs are pretty rudimentary. I decided that the navigation was still essential, but truncated it.

I was really excited to animate a loading icon, but the load times were sub .2 seconds while testing, so it wasn't neccessary, hah. So, kudos to performance?

## Photo Details
I chose to create a modal from scratch here because I didn't need anything fancy, and I wanted to make sure I could unmount them easily with some amount of granular control.

The modal is generated on click rather than a central modal that holds information so that it requires less state management, and allows you to unmount it when it's not in use.

I made it so that you can click on the image or press `esc` to close the modal. There's no X button which can be unintuitive for users, so I wanted to create a large area to continue interaction, while also allowing ease of use. This also allows me to make the images larger and take up more screen real estate.

In order to avoid wonky sizing I capped the photo detail page at 3ish lines and let it scroll on overflow. This keeps it a nice legible size, suggests more description where there is some, and gives more space to the image itself.

One of the challenges of this is that the `image_size` query parameter doesn't actually work, so the images aren't as high of a resolution as I'd like, making them look a little less impressive on higher resolution monitors and on larger screens.

## Cosmetics and Testing
So, the cosmetic portion is mostly covered in the other sections, but I'll take this as an opportunity to talk about my general strategy for UI/UX design.

If you look over my commit history, you can see that I usually start by creating a static idea of what I want it to look like, typically with ridiculous colours so I can see where things sit easily. 

Once I have a static understanding of the project and have moved and played with things to my hearts content the basic structure is all in place. This isolates tasks for me really easily. My structure is more or less going to remain the same, and I can compartmentalize each component.

From here I break out each component into their own file, and import them to the appropriate view. 

Here's where I can isolate functions and features, and deliver on them one at a time.

Once I've built out all the features, I can then look at the smallest level components and see if they can be reduced any more into smaller parts for re-use. 

## Other
I initially had the images on detail inspection set to `object-fit: cover`, which cropped them in close, and kept the sizing uniform. I thought it looked really sharp on mobile and on desktop, but I had someone look at it, and they suggested against that, so I changed that. Cover looks good, but for the photographer to see their image cropped outside of their expectations probably wouldn't be great, so I think it's the right call.

If I had more time/energy I'd probably want to: 
- start with a router
- give Jest some more of my time
- work on the mobile view more thoroughly
- get the image sizing just right
- figure out the resolution problems
- seperate out the `feature-select` and `nsfw-toggle` from the navigation and create common components so I can reuse those parts for `category-select`, `ppg`, and other such things
- organize my stylesheets a bit better

Overall I'm quite happy. I got to play around with ES2020's optional chaining, re-learn React, and laugh at some delinquents posting gross images while I was testing out the feature filter.
