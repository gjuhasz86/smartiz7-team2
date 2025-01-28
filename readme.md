# P5JS version control script

This is a small tool to track and sync a list of sketches from p5js.org locally and commit changes to a git repo.

# Requirements
- Python 3
- curl
- git

# How to use

1. Find the user and sketch_id of the sketch you want to sync
   - Parameters can be extracted from the url: `https://editor.p5js.org/<user>/sketches/<sketch_id>`
2. Add a new line to `track.txt`
   - Format for each line: `<user> <sketch_id>`
3. Run `sync.sh`
   - This will download a json representation of the sketch, and save it as the `_json/<sketch_id>.json`
   - Then recreates the files locally within the `_sketches/<sketch_name>__<sketch_id>` folder
   - Finally stages and commits all changes

# Known limitations

1. When extracting the files only directories and text files are considered. Assets are not downloaded. The json file contains an url to the asset file and can be downloaded manually if needed.
2. Both scripts have to be in the currect working directory as `sync.sh` references `extract.py`
3. As the name of the sketch is included in the directory structure, renaming the sketch creates a new folder and the old one has to be removed manually.