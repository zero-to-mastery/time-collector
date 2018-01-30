Time Collector
======

> Below is a summary of the apps functionality, requirements, design language, tech specifications and more to come.  
> It is intended to be used as a guide while we are building this app. Please contribute by making suggestions, changes, corrections
> and improvements to this document as we go along. It may provide valuable when we eventually will need to write some documentation.  
> **Happy Coding** :smile:

### Table of contents
1. [App functionality](#app-functionality)
   - [Landing page](#landing-page)
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
   
4. [Tech details](#tech-details)
   - [Description](#description)
   - [Frontend](#frontend)
   - [CSS](#css)
   - [Backend](#backend)
   
5. [Known issues and bugs](#known-issues-and-bugs)

<br><br>

App functionality
------
### Landing page
- [ ] Describe the application and its features
- [ ] Have a call to action
- [ ] Easy access to documentation and repository


### Login page
- [ ] Have a way for users to login
- [ ] Have a way for users to register
- [ ] Have a guest mode
- [ ] Have a way for users to retrieve password 


### Timer page
- [ ] Display today's date
- [ ] Have a counter
- [ ] Have a start, stop and reset button
- [ ] Have the possibility to add manual hours 
- [ ] Be able to save time from counter to projects
- [ ] Be able to edit time collected from counter before saving to a project
- [ ] Option to see the expected time to use on the project


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
- [ ] Log out

<br><br>

Functionality details
------

### Sign in options
Simple auth with email and password or option to sign in with google, facebook, github, twitter etc..  

### Guest mode
Users should be able to use the app without signing in if they so wish. Full functionality, but session based so nothing  
is saved to the database.  

### New project
Users should be able to add details about a project and the client.  

- Project number
- Project name
- Client name
- Address
- Telephone number
- Email

<br><br>

Design details
------

### Logo
### Colors
### Typography
### Design language

<br><br>

Tech details
------

### Description
### Frontend
### CSS
### Backend

<br><br>

Known issues and bugs
------

### Nothing to report :)

<br><br>

made with :green_heart: by the boys and gals from [zero-to-mastery](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/overview)
