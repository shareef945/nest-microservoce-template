# Nest Microservice Template

This repository contains microservices which includes a payment microservice, notifications, and analytics.

## Features

- **Payments Microservice**: Handles all payment transactions securely and efficiently.
- **Notifications**: Sends out alerts and messages to users and admins.
- **Analytics**: Provides insights into sales, user behavior, and other metrics.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker
- Docker Compose

### Installing

To install Munchies Backend Services, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/shareef945/nest-microservoce-template.git
   ```

2. Start the services using Docker Compose:

   ```bash
   docker-compose up
   ```

This command will build the images if they don't exist and start the containers as defined in the `docker-compose.yml` file.

## Usage

After running the containers, the backend services will be accessible via the defined ports in the `docker-compose.yml` file.

- **Payments Microservice**: `http://localhost:<PORT>/payments`
- **Notifications**: `http://localhost:<PORT>/notifications`
- **Analytics**: `http://localhost:<PORT>/analytics`

## Development

To contribute to the Munchies Backend Services, follow these steps:

1. Create a branch:

   ```bash
   git checkout -b branch-name
   ```

2. Make your changes and commit them:

   ```bash
   git commit -m 'Commit message'
   ```

3. Push to the original branch:

   ```bash
   git push origin branch-name
   ```

4. Create the pull request.

## Contributing

We welcome contributions to the Munchies Backend Services. Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT] - see the `LICENSE.md` file for details.

## Acknowledgments

- So far, its all just me and the almighty father

## Contact

If you have any questions or comments about the Munchies Backend Services, please feel free to contact me. info@saitechnology.co
