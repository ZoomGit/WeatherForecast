function Weather(cityName,description){
    this.cityName=cityName;
    this.description=description;
    this._temperature='';
}
Object.defineProperty(Weather.prototype,'temprature',{
  get:function(){
      return this._temperature;
  }  ,
  set:function(value){
      this._temperature=(value * 1.8 +32).toFixed(2)+'F';
  }
});