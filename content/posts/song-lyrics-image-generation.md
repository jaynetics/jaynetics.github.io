+++
title = "Feeding song lyrics into Dall-E 3, Midjourney, and Stable Diffusion"
description = ""
type = ["posts","post"]
tags = []
date = "2023-11-01"
+++

Song lyrics are a great source of mental imagery. Can they inspire image generation models as well?

You wouldn't expect an image generation model to go for a poetic interpretation of the input, so they will certainly struggle to reflect the mood of a song based on its lyrics alone.

They might score some lucky hits anyway, and it's also interesting to see how well each model deals with varying levels of metaphorical language and non-standard prompts.

To find out, I've taken ten very different pieces of music, fed their lyrics into Stable Diffusion, Midjourney, and Dall-E 3, and compared the results.

To keep things fair, I entered only the same snippets of lyrics as input into each of the models, without embedding them into any other prompt, and always used the initial results.

## The Beatles - Lucy in the Sky with Diamonds

I suspected that well-known songs might produce different results compared to little-known songs because their lyrics might appear in the training data, either as image titles or as OCR-processed texts in the images themselves. Hence I started with the best-selling band of all. [Lucy in the Sky with Diamonds]( https://www.youtube.com/watch?v=naoknj1ebqI ) is a song about an LSD trip, as the title gives away without too much subtlety. The lyrics are heavy on the visual, so I expected the results to capture the mood of the song quite easily.

### Prompt

> Picture yourself in a boat on a river\
> With tangerine trees and marmalade skies\
> Somebody calls you, you answer quite slowly\
> A girl with kaleidoscope eyes

### Results

#### Stable Diffusion

{{<image src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_lucy_in_the_sky_with_diamonds.jpg" alt="Stable Diffusion image">}}

The boat and the river are there, as are the dominant colors, but it somehow reminds me of a dull boat trip that someone's been forced to do with their grandma.

#### Midjourney

{{<image src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_lucy_in_the_sky_with_diamonds.jpg" alt="Midjourney image">}}

With its vibrant colors and symbolic flair, this looks a lot more psychedelic and is more evocative of an intense experience.

#### Dall-E

{{<image src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_lucy_in_the_sky_with_diamonds.jpg" alt="Dall-E image">}}

Dall-E tried to incorporate the lyrics into the image and was the only one to show the face of the girl. The girl wears a lot of vaguely kaleidoscopic stuff, but her eyes are completely normal. I found it interesting that none of the models picked up on the most visually striking and distinctive detail in the lyrics – the kaleidoscope eyes.

## Nirvana - Smells Like Teen Spirit

According to Cobain himself, the lyrics for [Smells Like Teen Spirit]( https://www.youtube.com/watch?v=hTWKbfoikeg ) are "kind of meaningless, because the point is that rock'n'roll is supposed to be meaningless". Still, you'd expect a good visualization to evoke some kind of teenage angst or boredom.

### Prompt

> With the lights out, it's less dangerous\
> Here we are now, entertain us\
> I feel stupid, and contagious\
> Here we are now, entertain us

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_smells_like_teen_spirit.jpg" alt="Stable Diffusion image">}}

A young guy with a grungy style and a disillusioned facial expression. Spot on.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_smells_like_teen_spirit.jpg" alt="Midjourney image">}}

What is this? Harry Potter and the Cave of Dimmed Lamps? Well, it has a young guy and the mood is dark, so it's not completely off point.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_smells_like_teen_spirit.jpg" alt="Dall-E image">}}

This looks like a bunch of zombies going to a rock concert. The inset lyrics go well with that, because if you try to read them out loud you'll feel approximately as "stupid and contagious" as a zombie...

## Metallica - King Nothing

[King Nothing]( https://www.youtube.com/watch?v=Xz9DX_VMXdI ) is a song about hubris and empty pursuits. The lyrics are more metaphorical than in the previous examples, so it will be interesting to see how the models deal with that.

### Prompt

> And it all crashes down\
> And you break your crown\
> And you point your finger, but there's no one around\
> Just want one thing, just to play the king\
> But the castle crumbled and you're left with just a name

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_king_nothing.jpg" alt="Stable Diffusion image">}}

This forlorn figure in front of a derelict castle has more of a wistful air. The blame apportioned in the lyrics is not really reflected in the image.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_king_nothing.jpg" alt="Midjourney image">}}

This one I found really interesting. It doesn't visualize a single noun from the prompt, but seems to find a nice symbolism for the song anyway: overplaying your cards. Just a coincidence?

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_king_nothing.jpg" alt="Dall-E image">}}

I thought this one was pretty good. Perhaps the king remains a bit too self-contented to really fit the lyrics, but rendering the castle at the size of a plaything is a nice "idea" that suits the theme.

## Gloria Estefan - Conga

[Conga]( https://www.youtube.com/watch?v=54ItEmCnP80 ) is in many ways an archetypical dance track. The lyrics don't play a major role here. They mostly try not to get in the way of the rhythm and mood.

### Prompt

> It's the rhythm of the island\
> And like sugarcane so sweet\
> If you want to do the conga\
> You've got to listen to the beat

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_conga.jpg" alt="Stable Diffusion image">}}

The Stable Diffusion images often take on this "old master" style. This one reminds me a bit of Gauguin or Diego Rivera. There's plenty of dynamism, but I'm not sure I feel invited to this particular party.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_conga.jpg" alt="Midjourney image">}}

As in the previous image, none of the musical instruments really resemble a conga. But don't you just wanna hug this guy? And join a conga line with him?

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_conga.jpg" alt="Dall-E image">}}

Is that sugar cane wrapped in bacon? It's an adorable tiny party nevertheless.

## Kanye West - Power

One of Kanye's biggest hits, [Power]( https://www.youtube.com/watch?v=L53gjP-TtGE ) is actually a bit of an odd song, blending maximum braggadocio with musings on inner struggles. For the prompt I went with the more boastful part.

### Prompt

> I'm living in that 21st century\
> Doing something mean to it\
> Do it better than anybody you ever seen do it\
> Screams from the haters, got a nice ring to it\
> I guess every superhero need his theme music

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_power.jpg" alt="Stable Diffusion image">}}

Stable Diffusion picked up on the word "superhero". Apparently it couldn't decide which one it preferred.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_power.jpg" alt="Midjourney image">}}

This one resembles a movie poster. I like the chunky headphones. The hero might be using those to listen to the screams of his haters on repeat.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_power.jpg" alt="Dall-E image">}}

I'll let this one stand for itself. Let me just say, I'm pretty sure this is not the type of "power" Kanye had in mind...

## Kinski - Newport

Let's try something more artsy where the intention is not so obvious. If anything, I would say that Kinski's [Newport]( https://www.youtube.com/watch?v=OXjx-2MFx3s ) has a vaguely intense and breathless ambience. It's also a pretty unknown band and song, so let's see if that has any effect on the outcome.

### Prompt

> Run\
> to the beach-house\
> stay there\
> 'til you get my phone-call

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_newport.jpg" alt="Stable Diffusion image">}}

Yep, she's running to the beach-house, but will she wait there until she gets that ominous phone call? Hard to tell. The chilled-out dog kinda ruins the tension either way.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_newport.jpg" alt="Midjourney image">}}

This is the type of small beach-house that I had in mind. The only thing is that with so many neighbors nearby, waiting there doesn't feel as exciting as it should.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_newport.jpg" alt="Dall-E image">}}

Finally! A Dall-E production that is not cluttered with gibberish text! The beach-house is more of a mansion than I would expect, but maybe it's a haunted mansion? The guy even has a phone for that upcoming call. But why is he hanging onto his business class luggage amidst all that drama? Are there perhaps some nuclear codes in that suitcase? Consider me intrigued.

## Joanna Newsom - Go Long

*Joanna Newsom*'s music often deals with complex emotions, and her rich imagery can be tricky to unpick. What will the models make of [Go Long]( https://www.youtube.com/watch?v=LeskDR5ophs )?

### Prompt

> There's a man\
> who only will speak in code,\
> backing slowly, slowly down the road.\
> May he master everything\
> that such men may know\
> about loving, and then letting go.

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_go_long.jpg" alt="Stable Diffusion image">}}

This is a very literal interpretation, but the mood is sombre and thoughtful enough.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_go_long.jpg" alt="Midjourney image">}}

In what might be a coincidence, this one includes antique clothing and an autumnal scenery that resemble those found in some of Newsom's promotional images. If you look closely, you can see the lights of a cozy home in the background fog, which goes well with the song's theme of painful separation.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_go_long.jpg" alt="Dall-E image">}}

This might be a bathroom tile that has been put through a typewriter.

## Clouddead - Physics of a Bicycle

Now for another little-known and challenging bit. Clouddead are a hip-hop group and known for their abstract lyrics. It's not obvious what their song [Physics of a Bicycle]( https://www.youtube.com/watch?v=ni0hThlnFhI ) is about. My take is that it tries to capture the feeling of amazement that can occur while being high.

### Prompt

> Mother Nature made the airplane\
> And submarine sandwich\
> With the steady hand and dead eye of a remarkable sculptor\
> She shed her mountain-turning training wheels\
> For the convenience\
> Of a moving sidewalk

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_physics_of_a_bicycle.jpg" alt="Stable Diffusion image">}}

I can't see much in this image except a distorted plane. The other elements are missing and there is not much of a symbolic touch. With a lot of benevolence you could call the result enigmatic.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_physics_of_a_bicycle.jpg" alt="Midjourney image">}}

I didn't think you could merge a plane, a submarine, and a cornucopian sandwich into one, but here we are. It's just a bit over the top compared to the more low-level psychedelic experience that the song hints at.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_physics_of_a_bicycle.jpg" alt="Dall-E image">}}

This one is my favorite in this round. It's like mother nature actually made the airplane as a gift and even put her signature on it in almost correct English.

## Electric Six - I'm the Bomb

Let's try something that is a bit ironic and over the top. Electric Six often play with exaggerated machismo, and [I'm the Bomb]( https://www.youtube.com/watch?v=cIBJMV9bc80 ) is no exception. Will the models pick up on the tongue-in-cheek tone?

### Prompt

> Now who elected you judge and jury\
> In the body of a beautiful girl?\
> And I suspect heavy gerrymandering\
> At the single's bar\
> And now, I'm a man with conversations skills\
> And I'm a man with hundred dollar bills

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_im_the_bomb.jpg" alt="Stable Diffusion image">}}

A man with dollar bills, that's about it.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_im_the_bomb.jpg" alt="Midjourney image">}}

This one has done better to capture the machismo and the beauty it longs for. The text looks completely random but doesn't detract too much.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_im_the_bomb.jpg" alt="Dall-E image">}}

Dall-E somehow managed to include all the things mentioned in the prompt, yet the result is kinda boring.

## The Beards - If Your Dad Doesn't Have a Beard, You've Got Two Mums

*The Beards* are an Australian band that only write songs about beards. [This song]( https://www.youtube.com/watch?v=RmFnarFSj_U ) is about how great beards are, and how you should have one, as are all their songs.

### Prompt

> If your Dad doesn't have a beard\
> You've got two Mums\
> Two beardless Mums

### Results

#### Stable Diffusion

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/sd_if_your_dad_doesnt_have_a_beard.jpg" alt="Stable Diffusion image">}}

This one seems to illustrate that losing a beard feels like a severe mutilation.

#### Midjourney

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/mj_if_your_dad_doesnt_have_a_beard.jpg" alt="Midjourney image">}}

This one is a bit too much on the serious side, but the aesthetics are nice nevertheless.

#### Dall-E

{{<image loading="lazy" src="/img/e1bf6155-ad5c-4f69-b655-658c2bf5c0f5/de_if_your_dad_doesnt_have_a_beard.jpg" alt="Dall-E image">}}

This one is like a state-issued manual for happy family life: just grow a beard and you'll be fine.

## Conclusion

We're seeing rapid progress in terms of image generation. Just a year ago, these models were churning out images where eyes looked like they were melting into people's heads, and hands usually turned out like a mix between monster claws and meat pretzels. These issues are almost fixed now. When given some more challenging prompts as in this experiment, the models still hit a few roadblocks, though. That being said, I found it interesting that the output of Dall-E 3 and Midjourney's often had a symbolic flair that went well with the lyrics.

Irrespective of mood-fit, the results from Stable Diffusion felt a bit dry and not very inventive. This might be a case of regression to the mean - if you mix all colors, you end up with a medium grey. This could very well be a strength of Stable Diffusion: if a model is not fine-tuned to generate vibrant colors by default, it might better support various explicit saturation prompts. Unfortunately, I felt that Stable Diffusion showed a similar lack of decisiveness in terms of the motif, mixing arbitrary elements from the prompt in incongruent ways.

Dall-E had some good and some poor results. It took the prompt dead serious and often managed to incorporate every noun from the input in the result. However, it was hampered by its compulsive urge to print the prompt into the image verbatim. I wonder why. It does not do this as much with more common prompts, so I assume this is a fallback behavior for when it doesn't know what else to do with the prompt. Maybe this text-printing behavior has been dialed up a bit, so as to showcase the improved text printing capabilities of version 3? They're still rather "meh", though. Maybe they thought that leaving space for text makes the model more useful when generating ads and such. Either way, the text doesn't add much to these otherwise decent images. Dall-E does not support negative prompting, so they certainly need to be careful with such questionable defaults.

Of all the models, Midjourney seemed best at making something decent out of every prompt by granting itself a bit of artistic freedom. Maybe it is just well-tuned to the average taste, with a penchant for scenic lighting, clean textures, vivid colors, and a well-centered, dominant subject. These defaults could be criticized as catering to the masses, and the latter preference, for highlighting the individual, might also be one that particularly suits western audiences as opposed to societies with a more collectivist outlook. At any rate, I found Midjourney's output to be the most consistently creative and evocative one.

To generate good output from song lyrics, a two-step approach might work better than just naively using lyrics as prompts as I did here. First, we could put the full lyrics into an LLM and perform a fine-grained sentiment analysis. Then we could ask an image generation model to represent the detected emotions in a suitable way, maybe with all unique nouns from the lyrics sent along. This would also allow us to use the full lyrics of songs as an initial prompt, which would be more interesting than just a few lines. If we had another model to interpret the melody and instrumentals, and mixed that one in as well, things would get even more interesting.
