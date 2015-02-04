var e = {},
	base = [],
	content_wrapper = '#pin2';

$(function() {
	function addScene(offset, duration, timeline) {
		new ScrollScene({
	    	triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setTween(timeline)
		.addTo(base.controller);
	}
	function addCaptionScene(offset, duration, caption) {
		new ScrollScene({
	    triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setClassToggle("#caption-"+caption, "active") // add class toggle
		.addTo(base.controller);

		/* new ScrollScene({
	    triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setClassToggle("#dot-"+caption, "active") // add class toggle
		.addTo(base.controller); */
	}
	function processFrames(anim_frames) {
	  	var overall_offset = 0,
	  		stories = {},
	  		caption_stories = {},
	  		keyframes,
	  		newCapIndex;

		for(var i in anim_frames) {
	  		keyframes = anim_frames[i].keyframes;
	  		newCapIndex = anim_frames[i].setCaption;

	  		overall_offset += anim_frames[i].offset;

	  		for(var element in keyframes) {
	  			if(!stories[element]) stories[element] = [];
	  			stories[element].push({offset: overall_offset, keyframe: keyframes[element]});
	  		}
	  		if(newCapIndex) {
	  			if(!caption_stories[newCapIndex]) caption_stories[newCapIndex] = {};
	  			caption_stories[newCapIndex].offset = overall_offset;

	  			if(newCapIndex > 1) {
	  				caption_stories[newCapIndex-1].duration = overall_offset - caption_stories[newCapIndex-1].offset;
	  			}
	  		}
	  	}

	  	for(var name in caption_stories) {
	  		var duration = caption_stories[name].duration;
	  		if(!duration) duration = 1000;

	  		addCaptionScene(caption_stories[name].offset, caption_stories[name].duration, name);
	  	}
	 	for(var name in stories) {
	 		var story = stories[name],
	 			frame_start = story[0],
	 			story_start = frame_start.offset,
	 			total_length = story_start,
	 			last_frame_offset = story_start;

			t = new TimelineMax();
			t.set($('#'+name), frame_start.keyframe);

	  		for(var i = 1; i < story.length; i++) {
	  			var frame = story[i];
	  			total_length += frame.offset;
				t.to($('#'+name), frame.offset - last_frame_offset, frame.keyframe);
	  			last_frame_offset = frame.offset;	
	  		}
			addScene(story_start, last_frame_offset - story_start, t);
	  	}
	}


	
	base.controller = new ScrollMagic();

	// Pin
	new ScrollScene({
    	triggerElement: content_wrapper,
		offset: 300,
		duration: 6000
	})
	.setPin('#pin')
	.addTo(base.controller);
  	
  	processFrames(anim_frames);	 



	/* new ScrollScene({
	    triggerElement: content_wrapper,
			offset: 3100,
			duration: 300
		})

		.setTween(new TimelineMax()
			.set(g, {snap: {scale: 1, ty: 0}})
			.to(g, 1, {snap: {scale: 0.85, ty: 10}})
			)
		

		.addTo(base.controller); */

	new ScrollScene({
	    triggerElement: content_wrapper,
			offset: 3500,
			duration: 100
		})

		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
			{"left": "0"},
			{"left": "100px",
			ease: Linear.easeNone}

		))
		.addTo(base.controller);

	// Scene 5
	new ScrollScene({
	    	triggerElement: content_wrapper,
			offset: 4450,
			duration: 500
		})
		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
				{"left": "100px"},
				{"left": "0px",
				ease: Linear.easeNone}
			))

		.addTo(base.controller);

	new ScrollScene({
	   triggerElement: content_wrapper,
			offset: 5450,
			duration: 500
		})
		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
				{"left": "0px"},
				{"left": "-50px",
				ease: Linear.easeNone}
		))
		.addTo(base.controller); 
		
  
});