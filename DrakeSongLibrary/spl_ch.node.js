

/**
*these functions will return the best match URL of a string lyric match
* only call return_url_best_song(user_input)
**/

function get_song_text(file_name){
	fs = require('fs');
	fs.readLine(file_name,'utf8',function (err,data){
		if(err){
			return console.log(err);
		}
		return data;
	});
}



function findIndexOfGreatest(array) {
  var greatest;
  var indexOfGreatest;
  for (var i = 0; i < array.length; i++) {
    if (!greatest || array[i] > greatest) {
      greatest = array[i];
      indexOfGreatest = i;
    }
  }
  return indexOfGreatest;
}

/*split check algorithm*/
function split_check(user_input, song_text){
	var truths = 0;
	var sp1 = user_input.split(" ");
	var s1 = add_words(sp1.slice(0, (sp1.length / 2)));
	var s2 = add_words(sp1.slice(sp1.length / 2));
	var sp2 = s1.split(" ");
	var sp3 = s2.split(" ");
	var s3 = add_words(sp2.slice(0, (sp2.length / 2)));
	var s4 = add_words(sp2.slice(sp2.length / 2));
	var s5 = add_words(sp3.slice(0, (sp3.length / 2)));
	var s6 = add_words(sp3.slice(sp3.length / 2));
	if(song_text.search(s1) >= 0) truths += 1
	if(song_text.search(s2) >= 0) truths += 1
	if(song_text.search(s2) >= 0) truths += 1
	if(song_text.search(s3) >= 0) truths += 1
	if(song_text.search(s4) >= 0) truths += 1
	if(song_text.search(s6) >= 0) truths += 1
	return truths
	}
	function add_words(arr_of_words){
	s = ""
	for(var i=0; i < arr_of_words.length; i++)
		s += arr_of_words[i] + " ";
	return s.trim();
}


/* call this method to get the url of a youtube video, user URL to redirect to new video*/
function return_url_best_song(user_input){
	var song_file_names = ['hold_on_we_are_going_home.txt', 'lord_knows.txt'];
	var song_score = [];
	for(var i = 0; i < song_file_names.length; i ++){
		song_score.push(split_check(user_input,get_song_text(song_file_names[i])));
	}
	best_song_match = findIndexOfGreatest(song_score);
	selected_text = get_song_text(song_file_names[best_song_match]);
	url_index = selected_text.search("url:") + 4;
	url_string = selected_text.slice(url_index);
	return url_string;
}
