# Self-Hosted GitLab Setup

This directory contains the configuration for running a self-hosted GitLab instance using Docker.

## Prerequisites

- Docker Desktop for Windows installed and running
- At least 4GB of RAM available for Docker

## Getting Started

1. Start GitLab:
   ```
   docker-compose up -d
   ```

2. Wait for GitLab to start (this may take a few minutes on first run)

3. Access GitLab in your browser at: http://localhost:8080

4. On first login, you'll be prompted to set a password for the `root` user

## Stopping GitLab

To stop GitLab:
```
docker-compose down
```

## Data Persistence

Your GitLab data is stored in the following directories:
- `./config`: GitLab configuration
- `./logs`: GitLab logs
- `./data`: GitLab data (repositories, database, etc.)

## SSH Access

SSH is available on port 2222. To use Git over SSH:
```
git clone ssh://git@localhost:2222/username/project.git
```

## Backup

To back up your GitLab instance, see the [official GitLab backup documentation](https://docs.gitlab.com/ee/administration/backup_restore/).
