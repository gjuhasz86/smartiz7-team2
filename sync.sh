cat track.txt | while read user id; do
  curl "https://editor.p5js.org/editor/${user}/projects/$id" -o "_json/${id}.json";
  python ./extract.py "_json/${id}.json";
done

git add . && git commit -a -m "BACKUP $(date -Iseconds)";
