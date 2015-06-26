#/bin/bash

# -e option allows editing with arrow keys
# tab completion works, would be good to do some argument checking
read -e -p "Enter backup source: " SOURCE
read -e -p "Enter backup destination: " DESTINATION

# define the backup function
# TODO can this go elsewhere, or have arguments?
backup () {
    echo "Backing up source '$SOURCE' to destination '$DESTINATION'"
    sudo rsync \
    --delete \
    --recursive \
    --perms \
    --group \
    --owner \
    --times \
    --extended-attributes \
    --links \
    --one-file-system \
    --verbose \
    --progress \
    $SOURCE $DESTINATION;
}

# get confirmation
while true; do
    read -p "Are you sure? " CONFIRM
    case $CONFIRM in
        [Yy]* ) backup; break ;;
        [Nn]* ) exit ;;
        * ) echo "You must confirm Y/N" ;;
    esac
done
# TODO why double colons?
# TODO why not exit in Y case?

# TODO a simpler way to confirm, which to use?
# select CONFIRM in "Y" "N"
# do
#     echo $CONFIRM
#     exit
# done