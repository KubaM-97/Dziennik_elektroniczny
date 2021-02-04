// import { mapState } from "vuex"
// import { Component, Vue, Watch } from 'vue-property-decorator'

// @Component({
//   computed:{
//     ...mapState({
//         students: state => state.students,
//         marks: state => state.NewGrades.marks,
//         weights: state => state.NewGrades.weights,
//         descriptions: state => state.NewGrades.descriptions,
//         dates: state => state.NewGrades.dates,
//     }),
//   },
// })
// export default class GradesService extends Vue{
//   @Watch( "payload.description", { deep:true } )
//   payloadDescription(){
//     const inputGradeDescription = document.querySelectorAll("input.description")[this.index].value;
//     const descriptionCount = document.querySelectorAll("span.descriptionCount")[this.index];
//     const counter = (30 - (inputGradeDescription.length));
//     switch (counter) {
//         case 2:
//         case 3:
//         case 4:
//         case 22:
//         case 23:
//         case 24:
//             descriptionCount.innerHTML = `Pozostały: ${counter} znaki.`;
//             break;
//         case 1:
//             descriptionCount.innerHTML = `Pozostał: ${counter} znak.`;
//             break;
//         default:
//             descriptionCount.innerHTML = `Pozostało: ${counter} znaków.`;
       
//     }
//   }
//   //colors grades
//   gradeWeightColor(oneStudentMarks: [], oneStudentsWeights: []): string{
//     //adds new classes to divs with grades, what causes coloring them on green, yellow or red
//     let content = "";

//     for (let i = 0; i < oneStudentMarks.length; i++) {
//         if(oneStudentMarks[i]!==""){
//               if (oneStudentsWeights[i] == 1) {
//                   content += `<div class="gradeWeightColor gradeWeightGreen">${oneStudentMarks[i]}</div>`
//               } else if (oneStudentsWeights[i] == 2) {
//                   content +=  `<div class="gradeWeightColor gradeWeightYellow">${oneStudentMarks[i]}</div>`
//               } else if (oneStudentsWeights[i] == 3) {
//                   content +=  `<div class="gradeWeightColor gradeWeightRed">${oneStudentMarks[i]}</div>`
//               }
//               else if(oneStudentsWeights[i]==""){
//                 content +=  `<div class="gradeWeightColor">${oneStudentMarks[i]}</div>`
//               }
//         }
//         else if(oneStudentMarks[i]==""){
//           if(oneStudentsWeights[i]===1){
//             content +=  `<div class="gradeWeightColor gradeWeightGreen" style="width: 30px; height: 36px;"> </div>`
//           }
//           else if(oneStudentsWeights[i]===2){
//             content +=  `<div class="gradeWeightColor gradeWeightYellow" style="width: 30px; height: 36px"> </div>`
//           }
//           else if(oneStudentsWeights[i]===3){
//             content +=  `<div class="gradeWeightColor gradeWeightRed" style="width: 30px; height: 36px;"> </div>`
//           }
//         }
//     }

//     return content
//   }

//   //show tooltip after hovering on every grade
//   showTooltip(RootElement: any, SingleStudent: any): void {

//     const gradesInDiv = RootElement.querySelectorAll(".gradeWeightColor");
//     const marksArrayWithoutEmptyValues: Array<number> = [];
//     const weightsArrayWithoutEmptyValues: Array<number> = [];
//     const descriptionsArrayWithoutEmptyValues: Array<string> = [];
//     const datesArrayWithoutEmptyValues: Array<string> = [];


//     for (let i = 0; i < SingleStudent.marks.length; i++) {
//       if((SingleStudent.marks[i]!=="")&&(SingleStudent.weights[i]!=="")){
//           if(SingleStudent.descriptions[i]===""){
//             SingleStudent.descriptions[i] = "BRAK OPISU"
//           }
//           marksArrayWithoutEmptyValues.push(SingleStudent.marks[i]);
//           weightsArrayWithoutEmptyValues.push(SingleStudent.weights[i]);
//           descriptionsArrayWithoutEmptyValues.push(SingleStudent.descriptions[i]);
//           datesArrayWithoutEmptyValues.push(SingleStudent.dates[i]);
//       }

//    }

//     for (let i = 0; i < gradesInDiv.length; i++) {
      
//       if((marksArrayWithoutEmptyValues[i]!==undefined)||(weightsArrayWithoutEmptyValues[i]!==undefined)){

//         //draws tooltip after hovering
//         gradesInDiv[i].addEventListener("mouseenter", function() {
//             this.canvas(marksArrayWithoutEmptyValues[i], weightsArrayWithoutEmptyValues[i], descriptionsArrayWithoutEmptyValues[i], datesArrayWithoutEmptyValues[i], gradesInDiv[i])
//         }.bind(this), false);


//         //destroyes tooltip after leaving
//         gradesInDiv[i].addEventListener("mouseleave", function() {
//             const canv = RootElement.querySelector("canvas");
//             canv.parentNode.removeChild(canv);
//         });
//       }
//     }
//   }

//   //draws tooltip
//   canvas(SingleGrade: number, SingleWeight: number, SingleDescription: string, SingleDate: string, anotherDivWithGrade: any) {

//       const canvas = document.createElement("CANVAS");
//       anotherDivWithGrade.appendChild(canvas);

//       const canv: any = document.querySelector("canvas");
//       const ctx = canv.getContext("2d");

//       canvas.style['z-index'] = 2;
//       canvas.style.position = 'absolute';
//       canvas.style.padding = 0;
//       canvas.style.border = 0;

//       ctx.beginPath();
//       ctx.moveTo(0, 10);
//       ctx.lineTo(25, 15);
//       ctx.lineTo(220, 15);
//       ctx.lineTo(220, 115);
//       ctx.lineTo(25, 115);
//       ctx.lineTo(25, 40);
//       ctx.lineTo(0, 10);
//       ctx.stroke();
//       ctx.fillStyle = "#ffeab0";
//       ctx.fill();
//       ctx.fillStyle = "black";
//       ctx.font = "700 12px Arial";

//       ctx.fillText(`Ocena: ${SingleGrade}`, 40, 40);
//       ctx.fillText(`Waga: ${SingleWeight } `, 40, 60);

//       if(SingleDescription == "BRAK OPISU"){
//         ctx.fillText(`Opis:`, 40, 80);
//         ctx.font = "italic 700 12px Arial";
//         ctx.fillText(`${SingleDescription}`, 77, 80);
//         ctx.font = "700 12px Arial";
//       }
//       else{
//         ctx.fillText(`Opis: ${SingleDescription } `, 40, 80);
//       }

//       ctx.fillText(`Data: ${SingleDate}`, 40, 100);

//   }

//   //returns grades' average
//   avg(oneStudentMarksArray: [], oneStudentWeightsArray: []) {

//       let MarksSuperValue = 0;
//       let weightSum = 0;


//       for (let i = 0; i < oneStudentMarksArray.length; i++) {
//         if((oneStudentMarksArray[i]!=="") && (oneStudentWeightsArray[i]!=="")){
//           MarksSuperValue += oneStudentMarksArray[i] * oneStudentWeightsArray[i];
//           weightSum += oneStudentWeightsArray[i]
//         }
//       }

//       //round avg to 2 decimal places
//       const average: number = MarksSuperValue / weightSum;
//       let averageRounded: any = (Math.round(average * 100) / 100).toFixed(2);
//       if(isNaN(averageRounded)){
//         averageRounded = ""
//       }

//       return averageRounded;

//   }

//   //decides if student is threated
//   threatness(myAVG: any): string {
//       if ((myAVG < 2) && (myAVG != ""))  {
//           return "<span class='fire'>ZAGROŻENIE</span>"
//       } else {
//           return ""
//       }
//   }

//   //returns current Date in an Array
//   whatsTheDatePlease(): string {
//       const today = new Date();
//       const currentYear: number = today.getFullYear();
//       let currentMonth: any = today.getMonth()+1;
//       let currentDay: any = today.getDate();
//       let currentHours: any = today.getHours();
//       let currentMinutes: any = today.getMinutes();
//       let currentSeconds: any = today.getSeconds();
//       if (currentMonth < 10) {
//           currentMonth = `0${currentMonth}`;
//       }
//       if (currentDay < 10) {
//           currentDay = `0${currentDay}`;
//       }
//       if (currentHours < 10) {
//           currentHours = `0${currentHours}`;
//       }
//       if (currentMinutes < 10) {
//           currentMinutes = `0${currentMinutes}`;
//       }
//       if (currentSeconds < 10) {
//           currentSeconds = `0${currentSeconds}`;
//       }
  
//       // [DD.MM.YYYY]
//       const dateSubArrayDDMMYYYY = [currentDay, currentMonth, currentYear].join(".");
  
//       // [HH:MM:SS]
//       const dateSubArrayHHMMSS = [currentHours, currentMinutes, currentSeconds].join(":");
  
//       // [["DD.MM.YYYY"] ["HH:MM:SS"]]
//       const dateFull = [];
//       dateFull.push(dateSubArrayDDMMYYYY, dateSubArrayHHMMSS)
  
//       // DD.MM.YYYY HH:MM:SS
//       const dateFullStr = dateFull.join(" ")
  
//       // [DD.MM.YYYY HH:MM:SS]
//       const dateFullArray = [];
//       dateFullArray.push(dateFullStr);
  
//       return dateFullStr;
  
//   }
  
//   //adds a new grade to the student
//   moreGrades(): void {
//     this.gradesLength++;
//   }
  
//   //clears NewGrades object in Vuex
//   clearNewGradesArray(figure: any, index: number){
  
//     const store = this.$store.state.NewGrades;
  
//     for(const whatToChange in store){
//       if(index!==undefined){
//         store[whatToChange][index] = figure;
//       }
//       else{
//         store[whatToChange] = figure;
//       }
//     }
//   },
  
//   //removes grades that have marks but don`t have weights or don`t have marks but have weights
//   getRidOfEmptyGrades(){
  
//     const marks = this.marks;
//     const weights = this.weights;
//     const descriptions = this.descriptions;
//     const dates = this.dates;
  
//     for(let i=marks.length-1; i>=0; i--){
//         if( ((marks[i]!=="") && (weights[i]===""))
//         || ((marks[i]==="") && (weights[i]!==""))
//         || ((marks[i]==="") && (weights[i]===""))){
//             marks.splice(i, 1)
//             weights.splice(i, 1)
//             descriptions.splice(i, 1)
//             dates.splice(i, 1)
//         }
//     }
//   }
//   }
// }
// // export default GradesService
// // export default {
// //   watch: {
// //       "payload.description": {
// //         handler(){
// //           const inputGradeDescription = document.querySelectorAll("input.description")[this.index].value;
// //           const descriptionCount = document.querySelectorAll("span.descriptionCount")[this.index];
// //           const counter = (30 - (inputGradeDescription.length));
// //           switch (counter) {
// //               case 2:
// //               case 3:
// //               case 4:
// //               case 22:
// //               case 23:
// //               case 24:
// //                   descriptionCount.innerHTML = `Pozostały: ${counter} znaki.`;
// //                   break;
// //               case 1:
// //                   descriptionCount.innerHTML = `Pozostał: ${counter} znak.`;
// //                   break;
// //               default:
// //                   descriptionCount.innerHTML = `Pozostało: ${counter} znaków.`;
// //           }
// //         },
// //         deep:true
// //       }
// //   },
// //   computed:{
// //     ...mapState({
// //         students: state => state.students,
// //         marks: state => state.NewGrades.marks,
// //         weights: state => state.NewGrades.weights,
// //         descriptions: state => state.NewGrades.descriptions,
// //         dates: state => state.NewGrades.dates,
// //     }),
// //   },
// //   methods:
// //   {
// //       //colors grades
// //       gradeWeightColor(oneStudentMarks, oneStudentsWeights) {

// //           //adds new classes to divs with grades, what causes coloring them on green, yellow or red
// //           let content = "";

// //           for (let i = 0; i < oneStudentMarks.length; i++) {
// //               if(oneStudentMarks[i]!==""){
// //                     if (oneStudentsWeights[i] == 1) {
// //                         content += `<div class="gradeWeightColor gradeWeightGreen">${oneStudentMarks[i]}</div>`
// //                     } else if (oneStudentsWeights[i] == 2) {
// //                         content +=  `<div class="gradeWeightColor gradeWeightYellow">${oneStudentMarks[i]}</div>`
// //                     } else if (oneStudentsWeights[i] == 3) {
// //                         content +=  `<div class="gradeWeightColor gradeWeightRed">${oneStudentMarks[i]}</div>`
// //                     }
// //                     else if(oneStudentsWeights[i]==""){
// //                       content +=  `<div class="gradeWeightColor">${oneStudentMarks[i]}</div>`
// //                     }
// //               }
// //               else if(oneStudentMarks[i]==""){
// //                 if(oneStudentsWeights[i]===1){
// //                   content +=  `<div class="gradeWeightColor gradeWeightGreen" style="width: 30px; height: 36px;"> </div>`
// //                 }
// //                 else if(oneStudentsWeights[i]===2){
// //                   content +=  `<div class="gradeWeightColor gradeWeightYellow" style="width: 30px; height: 36px"> </div>`
// //                 }
// //                 else if(oneStudentsWeights[i]===3){
// //                   content +=  `<div class="gradeWeightColor gradeWeightRed" style="width: 30px; height: 36px;"> </div>`
// //                 }
// //               }
// //           }

// //           return content

// //       },

// //       //show tooltip after hovering on every grade
// //       showTooltip(RootElement, SingleStudent) {

// //          const gradesInDiv = RootElement.querySelectorAll(".gradeWeightColor");
// //          const marksArrayWithoutEmptyValues = [];
// //          const weightsArrayWithoutEmptyValues = [];
// //          const descriptionsArrayWithoutEmptyValues = [];
// //          const datesArrayWithoutEmptyValues = [];


// //          for (let i = 0; i < SingleStudent.marks.length; i++) {
// //            if((SingleStudent.marks[i]!=="")&&(SingleStudent.weights[i]!=="")){
// //                if(SingleStudent.descriptions[i]===""){
// //                  SingleStudent.descriptions[i] = "BRAK OPISU"
// //                }
// //                marksArrayWithoutEmptyValues.push(SingleStudent.marks[i]);
// //                weightsArrayWithoutEmptyValues.push(SingleStudent.weights[i]);
// //                descriptionsArrayWithoutEmptyValues.push(SingleStudent.descriptions[i]);
// //                datesArrayWithoutEmptyValues.push(SingleStudent.dates[i]);
// //            }

// //         }

// //          for (let i = 0; i < gradesInDiv.length; i++) {
// //            // alert(gradesInDiv.length)
// //            if((marksArrayWithoutEmptyValues[i]!==undefined)||(weightsArrayWithoutEmptyValues[i]!==undefined)){

// //              //draws tooltip after hovering
// //              gradesInDiv[i].addEventListener("mouseenter", function() {
// //                  this.canvas(marksArrayWithoutEmptyValues[i], weightsArrayWithoutEmptyValues[i], descriptionsArrayWithoutEmptyValues[i], datesArrayWithoutEmptyValues[i], gradesInDiv[i])
// //              }.bind(this), false);


// //              //destroyes tooltip after leaving
// //              gradesInDiv[i].addEventListener("mouseleave", function() {
// //                  const canv = RootElement.querySelector("canvas");
// //                  canv.parentNode.removeChild(canv);
// //              });
// //  }
// //          }
// //      },

// //       //draws tooltip
// //       canvas(SingleGrade, SingleWeight, SingleDescription, SingleDate, anotherDivWithGrade) {

// //           const canvas = document.createElement("CANVAS");
// //           anotherDivWithGrade.appendChild(canvas);

// //           const canv = document.querySelector("canvas");
// //           const ctx = canv.getContext("2d");

// //           canvas.style['z-index'] = 2;
// //           canvas.style.position = 'absolute';
// //           canvas.style.padding = 0;
// //           canvas.style.border = 0;

// //           ctx.beginPath();
// //           ctx.moveTo(0, 10);
// //           ctx.lineTo(25, 15);
// //           ctx.lineTo(220, 15);
// //           ctx.lineTo(220, 115);
// //           ctx.lineTo(25, 115);
// //           ctx.lineTo(25, 40);
// //           ctx.lineTo(0, 10);
// //           ctx.stroke();
// //           ctx.fillStyle = "#ffeab0";
// //           ctx.fill();
// //           ctx.fillStyle = "black";
// //           ctx.font = "700 12px Arial";

// //           ctx.fillText(`Ocena: ${SingleGrade}`, 40, 40);
// //           ctx.fillText(`Waga: ${SingleWeight } `, 40, 60);

// //           if(SingleDescription == "BRAK OPISU"){
// //             ctx.fillText(`Opis:`, 40, 80);
// //             ctx.font = "italic 700 12px Arial";
// //             ctx.fillText(`${SingleDescription}`, 77, 80);
// //             ctx.font = "700 12px Arial";
// //           }
// //           else{
// //             ctx.fillText(`Opis: ${SingleDescription } `, 40, 80);
// //           }

// //           ctx.fillText(`Data: ${SingleDate}`, 40, 100);

// //       },

// //       //returns grades' average
// //       avg(oneStudentMarksArray, oneStudentWeightsArray) {

// //           let MarksSuperValue = 0;
// //           let weightSum = 0;


// //           for (let i = 0; i < oneStudentMarksArray.length; i++) {
// //             if((oneStudentMarksArray[i]!=="") && (oneStudentWeightsArray[i]!=="")){
// //               MarksSuperValue += oneStudentMarksArray[i] * oneStudentWeightsArray[i];
// //               weightSum += oneStudentWeightsArray[i]
// //             }
// //           }

// //           //round avg to 2 decimal places
// //           const average = MarksSuperValue / weightSum;
// //           let averageRounded = (Math.round(average * 100) / 100).toFixed(2);
// //           if(isNaN(averageRounded)){
// //             averageRounded = ""
// //           }

// //           return averageRounded;

// //       },

// //       //decides if student is threated
// //       threatness(myAVG) {
// //           if ((myAVG < 2) && (myAVG != ""))  {
// //               return "<span class='fire'>ZAGROŻENIE</span>"
// //           } else {
// //               return ""
// //           }
// //       },

// //       //returns current Date in an Array
// //       whatsTheDatePlease() {
// //           const today = new Date();
// //           const currentYear = today.getFullYear();
// //           let currentMonth = today.getMonth()+1;
// //           let currentDay = today.getDate();
// //           let currentHours = today.getHours();
// //           let currentMinutes = today.getMinutes();
// //           let currentSeconds = today.getSeconds();
// //           if (currentMonth < 10) {
// //               currentMonth = `0${currentMonth}`;
// //           }
// //           if (currentDay < 10) {
// //               currentDay = `0${currentDay}`;
// //           }
// //           if (currentHours < 10) {
// //               currentHours = `0${currentHours}`;
// //           }
// //           if (currentMinutes < 10) {
// //               currentMinutes = `0${currentMinutes}`;
// //           }
// //           if (currentSeconds < 10) {
// //               currentSeconds = `0${currentSeconds}`;
// //           }

// //           // [DD.MM.YYYY]
// //           const dateSubArrayDDMMYYYY = [currentDay, currentMonth, currentYear].join(".");

// //           // [HH:MM:SS]
// //           const dateSubArrayHHMMSS = [currentHours, currentMinutes, currentSeconds].join(":");

// //           // [["DD.MM.YYYY"] ["HH:MM:SS"]]
// //           const dateFull = [];
// //           dateFull.push(dateSubArrayDDMMYYYY, dateSubArrayHHMMSS)

// //           // DD.MM.YYYY HH:MM:SS
// //           const dateFullStr = dateFull.join(" ")

// //           // [DD.MM.YYYY HH:MM:SS]
// //           const dateFullArray = [];
// //           dateFullArray.push(dateFullStr);

// //           return dateFullStr;

// //       },

// //       //adds a new grade to the student
// //       moreGrades() {
// //         this.gradesLength++;
// //       },

// //       //clears NewGrades object in Vuex
// //       clearNewGradesArray(figure, index){

// //         const store = this.$store.state.NewGrades;

// //         for(const whatToChange in store){
// //           if(index!==undefined){
// //             store[whatToChange][index] = figure;
// //           }
// //           else{
// //             store[whatToChange] = figure;
// //           }
// //         }
// //       },

// //       //removes grades that have marks but don`t have weights or don`t have marks but have weights
// //       getRidOfEmptyGrades(){

// //         const marks = this.marks;
// //         const weights = this.weights;
// //         const descriptions = this.descriptions;
// //         const dates = this.dates;

// //         for(let i=marks.length-1; i>=0; i--){
// //             if( ((marks[i]!=="") && (weights[i]===""))
// //             || ((marks[i]==="") && (weights[i]!==""))
// //             || ((marks[i]==="") && (weights[i]===""))){
// //                 marks.splice(i, 1)
// //                 weights.splice(i, 1)
// //                 descriptions.splice(i, 1)
// //                 dates.splice(i, 1)
// //             }
// //         }
// //       }
// //     }
// //   }