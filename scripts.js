// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment
 const createHtml = (athlete) => {  //deconstructing athlete object
 const {firstName, surname, id, races} = athlete //declaring firstName, surname, id, races as variables
 const [{date, time}] = races.reverse() //reverses array -most relevant race is now first element / destructures athlete object into date + time

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2'); //created variable for title / creates new h2 element
  title.textContent= id; //sets content of title element to value of id
  fragment.appendChild(title); //appends title element to fragment / DocumentFragment holds group of DOM nodes

  const list = document.createElement('dl');

  const day = date.getDate(); //returns day of month
  const month = MONTHS[date.getmonth()]; //returns month
  const year = date.getFullYear(); //returns year 
  //() used to call methods on objects

  const [first, second, third, fourth] = timeAsArray; //deconstructing array to assign first 4 elements of timeAsArray to variables first, second, third, forth
  const total = first + second + third + fourth; //total variable assigned to sum of first, second, third, forth

  const hours = Math.floor(total / 60); //Math.floor function used to round down result
  const minutes = total % 60; //minutes variable assigned to remainder of total/60 

  list.innerHTML = /* html */ `//innerHTML property being set on list element to a string that defines content of list item
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd> //puts values of firstName and surname into string, seperated by a space

    <dt>Total Races</dt>
    <dd>${races.length}</dd> //puts length of races array into the sting(total number of races for athlete) 

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd> //puts day, month, year of latest race date into string, seperated with spaces

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toFixed(0).padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}</dd>// toFixed(0) used on hours and minutes variables to round off to nearest whole number 
    /padStart(2, '0') used on hours and minutes variables to display them as 2 digits.
    /the formatted values are combined into 1 string using : to seperate values (hh:mm)
  `;

  fragment.appendChild(list); //joins new <dl> element (list) to document fragment. /document fragment = container for holding elements that aren't part of the document tree, used to build a DOM structure in memory then join it to actual document tree
}
console.log(data.response.data)
const {NM372, SV782} = data.response.data //data = array containing 2 elements 
document.querySelector(NM372).appendChild(createHtml(NM372)); //uses querySelector to select DOM elements and joins HTML content created by createHtml() funtion to each element
document.querySelector(SV782).appendChild(createHtml(SV782));