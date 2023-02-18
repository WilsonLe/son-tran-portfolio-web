# Son Tran Portfolio

Portfolio for Son Tran: [sontran.vercel.app](https://sontran.vercel.app)

# How to edit

There are two ways for you to edit your portfolio

## Method 1: Directly Update On Github

Update directly on Github is quick and easy, but the downside is that you have to wait for your updated content to show up on your webiste.

Here is a list of things you can edit:

- [Text contents](#how-to-edit-text-contents)
- [Publications](#how-to-edit-publications)
- [CV](#how-to-edit-cv)

After you have updated your page contents, go ahead and commit those changes. It should take 1-2 minutes for the changes to propagate. Note that you should clear your browser cache to reliably see those changes, or you can wait for browser cache to expire to see those changes for yourself. This has been known to take upto 24 hours in some cases.

## Method 2: Update Locally

You can also clone this repository and update your website locally. The advantage of this is you can preview what your website looks like before uploading the new content up into the internet. Refer to the documentations below on how to setup your local machine.

The following commands are one-time setup commands.

```bash
# Download nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Once downloaded, close and open a new terminal

# Confirm installation
nvm -v

# Download node16
nvm install 16

# Confirm installation
nvm use 16

# Download yarn
npm install --location=global yarn

# Navigate to a folder where you want this repository to be

# Download the repo
git clone https://github.com/WilsonLe/sontran

# Install dependencies
yarn install
```

After you have completed your one-time setup commands, you here is a list of things you can update:

- [Text contents](#how-to-edit-text-contents)
- [Publications](#how-to-edit-publications)
- [CV](#how-to-edit-cv)

You can preview your changes locally using this command:

```bash
yarn dev
```

You navigate to [localhost:3000](http://localhost:3000) to preview your changes.

After you are happy with your changes, you can upload your code using the following commands:

```bash
git add config/index.ts public

git commit -m "your-message"

git push
```

## How To Edit Text Contents

To update text content on the webpage, navigate to folder `config`, open `index.ts`. This file contains text value for the entire website, stored in JSON format. The details and descriptions are specified in the file.

## How To Edit Publications

To add a new publication, you can simply update the `publications.md` inside the `public` directory.

## How To Edit CV

To upload a new CV, you can simply replace the file `cv.pdf` inside the `public/pdf` directory with your new CV. **Note that the file must be named "cv.pdf"**.

# Author

- [Son Tran](https://github.com/https://github.com/sonqt)
- [Wilson Le](https://wilsonle.me)
