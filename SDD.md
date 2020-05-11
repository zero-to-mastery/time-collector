# Time Collector
======

> Below is a summary of the apps functionality, requirements, design language, tech specifications and more to come.
> It is intended to be used as a guide while we are building this app. Please contribute by making suggestions, changes, corrections
> and improvements to this document as we go along. It may provide valuable when we eventually will need to write some documentation.
> **Happy Coding** :smile:

**Suggestion**
There are hundreds of simple and free to use timer apps out there already, so what cool ideas do you have that would give our time-collector a unique edge and make it fun and interesting to use?

Add ideas here:
   -
   -
   - 

## Table of contents
1. [App functionality](#app-functionality)
   - [Landing page](#landing-page)
   - [Timer page](#timer-page)
   - [register page](#register-page)
   - [Login page](#login-page)

   - [Time overview](#time-overview)
   - [Project overview](#project-overview)
   - [Archive](#archive)
   - [Export options](#export-options)
   - [Settings](#settings)

2. [Functionality details](#functionality-details)
   - [Sign in options](#sign-in-options)
   - [Guest mode](#guest-mode)
   - [New project](#new-project)

3. [Design details](#design-details)
   - [Logo](#logo)
   - [Colors](#colors)
   - [Typography](#typography)
   - [Design language](#design-language)
   - [Dark Theme](#dark-theme)

4. [Tech details](#tech-details)
   - [Description](#description)
   - [Frontend](#frontend)
   - [CSS](#css)
   - [Backend](#backend)

5. [Known issues and bugs](#known-issues-and-bugs)

<br><br>

## App functionality
------------------------------------------------------------

### Landing page

- [ done ] Have a call to action = start to collect
- [ ] Describe the application and its features (see below: ### Landing Page )
- [ ] Easy access to documentation and repository (see below: ### Landing Page )

#### Routes to take from the landing page:
   1. [ start to collect ] goes to the timer in (#guest-mode)
   2. [ register ] register a new user to the database
   3. [ log in ] logs an existing user into their profile which has the timer foremost and additional history/reports of saved times, and user preferences.

### Register page
- [ ] Have a way for users to register with: name, email, pass word
- [ ] Have a way for users to register with: facebook, github, google. 
- [ done ] Have a button that redirects to login
- [ done ] Have a back to landing page button

***to do:***
- [ ] Usee CSS to make page max height 100 % of vh
- [ ] Usee CSS to make primary contaier same width as in landing page to enhance continuity between pages

### Login page
- [ ] Have a way for users to login
- [ done ] Have a button that redirects to register
- [ done ] Have a back to landing page button
- [ ] Have a way for users to retrieve forgotton password

***to do:***
- [ ] Usee CSS to make page max height 100 % of vh
- [ ] Usee CSS to make primary contaier same width as in landing page to enhance continuity between pages


### Timer page
- [ ] Display today's date
- [ ] Have a counter
- [ ] Have a start, stop and reset button
- [ ] Have the possibility to add manual hours
- [ ] Be able to save time from counter to projects
- [ ] Be able to edit time collected from counter before saving to a project
- [ ] Option to see the expected time to use on the project
- [ ] Option to set a reminder to return to the app when expected time expires


### Time overview
- [ ] Have a way select project
- [ ] Display total used hours
- [ ] Display expected hour usage
- [ ] Have a way to edit hours
- [ ] Have a way to delete hours
- [ ] Have an option to export hours


### Project overview
- [ ] Have a way to select project
- [ ] Have a way to add new projects
- [ ] Have a way to edit project details
- [ ] Have a way to show / hide project details
- [ ] Have a way to set expected hours on a project
- [ ] Have a way to set project time frame via datepicker
- [ ] Make the timeframe exportable to other calendars like google etc.


### Archive
- [ ] Show all archived projects in a list
- [ ] Have a way to revive a project
- [ ] Have a way to delete an archived project for good


### Export options
- [ ] Mail
- [ ] PDF
- [ ] CSV


### Settings
- [ ] Profile
- [ ] Preferences
- [ ] Dark theme
- [ ] Log out

<br><br>

## Functionality details
------------------------------------------------------------

### Landing Page
**Suggestion**
The landing page is clean/minimalist, which is really nice, however there could be more information added to this page, i.e., in desktop mode there is space to the left and right for, perhaps, a vertical bar of buttons or links. For example: link to the github repository, link to the ztm course, description of the app, documentation for the app, etc... Further, keep in mind that these sidebars would need to move down and center when in mobile mode.

### Sign in options
The app currently has buttons for simple auth with email and password or option to sign in with google, facebook, github. 
These need to be made functional.

### Guest mode
Users are able to use the app without signing in, simply by clicking the button: start to collect. This mode offers full functionality, except for the ability to store seesion data to the database.

### New project
Users should be able to add details about a project and the client.

- Project number
- Project name
- Client name
- Address
- Telephone number
- Email


<br><br>

## Design details
------------------------------------------------------------

### Menu
There is a really nice menu in file called menu.html. This needs to be incorporated into the main document as a pop up/modal type of full page meny. Keep in mind that there are at least two states for this menu, signed in or not signed in.
**Suggestion:**
Make the width of this menu so that the log out button is the same wdith as it would be in the landing page, and then fade or dull the surrounding area to maintain a full page style.

### Logo
At current the logo is a simple fontawesome icon: fa-clock.
**Suggestion:** 
re-create the clock using either pure css or svg, which will enable us to animate the hands to let them spin slowly.

### Colors
Please feel free to update this section with a schematic of colours used so far in normal theme and dark-theme.

### Typography
Please feel free to update this section with a schematic of fonts used so far

### Design language

### Dark-Theme
The dark-theme is currently being built side-by-side to the original normal theme in its own folder. 
One drawback is that all changes should be done twice, one for each mode. 
One opportunity is that when bringing existing material over from normal theme, one can strip back and clean up all the excess files and data, since as you will notice their are many extra files and data in normal mode.
   

<br><br>

## Tech details
------------------------------------------------------------

### Description
### Frontend
### CSS
At current, the project has two seperate themes, normal and dark-theme. The diffence in themes is that each one has its own css file: 
   - normal = bootstrap.min and style.css
   - dark-theme = bootstrap cdn and darkstyle.css
Both themes still share the same resources for fonts and fontawesome icons.

### Backend

<br><br>

## Known issues and bugs
------------------------------------------------------------

### Nothing to report :)

<br><br>

made with :green_heart: by the boys and gals from [zero-to-mastery](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/overview)
