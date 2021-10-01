#  Ionic Weather & News App

This is an Ionic mobile application using the Angular Framework that displays the weather and news data through the use of API calls.

## Quick Start

1. cd into project repo

        cd weather-news-app-ionic-main

2. download node libraries

        npm install

3. start app in localhost

        ionic serve

4. Register for free weather and news api keys, the sites used in this project are openweathermap.org and newsapi.org. Input relevant keys into weather-news-app-ionic/src/providers


# Structure
The app features three pages
1. Home page that displays the current forecast
2. 7 day forecast page
3. Settings page

### Home Tab
The Home Tab is the first page of the application. It features a main weather screen and various weather information.
There is a Toggle button at the base of the tab which a View containing News from the chosen location. 

![alt text](https://github.com/sandrarawat/weather-news-app-ionic/blob/main/src/jpg/homeTab.jpg "Home Tab 1")

### 7 Day Forecast Tab
The 7 day forcast tab. It features a list of ion cards displaying weather for the next 7 days.
It also has a news button that can show the most recent news based on the selected city.


### Settings Page
Function:
1. The user can select required city for which the weather and news will be displayed
2. The user can select the units of measurement in which the data is displayed.

![alt text](https://github.com/sandrarawat/weather-news-app-ionic/blob/main/src/jpg/settingsPage.jpg "Settings Page")

# Api's
The application uses Weather and News API keys from [openweathermap.org](https://openweathermap.org/) and [newsapi.org](newsapi.org).

# Project Extras/Goodies

1. Added a reset function which clears stored settings.
2. Autocomplete in search bar, major cities listed
3. Tooltip added to describe button functions
4. News button changed to Toggle to switch news off/on
5. 7 day forecast added
    - contains a function to indicate wind direction
    - uses Pipe to calculate day and date
6. Added segment to Navbar to switch between Current Weather and 7DayForecast


