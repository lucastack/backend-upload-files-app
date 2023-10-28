gcloud storage buckets update  gs://input-videos-bucket --cors-file cors.json
gcloud storage buckets describe gs://input-videos-bucket --format="default(cors_config)"
