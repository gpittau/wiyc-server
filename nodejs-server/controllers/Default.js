'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getCityForecast = function getCityForecast (req, res, next) {
  var city = req.swagger.params['city'].value;
  Default.getCityForecast(city)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrentCityWeather = function getCurrentCityWeather (req, res, next) {
  var city = req.swagger.params['city'].value;
  Default.getCurrentCityWeather(city)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrentLocationWeather = function getCurrentLocationWeather (req, res, next) {
  Default.getCurrentLocationWeather()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLocation = function getLocation (req, res, next) {
  Default.getLocation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLocationForecast = function getLocationForecast (req, res, next) {
  Default.getLocationForecast()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
