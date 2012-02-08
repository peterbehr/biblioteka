# when this script runs, it does the following

# moves rc files into appropriate places
# moves prefs into appropriate places
# sets git configuration, including aliases (let's include a flag for that, or perhaps we just move a config file...how likely is the config file syntax likely to change?)

# git config --global user.name 'Peter Behr'
# git config --global user.email 'pbehr@uchicago.edu'
# git config --global color.diff auto
# git config --global alias.st 'status'
# git config --global alias.ci 'commit'
# git config --global alias.br 'branch'
# git config --global alias.co 'checkout'
# git config --global alias.df 'diff'
# git config --global alias.pl 'pull origin master'
# git config --global alias.ps 'push origin master'
# git config --global alias.ignored 'ls-files -o -i --exclude-standard'
# git config --global alias.purge '!git rm $(git ls-files --deleted)'
# git config --global alias.count '!git shortlog -n $@ | grep "):" | sed "s|:||"'