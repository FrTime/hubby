# hubby

## About This Project

The aim of this project is to design a hub for use with a smart mirror or other interface.  The user will be able to select a variety of widgets to display information such as weather, traffic, calendar appointments, etc.  The layout/style of the home page can be dynamically changed by the user in order accommodate varying screen types and sizes.

<hr>

## Development

The intended application of this project is to provide a clean, easy-to-use interface that can display information from multiple sources.  For businesses this could include upcoming events from a company calendar, an employee directory, clocks displaying the times of multiple offices, and project updates.  For personal use, this application could be used along with a Raspberry Pi or similar device to create the background for a smart mirror.  The value in this project is that it can utilized by anyone regardless of programming knowledge.  All of the user settings such as screen resolution, widgets used, background color, etc. will be saved so that users can keep a consistent theme layout throughout multiple devices.

The layout will consist of two screens.  The user will initially be met with a simple login screen for user identification.  All of the settings for each user will be saved in a NoSQL database.  We decided to use NoSQL as each user will have a unique combination of widgets in use, each with unique settings.

The second screen will be rendered depending on the user settings loaded.  A new user will be met with a prompt confirming the intended window resolution which will create a virtual window that widgets can be added to, moved, and resized.  An expandable drop menu will used for adding widgets and adjusting their settings.

[The current deployed version can be accessed here.](https://hubby-app.herokuapp.com/)


## Task Management

For role and task management we are using [Waffle](https://waffle.io/FrTime/hubby). Version and source control are being managed with [GitKraken](https://www.gitkraken.com/).
