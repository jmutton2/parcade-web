# Parcade

This README provides instructions on how to download, install, and run the application.
Prerequisites

Before proceeding with the installation, ensure that you have the following prerequisites installed on your system:

    Node.js (version 16.15.0 or higher)
    Git

## Installation

Clone the GitHub repository to your local machine using the following command:

```bash
git clone https://github.com/jmutton2/parcade-web.git
```

Change into the project directory:

```bash
cd repository
```

Copy the .env.example file to .env:

```bash
cp .env.example .env
```

Obtain the appropriate API keys for services like Google Maps and TomTom. Update the .env file with the respective keys.

Install the project dependencies by running the following command:

```javascript
npm install
```

## Running the Application

To start the application in development mode, use the following command:

```javascript
npm run dev
```
