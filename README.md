# Upload Files Backend

## Description

I wanted to learn how users can upload files to a remote bucket. After some investigation i came up with [Signed Urls](https://cloud.google.com/storage/docs/access-control/signed-urls), a service by Google Cloud Storage.

## How it works

Basically, a logged in user asks this backend to upload a file with a filepath, let's say `folder/video.mp4`, to a `bucket`. This backend responds with a signed Url that allows the user to upload the file directly with a PUT request to `gs://bucket/folder/video.mp4`.

With this setup you avoid giving credentials to users. 

Feel free to ask me anything, just write an issue
