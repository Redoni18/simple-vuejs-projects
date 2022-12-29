<template>
<div id="app" :class="changeBackground">
  <main>
    <div class="search-box">
      <input v-model="query"
          @keyup.enter="fetchWeather"
          type="text" class="search-bar"
          placeholder="Search..." />
    </div>
    <div class="weather-wrap" v-if="weather">
      <div class="location-box">
        <div class="location">
          {{weather.name}}, {{weather.sys.contry}}
        </div>
        <div class="date">
          {{dateBuilder()}}
        </div>
      </div>

      <div class="weather-box">
        <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
        <div class="weather">{{weather.weather[0].main}}</div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
export default{
  name: 'app',
  data() {
    return {
      api_key: 'aa01e2bf909455185b44a12c54591fb6',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: null,
    };
  },
  methods: {
    fetchWeather() {
      fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`)
        .then((res) => {
          return res.json();
        }).then(this.setResults);
    },

    setResults(results) {
      this.weather = results;
      console.log(this.weather);
      this.query = '';
    },
    dateBuilder() {
      const d = new Date();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
  computed: {
    changeBackground() {
      return this.weather != null && this.weather.main.temp >= 20 ? 'warm' : '';
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
}

#app{
  background-image: url('./assets/cold-bg.jpg');
  background-position: bottom;
  background-size: cover;
  transition: 0.4s;
}

#app.warm{
  background-image: url('./assets/warm-bg.jpg');
}

main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25),rgba(0,0,0,0.75));
}

.search-box{
  widows: 100%;
  margin: 30px;
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location{
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.location-box .date{
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box{
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
