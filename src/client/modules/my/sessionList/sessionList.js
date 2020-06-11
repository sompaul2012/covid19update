import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
import { fetchWeather } from 'data/covidData';
import { fethcCovidData } from 'data/covidData';
//import templateOne from './templateOne.html';
//import templateTwo from './templateTwo.html';
//import card from './Compo';
export default class SessionList extends LightningElement {
    query = 'India';
    country = '';
    deathdata;
    confirmed;
    recovery;
    sessions = [];
    connectedCallback() {
        console.log('connectedcallback');
        getSessions().then((result) => {
            this.sessions = this.allSessions = result;
        });
    }
    handleChange(event) {
        this.query = event.target.value;
    }
    handlecountryChange(event) {
        console.log(event.target.value);
        this.country = event.target.value;
    }
    search = async (e) => {
        console.log('serach weather method called', this.query);
        if (e.key === 'Enter') {
            const data = await fetchWeather(this.query);
            console.log(data);
        }
    };
    searchData = async () => {
        console.log('serach covid method called', this.country);
        //if(e.key === 'Enter'){
        if (this.country !== '') {
            const data = await fethcCovidData(this.country);
            if (data !== undefined) {
                this.confirmed = data.confirmed.value;
                this.recovery = data.recovered.value;
                this.deathdata = data.deaths.value;
                console.log(data);
            }
        }

        //}
    };
    showTemplateOne = true;

    /*render() {
        console.log('render');
        return this.showTemplateOne ? templateOne : templateTwo;
    }*/
    switchTemplate() {
        this.showTemplateOne = !this.showTemplateOne;
    }
}
