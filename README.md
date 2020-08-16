## Simple Instagram

### Description
Instagram clone. Allows to share, view, like, and comment photos.

### Table of Contents
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)


## Technologies
Technologies and packages used:
  - ReactJS (with create-react app)
  - React Router DOM
  - Material UI
  - Node.js v12.16.3
  - Firebase Authentication
  - Firebase Database
  - Firebase Storage

## Installation

#### 1. Clone 
   
  Clone this repo on your local machine from [https://github.com/tdrv90/simple-instagram].
#### 2. Setup
```
    npm install

```
#### 3. Run

```
    npm start
```
and open http://localhost:3000 in your browser.

## Usage
The app has a public part (accessible without authentication) and private part (available for registered users)

### Public part
1. Guest Home Page: static page with, renders header with links to Posts / Sign In and Sign Up pages.

![Guest Home Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F01-home.png?alt=media&token=4d504d66-a36e-44de-90bd-02996404ba12)

2. Posts Page: the guest can see posts from registered users, but cannot comment or like them.

![Guests Posts Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F01-posts-guest.png?alt=media&token=e7883d91-7869-4a5f-8aaa-5e5b1b92b428)
3. Sign In Page: the user can authenticate with their profile
![Sign In Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F02-signin.png?alt=media&token=049dbcbe-3b8c-426c-ae70-a1e74ebdf718)
4. Sign Up Page: the guest can register an account with the profile name, email, and password 
![Sign Up Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F03-signup.png?alt=media&token=0cdcbe6b-f49f-4644-8244-d42157cab415)

### Private part
1. Home Page: once the user has authenticated the Guests Home Page is not visible for them and it redirects to '/posts'

2. Posts Page: the user can see all available posts ordered in descending view (the latest posts are on top) and can comment on them. There is Likes functionality available for authenticated users. Liked posts can also be unliked which will remove the like from the logged user.
![Posts Page Authenticated](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F04-posts.png?alt=media&token=4dd85e04-7abd-47d0-9fc0-009f15508534)

3. My Posts Page: this page shows the posts only from the logged user. Also, it provides functionality to delete your posts.

![My Posts Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F05-myposts.png?alt=media&token=6105570c-6576-40ef-969d-9330a5a1ebab)

4. Add Post Page: this is the page from where new posts are added. To add a new post the user must write a caption and select a photo.

![Add Post](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F08-addpost.png?alt=media&token=2cf71511-1576-458a-8c37-f15bf147260e)

5. Profile Page: provides basic profile details (username and email), functionality to change the user password, and image upload module to add a profile photo.

![Profile Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F06-profile.png?alt=media&token=f2452b13-24b3-4621-a728-8b8737e62b33)

6. Logout Page: Logouts the user and redirects to Guest Home Page

![Logout Page](https://firebasestorage.googleapis.com/v0/b/simple-instagram-4f24f.appspot.com/o/screenshots%2F07-logout.png?alt=media&token=8b575c38-bf38-48c4-b574-90269b44fc3c)



## License
MIT