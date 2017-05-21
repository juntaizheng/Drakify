
def stripPunc(wordList):
	"""Strips punctuation from list of words"""

	return wordList.replace(",", "").replace(".", "")
my_file = open('started_from_the_bottom.txt','r+')

my_str=my_file.read().replace('\n', ' ')
print(type(my_str))
my_file.close()

replaced_file = open('started_from_the_bottom.txt', 'r+')
replaced_file.write(stripPunc(my_str.lower()))

#my_file.close
#rewrite to to .txt file
