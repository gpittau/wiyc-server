'use strict';


/**
 * user's city location data & weather forecasts for 5 days
 * Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días 
 *
 * city String optional city
 * returns List
 **/
exports.getCityForecast = function(city) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "observations" : [ {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  }, {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  } ],
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
}, {
  "observations" : [ {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  }, {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  } ],
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * current weather for user's requested city
 * Devuelve los datos la city requerida y el estado del tiempo actual 
 *
 * city String requested city
 * returns CurrentObservation
 **/
exports.getCurrentCityWeather = function(city) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "observation" : {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  },
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * current weather for user's location
 * Devuelve los datos la ubicación actual según ip-api y el estado del tiempo actual 
 *
 * returns CurrentObservation
 **/
exports.getCurrentLocationWeather = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "observation" : {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  },
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * user's city location data
 * Devuelve los datos de ubicación city según ip-api 
 *
 * returns Location
 **/
exports.getLocation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Argentina",
  "cityName" : "Ciudad Autónoma de Buenos Aires",
  "countryCode" : "AR",
  "region" : "Buenos Aires"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * user's city location data & weather forecasts for 5 days
 * Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días 
 *
 * returns List
 **/
exports.getLocationForecast = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "observations" : [ {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  }, {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  } ],
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
}, {
  "observations" : [ {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  }, {
    "time_to" : "2000-01-23T04:56:07.000+00:00",
    "time_from" : "2000-01-23T04:56:07.000+00:00",
    "icon" : "10n",
    "description" : "light rain",
    "main" : "Rain",
    "id" : 500.0
  } ],
  "location" : {
    "country" : "Argentina",
    "cityName" : "Ciudad Autónoma de Buenos Aires",
    "countryCode" : "AR",
    "region" : "Buenos Aires"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

