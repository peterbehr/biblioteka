#!/bin/bash

# filename utility
# add arguments for different functions
# make relative paths work
# the shell expands * and passes that arg to the script
# make lowercase and underscore and removing extra chars default
# double quotes allow for evaluation of expressions inside them
# can't have spaces between equal signs
# echo "nameclean"
# ignore invisible files

if [ $# -eq 0 ]
then
    # help message
	echo "Try \$$(basename $0) [file]"
	exit 1
fi

for arg in "$@"
do
	filename="$arg"

	if [ ! -f "$filename" ]
	then
		echo "$filename is not a regular file"
		exit 2
	fi

	# whitespace to underscores
	# lowercase
	# screenshot string
	# date cleanup
	# time cleanup
	# filename tail cleanup
	filename_new=$(\
		echo $filename\
		| sed 's/ /_/g'\
		| tr '[A-Z]' '[a-z]'\
		| sed 's/屏幕快照/screenshot/'\
		| sed 's/screen_shot/screenshot/'\
		| sed 's/\([0-9]\{4\}\)-\([0-9]\{2\}\)-\([0-9]\{2\}\)/\1\2\3/g'\
		| sed 's/_at_/_/'\
		| sed 's/\([0-9]\{2\}\)\.\([0-9]\{2\}\)\.\([0-9]\{2\}\)/\1\2\3/g'\
		| sed 's/(2)/2/g'\
		| sed 's/_\././g'\
	)

	if [ -f "$filename_new" ]
	then
		echo "File already exists!"
		# filename_new=$(\
		#	echo $filename_new\
		#	| sed 's/\.png/_2.png/'\
		#)
	else
		# change file name
		echo "Renamed $filename to $filename_new"
		mv "$filename" "$filename_new"
	fi
done

exit 0